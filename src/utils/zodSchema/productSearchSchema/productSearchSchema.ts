import { z } from "zod"

const productSearchSchema = z.object({
  query: z
    .string()
    .max(3, { message: "Filter input value between 1 - 12" })
    .min(0),

  // for next.js https://www.i18next.com/
})
export default productSearchSchema
