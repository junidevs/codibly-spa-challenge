import { describe, expect, it } from "vitest"
import productsGuards from "./productsGuards"

// Assuming TProduct and TResSearchByQuery types are imported or defined in the same file

describe("productsGuards", () => {
  it("should return true for paginated product data", () => {
    const paginatedData: TResSearchByQuery<TProduct[]> = {
      page: 1,
      per_page: 10,
      total_pages: 2,
      data: [
        {
          id: 1,
          name: "Product 1",
          year: 2021,
          color: "Red",
          pantone_value: "19-1664",
        },
      ],
      support: {
        url: "https://example.com/support",
        text: "Support Information",
      },
    }

    const result = productsGuards(paginatedData)
    expect(result).toBe(true)
  })

  it("should return false for single product data (not an array)", () => {
    const singleProductData: TResSearchByQuery<TProduct> = {
      data: {
        id: 2,
        name: "Product 2",
        year: 2022,
        color: "Blue",
        pantone_value: "19-4052",
      },
      support: {
        url: "https://example.com/support",
        text: "Support Information",
      },
    }

    const result = productsGuards(singleProductData)
    expect(result).toBe(false)
  })

  it("should return true for paginated data with an empty array", () => {
    const emptyData: TResSearchByQuery<TProduct[]> = {
      page: 1,
      per_page: 10,
      total_pages: 0,
      data: [],
      support: {
        url: "https://example.com/support",
        text: "Support Information",
      },
    }

    const result = productsGuards(emptyData)
    expect(result).toBe(true)
  })

  it("should return false when the page property is missing, even with an array of products", () => {
    const dataWithoutPage: TResSearchByQuery<TProduct[]> = {
      per_page: 10,
      total_pages: 2,
      data: [
        {
          id: 3,
          name: "Product 3",
          year: 2023,
          color: "Green",
          pantone_value: "17-5641",
        },
      ],
      support: {
        url: "https://example.com/support",
        text: "Support Information",
      },
    }

    const result = productsGuards(dataWithoutPage)
    expect(result).toBe(false)
  })

  // Additional tests can be added here to cover more scenarios.
})
