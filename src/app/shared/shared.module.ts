import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon';

import {CarouselComponent, MenuComponent} from './components';

@NgModule({
  declarations: [
    CarouselComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatCarouselModule.forRoot(),
    MatMenuModule,
    MatIconModule,
  ],
  exports:[
    CarouselComponent,
    MenuComponent,
    MatMenuModule,
    MatIconModule,
  ],
})
export class SharedModule { }
