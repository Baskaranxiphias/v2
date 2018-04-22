import { Component } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var require: any;
declare var email: any;
declare var err: any;

declare var $: any;
declare var jQuery: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    onActivate(event) {
        window.scroll(0, 0);

    }


    constructor(private http: Http, private sanitizer: DomSanitizer) {
        this.cargar_productos();
    }

    gcsesearch: SafeHtml;

    ngOnInit() {

        $('#emailUs').click(function () {
            var name = $("#Name").val();
                    var emil = $("#Emails").val();
                    var cmmt = $("#Problem").val();
        
            var email   = require("emailjs/email");
            var server 	= email.server.connect({
               user:    "baskaran.tripleh@gmail.com", 
               password:"BasKrish!(()1991", 
               host: 'smtp.mailgun.com',
               ssl:false,
               port:587
                 
            });
             
            // send the message and get a callback with an error or details of the message that was sent
            server.send({
               text:    "hi", 
               from:    "baskaran.tripleh@gmail.com",  
               to:      "baskaran@xiphiastec.com",
               cc:      "baskaran@xiphiastec.com",
               subject: "testing emailjs"
            }, function(err) { 
                if(err){
                    console.log(err);
                }else{
                    console.log("success");
                }
             });
        
        
            });
        
        
        
        
        
        
        
        this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml("<gcse:search></gcse:search>");

        var cx = '009773623900514842048:yjhaoizivqm';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);

        //jQuery(function () {
        //    $('#newLetter').click(function () {
        //        var emil = $("#Email").val();
        //        jQuery.ajax({
        //            type: "POST",
        //            url: 'https://atsi.in/handlers/newletterfrm.ashx',
        //            data: { 'email': emil },
        //            success: function (data) {
        //                alert("hi");

        //            }
        //        });
        //    });

        //    $('#emailUs').click(function () {
        //        var name = $("#Name").val();
        //        var emil = $("#Emails").val();
        //        var cmmt = $("#Problem").val();

        //        jQuery.ajax({
        //            type: "POST",
        //            url: 'https://atsi.in/handlers/Contact_us.ashx',

        //            data: { 'name': name, 'email': emil, 'comment': cmmt },
        //            success: function (data) {
        //                alert("Success");

        //            }
        //        });
        //    });

        //});

        // jQuery(function () {
        //     $('#emailUs').click(function () {
        //         var name = $("#Name").val();
        //         var emil = $("#Emails").val();
        //         var phon = $("#Mobile").val();
        //         var kios = "Health Care Kiosk";
        //         var cmmt = $("#comment").val();

        //         if (name == "" || phon == "" || emil == "") {
        //             alert("Please Enter all fields");
        //             //$('.modal.fade').removeAttr('id');
        //         }

        //         else {
        //             //$("#buynow-kiosk").modal("toggle");
        //             jQuery.ajax({
        //                 type: "GET",
        //                 url: "https://xiphiastec.com/atsiwebsite.ashx",
        //                 data: { 'name': name, 'phoneNo': phon, 'email': emil, 'comment1': cmmt},
        //                 success: function (data) {

        //                     $("#buynow-kiosk").modal("toggle");
        //                     $("#otpOption").modal("show");

        //                 }
        //             });
        //         }


        //     });


        //     $('#confirmOtp').click(function () {
        //         var otp = $("#otpValue").val();
        //         if (otp == "") {
        //             alert("Please Enter the fields");
        //         }
        //         else {
        //             jQuery.ajax({
        //                 type: "GET",
        //                 url: "https://xiphiastec.com/atsiwebsite.ashx",

        //                 data: { 'otp': otp },
        //                 success: function (data) {

        //                     if (data == "") {

        //                         alert("Please Enter Correct OTP");

        //                         $("#otp2").val(" ");

        //                     }
        //                     else if (data != null) {
        //                         debugger;
        //                         //window.location="http://localhost:63033/thankyou.html";
        //                         window.location.href = "thankyou.html";


        //                     }

                         


        //                 }
        //             });
        //         }
        //     });

        //     $('#resendOtp').click(function () {

        //         jQuery.ajax({
        //             type: "GET",
        //             url: "https://xiphiastec.com/atsiwebsite.ashx",

        //             data: {},
        //             success: function (data) {

        //             }
        //         });
        //     });


        // });



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


    public cargar_productos() {
        this.http.get('https://www.googleapis.com/blogger/v3/blogs/5825039968526520115/posts?key=AIzaSyBTbt5ziPA6tBUeJrYowk-Wv19R5blq0j8')
            .subscribe(res => {
                console.log(res.json());
                this.httpdata = res.json(); // Before this.productos = res.json(); 
            });
    }




}
