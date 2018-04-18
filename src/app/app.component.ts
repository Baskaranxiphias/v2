import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onActivate(event) {
    window.scroll(0,0);
    
}
  ngOnInit() {




    var stickyOffset = $('.sticky').offset().top;

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

  }


  httpdata;
  cargando: boolean = true;

  constructor(private http: Http) {
      this.cargar_productos();
  }

  public cargar_productos() {
      this.http.get('https://www.googleapis.com/blogger/v3/blogs/5825039968526520115/posts?key=AIzaSyBTbt5ziPA6tBUeJrYowk-Wv19R5blq0j8')
          .subscribe(res => {
              console.log(res.json());
              this.httpdata = res.json(); // Before this.productos = res.json(); 
          });
  }


}
