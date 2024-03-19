/**
 * Type guard to check if a given response is paginated [ contains page field ].
 *
 * @param data - The response data to check.
 * @returns A boolean indicating whether the data is paginated.
 */

const productsGuards = (
  data: TResSearchByQuery<TProduct | TProduct[]>
): data is TResSearchByQuery<TProduct[]> =>
  "page" in data && Array.isArray(data.data)

export default productsGuards
