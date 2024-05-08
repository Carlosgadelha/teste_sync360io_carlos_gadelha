import { User } from "@prisma/client";

export type UserData = User
export type CreateUserData = Omit<User, "id"|"createdAt"|"updatedAt">;
export type UpdateUserData = Omit<User, "createdAt"|"updatedAt">;