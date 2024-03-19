import { z } from "zod"

const productSearchSchema = z.object({
  query: z
    .string()
    .max(3)
    .min(0)
    .regex(/^[\d\s]+$/, { message: "Only digits are allowed" }), // i18n for internationalization
  // for next.js https://www.i18next.com/
})
export default productSearchSchema
