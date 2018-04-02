import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
declare var AOS: any;
import * as $ from 'jquery';
@Component({
    selector: 'app-why-atsi',
    templateUrl: './why-atsi.component.html',
    styleUrls: ['./why-atsi.component.css']
})
export class WhyAtsiComponent implements OnInit {

    constructor(meta: Meta, title: Title) {

        title.setTitle('Why ATSI');

        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
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

    }

}
