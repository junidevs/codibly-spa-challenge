import { describe, expect, it } from "vitest"
import productSearchSchema from "./productSearchSchema"

describe("productSearchSchema", () => {
  it("should pass with valid data", () => {
    const result = productSearchSchema.safeParse({
      query: "123",
    })

    expect(result.success).toBe(true)
  })

  it("should fail when query length exceeds 3 characters", () => {
    const result = productSearchSchema.safeParse({
      query: "1234",
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error?.errors[0]?.message).toBe(
        "Filter input value between 1 - 12"
      )
    }
  })

  it("should fail when query length is less than 0 characters", () => {
    const result = productSearchSchema.safeParse({
      query: "",
    })

    expect(result.success).toBe(true)
  })
})
