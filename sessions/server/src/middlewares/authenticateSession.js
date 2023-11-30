export const authenticateSession = async (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ "success": false });
  }
}