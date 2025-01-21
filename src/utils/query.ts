export function createQueryParams(params: Record<string, any>): string {
  const queryParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        queryParams.append(key, value.join(','))
      }
    } else if (value != null) {
      queryParams.append(key, value.toString())
    }
  })

  return queryParams.toString()
}
