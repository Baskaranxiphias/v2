import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
    ngOnInit() {

        jQuery(function () {
            $('#newLetter').click(function () {
                var emil = $("#Email").val();
                jQuery.ajax({
                    type: "POST",
                    url: 'http://atsi.in/handlers/newletterfrm.ashx',
                    data: { 'email': emil },
                    success: function (data) {
                        alert("hi");
                        //$("#support").modal("toggle");
                        //$("#otpOption").modal("show");
                    }
                });
            });

            $('#emailUs').click(function () {
                var name = $("#Name").val();
                var emil = $("#Emails").val();
                var cmmt = $("#Problem").val();

                jQuery.ajax({
                    type: "POST",
                    url: 'http://atsi.in/handlers/Contact_us.ashx',

                    data: { 'name': name,  'email': emil, 'comment': cmmt },
                    success: function (data) {
                        alert("Success");
                        //$("#support").modal("toggle");
                        //$("#otpOption").modal("show");
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
