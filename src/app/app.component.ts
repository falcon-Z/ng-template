import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-template';

  loading: boolean;

  constructor(private meta: Meta, public router: Router) {
    this.loading = false;
    /*
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      });
      */
  }

  ngOnInit() {
    this.meta.addTags([
      {
        name: 'description',
        // eslint-disable-next-line max-len
        content: 'Hey, This is a template for angular projects with material design and PWA support'
      },
      {
        name: 'keywords',
        // eslint-disable-next-line max-len
        content: 'smpro, Sai madhan, angular, template'
      },
      {
        name: 'Author',
        content: 'Sai Madhan'
      },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

}
