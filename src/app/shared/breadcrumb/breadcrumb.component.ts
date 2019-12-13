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
  ) {}

  ngOnInit() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    const isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoute = path.split('/').pop();
    const isDynamicRoute = lastRoute.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoute.split(':')[1];
      path = path.replace(lastRoute, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: Breadcrumb = {
        label,
        url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
