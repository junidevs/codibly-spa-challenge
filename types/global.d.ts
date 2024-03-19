declare global {
  type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>
      }
    : T

  type ErrorResponseFormat = {
    message: string;
    code: string;
    context: Record<string, string>;
  }

  declare module "react" {
    interface CSSProperties {
      [key: `--${string}`]: string | number;
    }
  }
}

export {}
