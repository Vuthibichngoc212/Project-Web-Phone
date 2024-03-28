const bcrypt = require('bcrypt');
const Cookies = require ('js-cookie');
const sign = require ('jwt-encode');
const saltRounds = 10;
module.exports = async function (req, res, next) {
  const fieldToCheck = 'email'; // Field you want to be unique
  const newValue = req.body[fieldToCheck];
  const route = req.originalUrl.split('/')[1]; // Get the route from URL
  const db = req.app.db;

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
  }
  if (route === 'login' && req.method === 'POST') {
    const user = db
      .get('users')
      .find({ [fieldToCheck]: newValue })
      .value();
    if (!user) {
      return res.status(401).json({ error: 'Email không tồn tại' });
    }

    const isCheck = await bcrypt.compareSync(req.body.password, user.password);
    if (!isCheck) {
      return res.status(401).json({ error: 'Password not match' });
    }
    const secret = 'secret';
    const jwt = sign({ email: user.email, role: user.role }, secret);
    // console.log(11, { email: user.email, role: user.role });

    return res.status(200).json({ email: user.email, role: user.role,  accessToken: jwt });
  }
};
