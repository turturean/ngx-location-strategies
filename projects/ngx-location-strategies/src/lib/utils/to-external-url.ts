import { getHash, normalizeQueryParam, normalizeSearchParamValue } from './utils';

export class ToExternalUrl {
  hash = '';
  queryParams = '';
  appQueryParam = '';

  constructor(internalUrl: string, appQueryParam: string) {
    const [pathname] = internalUrl.split('?');
    const querySearch = new URLSearchParams(normalizeQueryParam(internalUrl));

    querySearch.delete(appQueryParam);

    this.hash = getHash(internalUrl);
    this.queryParams = decodeURIComponent(querySearch.toString());
    this.appQueryParam = normalizeSearchParamValue(pathname) !== '/' ? `${appQueryParam}=${normalizeSearchParamValue(pathname)}` : '';
  }

  getUrl() {
    const queries = [];

    if (this.appQueryParam) {
      queries.push(this.appQueryParam);
    }

    if (this.queryParams.length) {
      queries.push(this.queryParams);
    }

    return `${queries.length ? '?' + queries.join('&') : ''}${this.hash}`;
  }
}
