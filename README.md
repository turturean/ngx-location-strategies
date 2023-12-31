# Angular Query Location Strategy

By default Angular has 2 option for route your application:
1. [PathLocationStrategy](https://angular.io/api/common/PathLocationStrategy) Angular by default is used that relies in the History API , that means that is only usable by browsers that can support HTML5.
2. [HashLocationStrategy](https://angular.io/api/common/HashLocationStrategy) This works by adding a hash sign <kbd>#</kbd> in the URL, the portion after the <kbd>#</kbd> indicates the view that will be used by the router. It is supported by all browsers even older ones.
3. [QueryLocationStrategy](https://github.com/turturean/ngx-location-strategies) This location strategy it is a combination between PathLocationStrategy and HashLocationStrategy.
   One custom parameter indicates the view that will be used by the router and without to have dependencies by route pathname.

|                         |   Path Strategy    |   Hash Strategy    |   Query Strategy   |
|:------------------------|:------------------:|:------------------:|:------------------:|
| Use <kbd>#</kbd> in url | :white_check_mark: | :heavy_minus_sign: | :white_check_mark: |
| Runs in any path names  | :heavy_minus_sign: | :white_check_mark: | :white_check_mark: |


# Installation
```typescript
@NgModule({
   imports: [
      RouterModule.forRoot(routes),
      NgxLocationStrategiesModule.forRoot({ routeQueryName: "my-app" })
   ],
   exports: [RouterModule],
})
export class AppRoutingModule {
}
```

# Example
Path Strategy http://localhost:4200/posts?orderby=name <br/>
Hash Strategy http://localhost:4200/#/posts&orderby=name <br/>
Query Strategy http://localhost:4200/?my-app=/posts&orderby=name#myTag <br/>
