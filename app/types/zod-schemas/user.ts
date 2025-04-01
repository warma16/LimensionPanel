// Generated by ts-to-zod
import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    username: z.string(),
    password: z.string(),
    email: z.string(),
    verified: z.boolean(),
    extraEmail: z.array(z.string()),
    group: z.array(z.number()),
    totp: z.string().nullable(),
    webauthn: z.string().nullable()
});
