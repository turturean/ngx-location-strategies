import { APP_BASE_HREF, LocationChangeListener, LocationStrategy, PlatformLocation } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { normalizeQueryParams } from './utils/utils';
import { NGX_ROUTE_QUERY_NAME } from './route-query-name.token';
import { FromExternalUrl } from './utils/from-external-url';
import { ToExternalUrl } from './utils/to-external-url';

@Injectable()
export class QueryLocationStrategyService extends LocationStrategy {
  private _baseHref: string = '';
  private _removeListenerFns: (() => void)[] = [];

  constructor(private _platformLocation: PlatformLocation, @Inject(NGX_ROUTE_QUERY_NAME) private appQueryName: string, @Optional() @Inject(APP_BASE_HREF) _baseHref?: string) {
    super();
    if (_baseHref != null) {
      this._baseHref = _baseHref;
    }
  }

  override path(includeHash: boolean = false): string {
    const parsedUrl = new FromExternalUrl(this._platformLocation.search + this._platformLocation.hash, this.appQueryName);

    return parsedUrl.getUrl();
  }

  override prepareExternalUrl(internal: string): string {
    const internalUrl = decodeURIComponent(internal);
    const parsed = new ToExternalUrl(internalUrl, this.appQueryName);

    return `${this._platformLocation.pathname}${parsed.getUrl()}`;
  }

  override pushState(state: any, title: string, path: string, queryParams: string) {
    let url: string | null = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));

    if (url.length == 0) {
      url = this._platformLocation.pathname;
    }

    this._platformLocation.pushState(state, title, url);
  }

  override replaceState(state: any, title: string, path: string, queryParams: string) {
    let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));

    if (url.length == 0) {
      url = this._platformLocation.pathname;
    }

    this._platformLocation.replaceState(state, title, url);
  }

  override forward(): void {
    this._platformLocation.forward();
  }

  override back(): void {
    this._platformLocation.back();
  }

  override getState(): unknown {
    return this._platformLocation.getState();
  }

  override historyGo(relativePosition: number = 0): void {
    this._platformLocation.historyGo?.(relativePosition);
  }

  override onPopState(fn: LocationChangeListener): void {
    this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
  }

  override getBaseHref(): string {
    return this._baseHref;
  }

  ngOnDestroy(): void {
    while (this._removeListenerFns.length) {
      this._removeListenerFns.pop()!();
    }
  }

}
