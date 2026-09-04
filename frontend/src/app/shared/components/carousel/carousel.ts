import { NgComponentOutlet } from '@angular/common';
import { Component, input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-carousel',
  imports: [NgComponentOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  public readonly carouselItemsData = input.required<any>();
  public readonly carouselItemComponent = input.required<any>();
}
