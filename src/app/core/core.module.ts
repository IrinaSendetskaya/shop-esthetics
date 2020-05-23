import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { 
  HeaderComponent,
  FooterComponent,
  LayoutComponent,
  NavigationHeaderComponent,
} from './layout/components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports:[
    LayoutComponent,
  ],
})
export class CoreModule { }
