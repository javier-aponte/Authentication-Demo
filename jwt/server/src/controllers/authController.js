import { PrismaClient } from "@prisma/client";
import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: email },
    select: { id: true, email: true, password: true }
  })

  if (!user) return res.status(401).json({ "success": false });

  const isValidPassword = compareSync(password, user.password);

  if (!isValidPassword) return res.status(401).json({ "success": false });

  // JWT - start
  const payload = { "id": user.id };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, { "expiresIn": "1h" });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, { "expiresIn": "7d" });
  // JWT - end

  res.cookie("ACCESS_TOKEN", accessToken, { "maxAge": 1000 * 60 * 60, "httpOnly": true });
  res.cookie("REFRESH_TOKEN", refreshToken, { "maxAge": 1000 * 60 * 60 * 24 * 7, "httpOnly": true });

  return res.json({ "success": true });
};

export const checkSession = async (req, res) => {
  return res.json({ "success": true });
}