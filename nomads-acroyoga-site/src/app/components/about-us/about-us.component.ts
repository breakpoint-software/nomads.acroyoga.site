import { PlatformLocation } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  videoUrl: any;
  isMobile: boolean;
  stefaniaImage: string;
  constructor(
    private platformLocation: PlatformLocation,

    sanitizer: DomSanitizer,
    private deviceDetector: DeviceDetectorService
  ) {
    this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/TpCxmvPI4G4'
    );
    this.isMobile = this.deviceDetector.isMobile();
    // this.stefaniaImage =
    // this.platformLocation.pathname + '/assets/img/logo-transparente.png';
  }

  ngOnInit(): void {}

  getVideoHeight() {
    return this.isMobile ? '200px' : '680px';
  }
}
