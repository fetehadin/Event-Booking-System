import bcrypt from "bcrypt";
import  prisma  from "../lib/prisma.js";

export const createUser = async (data: any) => {
  const { full_name, email, password } = data;

  // 1. Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Save user
  const user = await prisma.user.create({
    data: {
      fullName: full_name,
      email,
      passwordHash: hashedPassword,
      role: "CUSTOMER",
    },
  });

  return user;
};
