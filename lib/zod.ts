import { z } from 'zod';

export const profileSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' }),
  email: z
    .string({
      errorMap: () => ({ message: 'Please enter a valid email.' }),
    })
    .email(),
  plan: z.string().nonempty({ message: 'Please select a plan.' }),
});
