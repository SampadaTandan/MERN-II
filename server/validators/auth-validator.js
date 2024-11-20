const {z} = require("zod");
//creating object schema
const userSchema = z.object({
    username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3,{message: "Name must be less than 255 characters"}),

    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10,{message: "Phone muct be 10 characters"}),
    email:z.
    string({required_error:"Email is required"})
    .trim()
    .email({message: "Invalid email"})
    .min(3,{message:"Email must be atleast 3 characters long"})
    .max(255,{messgae:"Email cannot exceed 255 characters"}),
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      {
        message:
          "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character",
      }
    )
  

})
