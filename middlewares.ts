const bcrypt = require('bcrypt');
const Cookies = require('js-cookie');
const sign = require('jwt-encode');

const saltRounds = 10;
// const en_code_cookie = (payload, secret_key) => {
//   return sign(payload, secret_key);
// };

module.exports = async function (req, res, next) {
  const fieldToCheck = 'email'; // Field you want to be unique
  const newValue = req.body[fieldToCheck];
  const route = req.originalUrl.split('/')[1]; // Get the route from URL
  const db = req.app.db;

  try {
    // Check if the middleware should apply for this route
    if (route === 'users' && req.method === 'POST') {
      if (
        db
          .get(route)
          .find({ [fieldToCheck]: newValue })
          .value()
      ) {
        return res.status(401).json({ error: `${fieldToCheck} đã tồn tại` });
      }
      if (req.body.password) {
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
          if (err) {
            res.status(500).json({ error: 'Lỗi mã hóa mật khẩu' });
          } else {
            req.body.password = hash;
            next();
          }
        });
      }
      next();
    } else if (route === 'login' && req.method === 'POST') {
      const user = db
        .get('users')
        .find({ [fieldToCheck]: newValue })
        .value();
      if (!user) {
        return res.status(401).json({ error: 'Email không tồn tại' });
      }

      const isCheck = await bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!isCheck) {
        return res.status(401).json({ error: 'Password not match' });
      }

      // const jwt_token = sign({ email: user.email, role: user.role }, 'secret');
      // const cookie_name =
      //   user.role === 'admin' ? 'cookie_shop_admin' : 'cookie_shop_customer';
      // // Cookies.set(cookie_name, jwt_token, {
      // //   expires: 7
      // // });

      //   return res
      //     .cookie(cookie_name, jwt_token, {
      //       httpOnly: true,
      //       secure: true,
      //       sameSite: 'lax',
      //       expires: new Date(Date.now() + 7 * 24 * 3600000),
      //     })
      //     .status(200)
      //     .json({ email: user.email, role: user.role });
      // }
      const secret = 'secret';
      const jwt = sign({ email: user.email, role: user.role }, secret);

      return res
        .status(200)
        .json({ email: user.email, role: user.role, accessToken: jwt });
    } else {
      next();
    }
  } catch (error) {}
};
