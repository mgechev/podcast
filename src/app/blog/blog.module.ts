import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';

import { BlogComponent } from './blog.component';

export const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '',
    component: BlogComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class BlogModule {}
