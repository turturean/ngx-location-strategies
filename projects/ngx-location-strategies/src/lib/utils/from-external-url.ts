import { getHash, normalizeQueryParam } from './utils';

export class FromExternalUrl {
  hash = '';
  queryParams = '';
  appQueryParam = '';

  constructor(externalUrl: string, appQueryParam: string) {
    const querySearch = new URLSearchParams(normalizeQueryParam(externalUrl));
    const app = querySearch.get(appQueryParam);

    querySearch.delete(appQueryParam);

    this.hash = getHash(externalUrl);
    this.queryParams = decodeURIComponent(querySearch.toString());
    this.appQueryParam = app && app !== '/' ? app : '/';
  }

  getUrl() {
    return `${this.appQueryParam}${this.queryParams.length ? '?' + this.queryParams : ''}${this.hash}`;
  }
}
