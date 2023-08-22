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
        return {key: param.substring(0, separatorIndex), value: param.substring(separatorIndex + 1)}
      }
    }
  )
}
