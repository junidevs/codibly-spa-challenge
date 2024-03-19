import { z } from "zod"

const productSearchSchema = z.object({
  query: z
    .string()
    .max(3)
    .min(1)
    .regex(/^\d+$/, { message: "Only digits are allowed" }), // i18n for internationalization
  // for next.js https://www.i18next.com/
})
export default productSearchSchema
