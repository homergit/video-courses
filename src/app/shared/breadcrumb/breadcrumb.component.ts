import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import {Breadcrumb} from './breadcrumb.interface';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[];
 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    })
  }


  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
  
    const lastRoute = path.split('/').pop();
    const isDynamicRoute = lastRoute.startsWith(':');
    if(isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoute.split(':')[1];
      path = path.replace(lastRoute, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }
  
    const nextUrl = path ? `${url}/${path}` : url;
  
    const breadcrumb: Breadcrumb = {
        label: label,
        url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}










// /**
//    * Recursively build breadcrumb according to activated route.
//    * @param route
//    * @param url
//    * @param breadcrumbs
//    */
//   buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {


    
//     //If no routeConfig is avalailable we are on the root path
//     let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
//     let isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
//     let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
  
//     // If the route is dynamic route such as ':id', remove it
//     const lastRoute = path.split('/').pop();
//     const isDynamicRoute = lastRoute.startsWith(':');
//     if(isDynamicRoute && !!route.snapshot) {
//       const paramName = lastRoute.split(':')[1];
//       path = path.replace(lastRoute, route.snapshot.params[paramName]);
//       label = route.snapshot.params[paramName];
//     }
  
//     //In the routeConfig the complete path is not available,
//     //so we rebuild it each time
//     const nextUrl = path ? `${url}/${path}` : url;
  
//     const breadcrumb: Breadcrumb = {
//         label: label,
//         url: nextUrl,
//     };
//     // Only adding route with non-empty label
//     const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
//     if (route.firstChild) {
//         //If we are not on our current path yet,
//         //there will be more children to look after, to build our breadcumb
//         return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
//     }
//     return newBreadcrumbs;
//   }






















// export class BreadcrumbComponent implements OnInit {

//   breadcrumbs: any;

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit() {
//     this.router.events
//       .pipe(filter(event => event instanceof NavigationEnd))
//       .pipe(map(() => this.activatedRoute))
//       .pipe(map((route) => {
//         while (route.firstChild) { route = route.firstChild; }
//         return route;
//       }))
//       .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
//       .subscribe(route => {
//         let snapshot = this.router.routerState.snapshot;
//         this.breadcrumbs = [];
//         let url = snapshot.url;
//         let routeData = route.snapshot.data;

//         console.log(routeData);
//         let label = routeData['breadcrumb'];
//         let params = snapshot.root.params;

//         this.breadcrumbs.push({
//           url: url,
//           label: label,
//           params: params
//         });
//       });
//   }

// }
