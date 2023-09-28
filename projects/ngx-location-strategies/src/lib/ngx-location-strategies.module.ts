import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { QueryLocationStrategyService } from './query-location-strategy.service';
import { NGX_ROUTE_QUERY_NAME } from './route-query-name.token';
import { ExtraOptions } from './types';

@NgModule()
export class NgxLocationStrategiesModule {
  static forRoot(options?: ExtraOptions): ModuleWithProviders<NgxLocationStrategiesModule> {
    const { routeQueryName = 'app' } = options || {};

    return {
      ngModule: NgxLocationStrategiesModule,
      providers: [
        {
          provide: LocationStrategy,
          useClass: QueryLocationStrategyService,
        },
        {
          provide: NGX_ROUTE_QUERY_NAME,
          useValue: routeQueryName,
        },
      ],
    };
  }
}
