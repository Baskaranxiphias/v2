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

        //$('#emailUs').click(function () {
        //    var name = $("#Name").val();
        //            var emil = $("#Emails").val();
        //            var cmmt = $("#Problem").val();

        //    var email   = require("emailjs/email");
        //    var server 	= email.server.connect({
        //       user:    "baskaran.tripleh@gmail.com", 
        //       password:"BasKrish!(()1991", 
        //       host: 'smtp.gmail.com',
        //       ssl:true,
        //       port:587

        //    });

        //    // send the message and get a callback with an error or details of the message that was sent
        //    server.send({
        //       text:    "hi", 
        //       from:    "baskaran.tripleh@gmail.com",  
        //       to:      "baskaran@xiphiastec.com",
        //       cc:      "baskaran@xiphiastec.com",
        //       subject: "testing emailjs"
        //    }, function(err) { 
        //        if(err){
        //            console.log(err);
        //        }else{
        //            console.log("success");
        //        }
        //     });


        //    });



        $(document).ready(function () {
            var urlhttp = location.protocol;
            var repurl = location.host;
            if (urlhttp == "http:") {
                window.location.href = "https://" + repurl;
            }

            if (repurl == "atsi.in") {
                window.location.href = "https://www." + repurl;
            }

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
        //        var newsEmail = $("#newsEmail").val();
        //        jQuery.ajax({  
        //            type: "POST",
        //            url: 'https://www.atsi.in/atsi/handlers/newletterfrm.ashx',
        //            data: { 'email': newsEmail },
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

        $('#newLetter').click(function () {
            $(".atsi-loader").show();

            var newsEmail = $("#newsEmail").val();

            if (newsEmail == "") {
                alert("Please fill the data");
                $(".atsi-loader").hide();
            } else {

                jQuery.ajax({
                    type: "POST",
                    url: 'https://www.atsi.in/handlers/newletterfrm.ashx',
                    data: { 'email': newsEmail },
                    success: function (data) {
                        $(".atsi-loader").hide();
                        window.location.href = "#/thankyou";
                        $("#newsEmail").val("");
                    }
                }).fail(function () {
                    $(".atsi-loader").hide();
                    window.location.href = "#/thankyou";
                    $("#newsEmail").val("");

                })

            }



        });



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
                        url: "https://www.atsi.in/handlers/BuyNowHandler.ashx",
                        data: { 'name': name, 'phoneNo': phon, 'email': emil, 'comment1': cmmt },
                        success: function (data) {
                            $(".atsi-loader").hide();
                            $("#otpOption").modal("show", { backdrop: 'static', keyboard: false });
                        }
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
                        url: "https://www.atsi.in/handlers/BuyNowHandler.ashx",

                        data: { 'otp': otp },
                        success: function (data) {

                            if (data == "") {
                                $(".atsi-loader").hide();
                                alert("Please Enter Correct OTP");

                                $("#otp2").val(" ");

                            }
                            else if (data != null) {
                                $(".atsi-loader").hide();
                                $("#otpOption").modal("hide");
                                window.location.href = "#/thankyou";
                                $("#Name").val("");
                                $("#Emails").val("");
                                $("#Mobile").val("");
                                $("#comment").val("");
                            }

                        }


                    })
                    //.fail(function (data) {

                    //    if (data == "") {
                    //        $(".atsi-loader").hide();    
                    //        alert("Please Enter Correct OTP");

                    //        $("#otp2").val(" ");

                    //    }
                    //    else if (data != null) {
                    //        $(".atsi-loader").hide();
                    //        $("#otpOption").modal("hide");
                    //        window.location.href = "#/thankyou";

                    //    }

                    //    //$(".atsi-loader").hide();
                    //    //$("#otpOption").modal("show");
                    //});
                }
            })

            $('#resendOtp').click(function () {

                jQuery.ajax({
                    type: "GET",
                    url: "https://www.atsi.in//handlers/BuyNowHandler.ashx",

                    data: {},
                    success: function (data) {

                    }
                });
            });


        });



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
