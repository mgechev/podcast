import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent
      }
    ])
  ]
})
export class AboutModule {}
