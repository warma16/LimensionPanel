// Generated by ts-to-zod
import { z } from "zod";

export const missionSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    present: z.number(),
    assignees: z.array(z.number()),
    contributors: z.array(z.number()),
    urgency: z.number(),
    status: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    partition: z.number()
});
