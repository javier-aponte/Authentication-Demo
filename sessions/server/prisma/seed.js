import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()
const saltRounds = 10;

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "am@gmail.com",
      password: bcrypt.hashSync("test123", saltRounds),
      name: "Alfonso",
      lastName: "Maleinos",
      address: "Calle Falsa 123",
      phone: "930028290"
    }
  });

  console.log(user);

  const user2 = await prisma.user.create({
    data: {
      email: "aa@gmail.com",
      password: bcrypt.hashSync("test321", saltRounds),
      name: "Alejandra",
      lastName: "Araujo",
      address: "Fake Street 321",
      phone: "950168230"
    }
  });

  console.log(user2);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })