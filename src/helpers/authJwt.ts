type Header = {
  alg: string;
  typ: string;
};

type Payload = {
  [key: string]: string | number; // Example type, adjust as needed
};

// Example use of createSignature function - Placeholder for real implementation
function createSignature(
  encodedHeader: string,
  encodedPayload: string,
  secret: string
): string {
  console.log(encodedHeader, encodedPayload, secret);

  // This is a placeholder. You should implement HMAC SHA256 or equivalent
  return 'signature';
}
export function encodeJWT(
  header: Header,
  payload: Payload,
  secret: string
): string {
  // Simplified pseudo-implementation (use a library like jsonwebtoken in real scenarios)
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    'base64url'
  );
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    'base64url'
  );
  const signature = createSignature(encodedHeader, encodedPayload, secret); // Implement this function based on your needs
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

export function decodeJWT(token: string): { header: Header; payload: Payload } {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Token format is incorrect');
  }
  const [encodedHeader, encodedPayload] = parts;
  const decodedHeader = JSON.parse(
    Buffer.from(encodedHeader, 'base64url').toString()
  ) as Header;
  const decodedPayload = JSON.parse(
    Buffer.from(encodedPayload, 'base64url').toString()
  ) as Payload;
  // Note: Signature is not verified here. Use a library like jsonwebtoken to verify the signature.
  return { header: decodedHeader, payload: decodedPayload };
}
