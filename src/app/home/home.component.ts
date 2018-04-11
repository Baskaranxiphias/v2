import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import "lightGallery";
declare var jquery: any;
declare var $: any;
declare var lightGallery: any;

declare var WOW: any;
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(meta: Meta, title: Title) {

        title.setTitle('Best Online School Management Software India - A.T.S.I.');

        meta.addTags([
            { name: 'author', content: 'Mr.Rohit Kumar' },
            {
                name: 'keywords', content: 'online school management system,school management software india,school management software,best school management software,online school management software,best school management software in india,school management software india,school management system software'
            },
            { name: 'description', content: 'ATSI Modules are designed to provide specific functionalities to the Online School Management Software to accomplish the routine tasks of any institution in a categorized way and with great ease.' }

        ]);

    }

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


        $('.owl-carousel.owl-carousel-module').owlCarousel({
            margin: 10,
            loop: true,
            items: 4,
            autoplay: true,
            autoplayTimeout: 2000
        })


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
            pager: true
        });
        var wow = new WOW(
            {
                mobile: false,
                offset: 20,
            });
        wow.init();


        //$('.host-element').frameCarousel({
        //    debug: false,

        //    first: 0,

        //    swipeThreshold: 10,

        //    frame: 'assets/images/frame.png',

        //    frameSize: [{
        //        width: 440,
        //        height:300,
        //        minScreenWidth: 768,
        //        maxScreenWidth: 1024
        //    }],

        //    collapseThreshold: 450,

        //    boundingBox: {
        //        left: '4.3%',
        //        top: '4.48%',
        //        width: '91.4%',
        //        height: '61.1%'
        //    },

        //    images: ['assets/images/1.jpg',
        //        'assets/images/2.jpg',
        //        'assets/images/2.jpg',
        //        'assets/images/2.jpg',
        //        'assets/images/2.jpg',
        //        'assets/images/2.jpg',
        //        'assets/images/2.jpg',
        //        'assets/images/2.jpg',],
        //    autoplay: false,
        //    autoplayInterval: 2000

        //});


    }

}
