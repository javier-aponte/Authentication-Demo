import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findUser = async (req, res) => {
  const id = req.session.userId;

  const user = await prisma.user.findUnique({
    where: { id: id },
    select: { id: true, name: true, lastName: true, email: true, address: true, phone: true }
  });

  if (!user) return res.status(401).json({ "success": false });

  return res.json({ "success": true, "user": user });
};
