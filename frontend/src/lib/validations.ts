import { z } from "zod";

export const personSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(255, { message: "Name cannot exceed 255 characters" }),
  email: z.string().email({ message: "Invalid email format" }),
  phone: z
    .string()
    .min(8, { message: "Phone number must be at least 8 characters long" })
    .max(12, { message: "Phone number cannot exceed 12 characters" }),
  hobbies: z.string().optional(),
});

export type Person = z.infer<typeof personSchema>;
