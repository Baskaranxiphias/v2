import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-emp-payroll',
  templateUrl: './emp-payroll.component.html',
  styleUrls: ['./emp-payroll.component.css']
})
export class EmpPayrollComponent implements OnInit {

  
    constructor(meta: Meta, title: Title) {

        title.setTitle('Employee Payroll and Leave Management System Software-A.T.S.I');
    
        meta.addTags([
          { name: 'author',   content: 'Mr.Rohit Kumar'},
          {
              name: 'keywords', content: 'leave management software,employee management software,payroll management software'},
          { name: 'description', content: 'Payroll management software refers to the employees’ salary and bonus, tax deduction, and other benefits in an organization. This is also a Leave Management Software that keeps a record of leaves applied and approved for the employees. This is a complete employee management software that maintains all the records pertaining to payroll' }
        ]);
    
      }

  ngOnInit() {

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
      })();

  }

}
