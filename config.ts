import { config } from 'dotenv';
import { z } from 'zod';

config();

export const configuration = z
  .object({
    productName: z.string().min(1),
  })
  .parse({
    productName: process.env.PRODUCT_NAME,
  });
