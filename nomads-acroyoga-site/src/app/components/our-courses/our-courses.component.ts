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
    { image: 'assets/img/our-courses/foto1.jpg' },
    { image: 'assets/img/our-courses/foto2.jpg' },
    { image: 'assets/img/our-courses/foto3.jpg' },
    { image: 'assets/img/our-courses/foto4.jpg' },
    { image: 'assets/img/our-courses/foto5.jpg' },
    { image: 'assets/img/our-courses/foto6.jpg' },
    { image: 'assets/img/our-courses/foto7.jpg' },
  ];

  classes = [
    {
      description: 'Wednesday at 5:30 PM CET',
      link: '/contact-us/Wednesday at 5:30 PM',
    },
    {
      description: 'Wednesday at 7:30 PM CET',
      link: '/contact-us/Mondays at 7:30 PM',
    },
    {
      description: 'Friday at 5:30 PM CET',
      link: '/contact-us/Wednesday at 5:30 PM',
    },
    {
      description: 'Friday at 7:00 PM CET',
      link: '/contact-us/Friday at 7:00 PM',
    },
  ];
  constructor(
    private deviceDetector: DeviceDetectorService,
    private config: NgbCarouselConfig
  ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    let message = 'Hello, Could you tell me how to join  the class%3F';
    this.classes.forEach((e) => {
      e.link = `/contact-us/Online class - ${e.description}/${message}`;
    });
  }

  ngOnInit(): void {}
}
