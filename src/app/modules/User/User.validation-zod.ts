import { z } from 'zod'

export const UserZodSchema = z
  .object({
    id: z
      .number({
        required_error: 'Unique ID Must Provided',
        invalid_type_error: 'Only Number'
      })
      .positive({ message: 'Invalid ID' }),
    name: z
      .string()
      .min(2, 'Name Too Much Short')
      .max(50, 'Name Too Much Long'),
    role: z.enum(['Admin', 'User', 'Normal']).default('Normal'),
    security: z.string().optional()
  })
  .strict()
