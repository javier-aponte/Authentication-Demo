import jwt from 'jsonwebtoken';

export const authenticateAccessToken = (req, res, next) => {
  const accessToken = req.cookies['ACCESS_TOKEN'];

  try {
    const accessTokenPayload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
    req.body.id = accessTokenPayload.id;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
      authenticateRefreshToken(req, res, next);
    }
  }
};

export const authenticateRefreshToken = (req, res, next) => {
  const refreshToken = req.cookies['REFRESH_TOKEN'];

  if (!refreshToken) return res.status(401).json({ "success": false });

  try {
    // JWT - start
    const refreshTokenPayload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
    const accessToken = jwt.sign({ "id": refreshTokenPayload.id }, process.env.ACCESS_TOKEN_KEY, { "expiresIn": "1h" });
    // JWT - end

    res.cookie("ACCESS_TOKEN", accessToken, { "maxAge": 1000 * 60 * 60, "httpOnly": true });

    req.body.id = refreshTokenPayload.id;

    next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ "success": false });
    }
  }
}