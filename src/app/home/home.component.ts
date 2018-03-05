import { Component, OnInit } from '@angular/core';
import "lightGallery";
declare var jquery: any;
declare var $: any;
declare var lightGallery: any;
declare var WOW:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var $loop = $('.loop');
    if ($loop.length > 0) {
        $loop.owlCarousel({
            items: 3,
            center: true,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            margin: 25,
            responsive: {
                300: {
                    items: 3,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 60
                },

            }
        });
    }

    $('.owl-carousel-slider').owlCarousel({
      items: 2,
      loop: true,
      margin: 0,
      nav: false,
      autoplay: 2000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          }

      }
  });

  var leftArrow = '<i class="fa fa-angle-left"></i>';
  var rightArrow = '<i class="fa fa-angle-right"></i>';
$('.testimonial-slider').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: true,
  dots: false,
  navText: [leftArrow, rightArrow],
  
})
    



    $("#lightgallery").lightGallery({
      pager:true
  });
  var wow = new WOW(
    {
      mobile: false,
      offset: 20,
    });
    wow.init();

  }

}
