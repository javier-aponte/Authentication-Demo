import { PrismaClient } from "@prisma/client";
import { compareSync } from 'bcrypt';

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

  req.session.userId = user.id

  return res.json({ "success": true });
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ "success": false});
    res.clearCookie('connect.sid');
    return res.json({ "success": true });
  })
}

export const checkSession = async (req, res) => {
  return res.json({ "success": true });
}