export function getQueryParamsFromString (paramString: string) {
  if (!paramString) {
    return null
  }

  return paramString.split('&').map(
    (param) => {
      let separatorIndex = param.indexOf('=')
      if (separatorIndex == -1) {
        return {key: param, value: null}
      } else {
        let part1 = param.substring(0, separatorIndex)
        let part2 = param.substring(separatorIndex + 1)
        return {key: part1, value: part2}
      }
    }
  )
}
