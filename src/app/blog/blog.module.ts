import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [CommonModule, BlogRoutingModule, ComponentsModule, HttpClientModule]
})
export class BlogModule {}
