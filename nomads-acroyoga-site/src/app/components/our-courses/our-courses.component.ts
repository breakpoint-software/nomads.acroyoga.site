import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class OurCoursesComponent implements OnInit {
  slides = [
    { image: '../../../assets/img/our-courses/foto1.jpg' },
    { image: '../../../assets/img/our-courses/foto2.jpg' },
    { image: '../../../assets/img/our-courses/foto3.jpg' },
    { image: '../../../assets/img/our-courses/foto4.jpg' },
    { image: '../../../assets/img/our-courses/foto5.jpg' },
    { image: '../../../assets/img/our-courses/foto6.jpg' },
    { image: '../../../assets/img/our-courses/foto7.jpg' },
  ];
  constructor(
    private deviceDetector: DeviceDetectorService,
    private config: NgbCarouselConfig
  ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}
}
