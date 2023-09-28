# Angular Query Location Strategy

By default Angular has 2 option for route your application:
1. [PathLocationStrategy](https://angular.io/api/common/PathLocationStrategy) Angular by default is used that relies in the History API , that means that is only usable by browsers that can support HTML5.
2. [HashLocationStrategy](https://angular.io/api/common/HashLocationStrategy) This works by adding a hash sign # in the URL, the portion after the <kbd>#</kbd> indicates the view that will be used by the router. It is supported by all browsers even older ones.
3. QueryLocationStrategy This location strategy it is a combination between PathLocationStrategy and HashLocationStrategy. One parameter to be responsible for the path and without to have dependencies by route pathname.

|                | Use <kbd>#</kbd> in url | Server enable <kbd>module rewrite</kbd> |
|:---------------|:-----------------------:|:---------------------------------------:|
| Path Strategy  |          :+1:           |                                         |
| Hash Strategy  |                         |                  :+1:                   |
| Query Strategy |          :+1:           |                  :+1:                   |

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
Query Strategy http://localhost:4200/?app=/posts&orderby=name#myTag <br/>
