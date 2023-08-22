import {getQueryParamsFromString} from "../src/query.helper.js";

describe('query.helper', () => {
  it('should return null if the string is empty', () => {
    expect(getQueryParamsFromString('')).toBeNull();
  });

  it('should return an array of dictionaries', () => {
    expect(getQueryParamsFromString('a=1&b=2')).toEqual([{"key": "a", "value": "1"}, {"key": "b", "value": "2"}]);
  });

  it('default case when not a query string', () => {
    expect(getQueryParamsFromString('a longer string')).toEqual([{"key": "a longer string", "value": null}]);
  });
})
