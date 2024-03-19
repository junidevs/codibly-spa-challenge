import React from "react"
import { render } from "@testing-library/react"
import ProductsIndicator from "./ProductsIndicator"
import { describe, expect, test } from "vitest"

describe("ProductsIndicator", () => {
  test("renders with default props", () => {
    const { container } = render(
      <ProductsIndicator startNode={<div>Start</div>} />
    )
    expect(container.firstChild).toBeTruthy()
  })

  test("renders with custom orientation", () => {
    const { container } = render(
      <ProductsIndicator orientation="column" startNode={<div>Start</div>} />
    )
    const element = container.firstChild as Element
    const styles = getComputedStyle(element)
    expect(styles.flexDirection).toBe("column")
  })
})
