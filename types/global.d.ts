declare global {
  type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>
      }
    : T

  type ErrorResponseFormat = {
    message: string
    code: string
    context: Record<string, string>
  }
  type TResSearchByQuery<T> = {
    page?: number
    per_page?: number
    total_pages?: number
    data: T
    support: {
      url: string
      text: string
    }
  }
  type TProduct = {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
  }
  declare module "react" {
    interface CSSProperties {
      [key: `--${string}`]: string | number
    }
  }
}

export {}
