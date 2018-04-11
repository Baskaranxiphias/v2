import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
declare var AOS: any;
declare var $: any;
declare var jquery: any;
@Component({
    selector: 'app-why-atsi',
    templateUrl: './why-atsi.component.html',
    styleUrls: ['./why-atsi.component.css']
})
export class WhyAtsiComponent implements OnInit {

    constructor(meta: Meta, title: Title) {

        title.setTitle('Why A.T.S.I.');

        meta.addTags([
            { name: 'author', content: 'Mr.Rohit Kumar' },
            { name: 'keywords', content: 'Why A.T.S.I.' },
            { name: 'description', content: 'We are a Software Development Company marked our presence in 2005 and dedicated to provide second to none automation system in educational institutions. ATSI helps institutions to systematize their overall activities with increased efficiency' }
        ]);

    }

    ngOnInit() {

        $(".cloud-storage").click(function () {

            $(".cloud").toggle('slow');

        })

        $(".highly-secured ").click(function () {

            $(".highly").toggle('slow');

        })

        $(".cost-saving").click(function () {

            $(".cost").toggle('slow');

        })

        $(".platform-compatibility").click(function () {

            $(".platform").toggle('slow');

        })

        $(".easily-customizable").click(function () {

            $(".easily").toggle('slow');

        })
        $(".user-friendly").click(function () {

            $(".user-friend").toggle('slow');

        })



        $("#moreBenefits").click(function () {
            $("#moreBenefitsdetails").slideToggle("slow");
        });

        $("#morekeyfeature").click(function () {
            $("#morekeyfeatureDetails").slideToggle("slow");
        });

        !function (d, s, id) {
            var js: any,
                fjs = d.getElementsByTagName(s)[0],
                p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }
            (document, "script", "twitter-wjs");


        (function () {

            var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

            // Main
            initHeader();
            addListeners();

            function initHeader() {
                width = window.innerWidth;
                height = window.innerHeight;
                target = { x: 0, y: height };

                largeHeader = document.getElementById('large-header');
                largeHeader.style.height = height + 'px';

                canvas = document.getElementById('bubble-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create particles
                circles = [];
                for (var x = 0; x < width * 0.5; x++) {
                    var c = new Circle();
                    circles.push(c);
                }
                animate();
            }

            // Event handling
            function addListeners() {
                window.addEventListener('scroll', scrollCheck);
                window.addEventListener('resize', resize);
            }

            function scrollCheck() {
                if (document.body.scrollTop > height) animateHeader = false;
                else animateHeader = true;
            }

            function resize() {
                width = window.innerWidth;
                height = window.innerHeight;
                largeHeader.style.height = height + 'px';
                canvas.width = width;
                canvas.height = height;
            }

            function animate() {
                if (animateHeader) {
                    ctx.clearRect(0, 0, width, height);
                    for (var i in circles) {
                        circles[i].draw();
                    }
                }
                requestAnimationFrame(animate);
            }

            // Canvas manipulation
            function Circle() {
                var _this = this;

                // constructor
                (function () {
                    _this.pos = {};
                    init();
                    console.log(_this);
                })();

                function init() {
                    _this.pos.x = Math.random() * width;
                    _this.pos.y = height + Math.random() * 100;
                    _this.alpha = 0.1 + Math.random() * 0.3;
                    _this.scale = 0.1 + Math.random() * 0.3;
                    _this.velocity = Math.random();
                }

                this.draw = function () {
                    if (_this.alpha <= 0) {
                        init();
                    }
                    _this.pos.y -= _this.velocity;
                    _this.alpha -= 0.0005;
                    ctx.beginPath();
                    ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 50, 0, 5 * Math.PI, false);
                    ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
                    ctx.fill();
                };
            }
            AOS.init({ offset: 200, duration: 1500, disable: "mobile" })
        })();

        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 1
                },

            }
        })

    }

}
