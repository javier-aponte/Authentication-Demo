import jwt from 'jsonwebtoken';

export const authenticateAccessToken = (req, res, next) => {
  const accessToken = req.cookies.ACCESS_TOKEN;

  if (!accessToken) return res.status(401).json({ "success": false });

  try {
    const accessTokenPayload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
    req.body.id = accessTokenPayload.id;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) return res.status(401).json({ "success": false, "tokenStatus": "invalid" });
    else if (error instanceof jwt.TokenExpiredError) return res.status(401).json({ "success": false, "tokenStatus": "expired" });
  }
};