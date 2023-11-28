export const validateLoginRequest = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || !email.trim() || !password.trim()) return res.status(401).json({ "success": false });

  next()
}