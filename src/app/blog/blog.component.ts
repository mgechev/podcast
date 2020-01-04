import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  template: `
    <h1>Overview of blog posts</h1>

    <a *ngFor="let blog of blogs$|async" [routerLink]='[blog.route]'>
      <article>
        <h3>{{blog.title || blog.route}}</h3>
        <h4> {{ blog.published | date:"shortDate" }}</h4>
        <p>{{blog.description}}</p>
      </article>
    </a>
  `,
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  blogs$ = this.srs.available$.pipe(
    map(routeList => routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`)))
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
