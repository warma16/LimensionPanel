// Generated by ts-to-zod
import { z } from "zod";

export const partitionSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
});
