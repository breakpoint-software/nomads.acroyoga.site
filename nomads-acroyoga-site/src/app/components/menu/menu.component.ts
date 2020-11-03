import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isMobile: boolean;
  constructor(private deviceDetector: DeviceDetectorService) {
    this.isMobile = this.deviceDetector.isMobile();
  }

  ngOnInit(): void {}
}
