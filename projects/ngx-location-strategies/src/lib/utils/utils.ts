export function normalizeQueryParams(params: string) {
  return params && params[0] !== '?' ? '?' + params : params;
}

export const getHash = (url: string) => url.indexOf('#') !== -1 ? '#' + url.split('#')[1] : '';

export const normalizeSearchParamValue = (value: string) => value && value.indexOf('#') !== -1 ? value.split('#')[0] : value;

export const normalizeSearchParams = (searchParams: string) => searchParams.indexOf('?') !== -1 ? searchParams.split('?')[1] : '';

export function normalizeQueryParam(searchParams: string) {
  if (!searchParams) {
    return '';
  }

  const queryParams = normalizeSearchParams(searchParams)
    .split('&')
    .filter(searchParam => !!searchParam)
    .reduce((acc, searchParam) => {
      const [key, value] = searchParam.split('=');

      acc.push(`${key}=${normalizeSearchParamValue(value)}`);

      return acc;
    }, [] as string[]);

  return queryParams.join('&');
}
