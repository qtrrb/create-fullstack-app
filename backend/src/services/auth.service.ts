import { User } from "../models/user.model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAndUpdateOrCreate(user: User): Promise<User> {
  const user_db = await prisma.user.upsert({
    where: {
      id: user.id,
    },
    update: {
      username: user.username,
      image: user.image,
    },
    create: {
      id: user.id,
      username: user.username,
      image: user.image,
    },
  });
  return user_db;
}
