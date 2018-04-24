import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
    constructor(meta: Meta, title: Title) {

        title.setTitle('Contact ');
    
        meta.addTags([
          { name: 'author',   content: 'Mr.Rohit Kumar '},
          { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
          { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    
      }

    ngOnInit() {

      


        jQuery(function () {
            $('#emailUs').click(function () {
                $(".atsi-loader").show();
                var name = $("#Name").val();
                var emil = $("#Emails").val();
                var phon = $("#Mobile").val();

                var cmmt = $("#comment").val();

                if (name == "" || phon == "" || emil == "") {
                    $(".atsi-loader").hide();
                    alert("Please Enter all fields");
                }

                else {

                    jQuery.ajax({
                        type: "GET",
                        url: "https://www.atsi.in/atsi/handlers/BuyNowHandler.ashx",
                        data: { 'name': name, 'phoneNo': phon, 'email': emil, 'comment1': cmmt },
                    }).fail(function () {
                        $(".atsi-loader").hide();
                        $("#otpOption").modal("show", { backdrop: 'static', keyboard: false });
                    });

                }


            });


            $('#confirmOtp').click(function () {
                $(".atsi-loader").show();
                var otp = $("#otpValue").val();
                if (otp == "") {
                    $(".atsi-loader").hide();
                    alert("Please Enter the fields");
                }
                else {
                    jQuery.ajax({
                        type: "GET",
                        url: "https://www.atsi.in/atsi/handlers/BuyNowHandler.ashx",

                        data: { 'otp': otp },
                        //success: function (data) {

                        //    if (data == "") {

                        //        alert("Please Enter Correct OTP");

                        //        $("#otp2").val(" ");

                        //    }
                        //    else if (data != null) {
                        //        debugger;
                        //        //window.location="http://localhost:63033/thankyou.html";
                        //        window.location.href = "thankyou.html";

                        //    }




                        //}


                    }).fail(function (data) {

                        if (data == "") {
                            $(".atsi-loader").hide();
                            alert("Please Enter Correct OTP");

                            $("#otp2").val(" ");

                        }
                        else if (data != null) {
                            $(".atsi-loader").hide();
                            $("#otpOption").modal("hide");
                            window.location.href = "#/thankyou";

                        }

                        //$(".atsi-loader").hide();
                        //$("#otpOption").modal("show");
                    });
                }
            })

            $('#resendOtp').click(function () {

                jQuery.ajax({
                    type: "GET",
                    url: "https://www.atsi.in/atsi/handlers/BuyNowHandler.ashx",

                    data: {},
                    success: function (data) {

                    }
                });
            });


        });


    (function() {

      var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;
  
      // Main
      initHeader();
      addListeners();
  
      function initHeader() {
          width = window.innerWidth;
          height = window.innerHeight;
          target = {x: 0, y: height};
  
          largeHeader = document.getElementById('large-header');
          largeHeader.style.height = height+'px';
  
          canvas = document.getElementById('bubble-canvas');
          canvas.width = width;
          canvas.height = height;
          ctx = canvas.getContext('2d');
  
          // create particles
          circles = [];
          for(var x = 0; x < width*0.5; x++) {
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
          if(document.body.scrollTop > height) animateHeader = false;
          else animateHeader = true;
      }
  
      function resize() {
          width = window.innerWidth;
          height = window.innerHeight;
          largeHeader.style.height = height+'px';
          canvas.width = width;
          canvas.height = height;
      }
  
      function animate() {
          if(animateHeader) {
              ctx.clearRect(0,0,width,height);
              for(var i in circles) {
                  circles[i].draw();
              }
          }
          requestAnimationFrame(animate);
      }
  
      // Canvas manipulation
      function Circle() {
          var _this = this;
  
          // constructor
          (function() {
              _this.pos = {};
              init();
              console.log(_this);
          })();
  
          function init() {
              _this.pos.x = Math.random()*width;
              _this.pos.y = height+Math.random()*100;
              _this.alpha = 0.1+Math.random()*0.3;
              _this.scale = 0.1+Math.random()*0.3;
              _this.velocity = Math.random();
          }
  
          this.draw = function() {
              if(_this.alpha <= 0) {
                  init();
              }
              _this.pos.y -= _this.velocity;
              _this.alpha -= 0.0005;
              ctx.beginPath();
              ctx.arc(_this.pos.x, _this.pos.y, _this.scale*50, 0, 5 * Math.PI, false);
              ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
              ctx.fill();
          };
      }
     
  })();
  }

}
