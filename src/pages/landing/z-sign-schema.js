import { z } from "zod";

const registrationSchema = (isLogin) =>
  z
    .object({
      ...(isLogin
        ? {}
        : {
            name: z
              .string()
              .min(2, { message: "Name must be at least 2 characters long" })
              .max(50, { message: "Name must be less than 50 characters" }),
          }),

      handle: z.string().optional(),
      email: z.string().optional(),

      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .max(100, { message: "Password must be less than 100 characters" }),
    })
    .superRefine((data, ctx) => {
      const isEmailFilled = data.email?.trim();
      const isHandleFilled = data.handle?.trim();

      if (isLogin) {
        // Must provide at least email or handle
        if (!isEmailFilled && !isHandleFilled) {
          ctx.addIssue({
            path: ["handle"],
            code: z.ZodIssueCode.custom,
            message: "Either handle or email is required",
          });
          ctx.addIssue({
            path: ["email"],
            code: z.ZodIssueCode.custom,
            message: "Either handle or email is required",
          });
        }

        // If email is filled, validate format manually
        if (
          isEmailFilled &&
          !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(isEmailFilled)
        ) {
          ctx.addIssue({
            path: ["email"],
            code: z.ZodIssueCode.custom,
            message: "Invalid email address",
          });
        }
      } else {
        // Registration mode strict rules
        if (!isEmailFilled) {
          ctx.addIssue({
            path: ["email"],
            code: z.ZodIssueCode.custom,
            message: "Email is required",
          });
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(isEmailFilled)) {
          ctx.addIssue({
            path: ["email"],
            code: z.ZodIssueCode.custom,
            message: "Invalid email address",
          });
        }

        if (!isHandleFilled) {
          ctx.addIssue({
            path: ["handle"],
            code: z.ZodIssueCode.custom,
            message: "Handle is required",
          });
        } else if (
          !/^@?[\w\d_]+$/.test(isHandleFilled) ||
          isHandleFilled.length < 3 ||
          isHandleFilled.length > 20
        ) {
          ctx.addIssue({
            path: ["handle"],
            code: z.ZodIssueCode.custom,
            message:
              "Handle must be 3-20 characters and only include letters, numbers, or _",
          });
        }
      }
    });

export default registrationSchema;
