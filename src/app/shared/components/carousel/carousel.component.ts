import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public slides=[];

  constructor() { }

  ngOnInit(): void {
    this.slides=['/assets/images/women.jpeg','/assets/images/women2.png','/assets/images/women3.jpg'];
  }

}
