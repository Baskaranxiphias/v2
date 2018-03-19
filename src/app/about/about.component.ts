import { Component, OnInit } from '@angular/core';
declare var skrollr: any;
import * as $ from 'jquery';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        var mySkrollr = skrollr.init({
            forceHeight: false,
            easings: {
                easeOutBack: function (p, s) {
                    s = 1.70158;
                    p = p - 1;
                    return (p * p * ((s + 1) * p + s) + 1);
                }
            },
            mobileCheck: function () {
                //hack - forces mobile version to be off
                return false;
            }
        });


        $("#moreBenefits").click(function () {
            $("#moreBenefitsdetails").slideToggle("slow");
        });

        $("#morekeyfeature").click(function () {
            $("#morekeyfeatureDetails").slideToggle("slow");
        });
    }

}
