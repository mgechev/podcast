import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  {
    path: ':blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
