import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { fadeAnimation } from './shared/animations/fadeIntRoute';
import { ThemeService } from './shared/services/theme.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private userService: UserService, private themeService: ThemeService) {}

  ngOnInit() {
    $(document).ready(() => {
      $('.banner').owlCarousel({
        autoHeight: true,
        center: true,
        nav: true,
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    });
    this.themeService.defaultTheme();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }

  setGeoLocation(position: any) {
    this.userService.setLocation(
      position['coords'].latitude,
      position['coords'].longitude
    );
  }
}
