function getSeparatorIndex(param: string) {
  let separatorIndex = param.indexOf('=');
  return separatorIndex;
}

const isStringEmpty = (str: string) => str.length == 0;

export function getQueryParamsFromString(paramString: string) {
  return isStringEmpty(paramString)
    ? null
    : paramString.split('&').map((param) => {
        return getSeparatorIndex(param) == -1
          ? { key: param, value: null }
          : {
              key: param.substring(0, getSeparatorIndex(param)),
              value: param.substring(getSeparatorIndex(param) + 1),
            };
      });
}
