import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {


      //$(document).ready(function () {
      //    var getcount = 0;
      //    var dmJSON = "https://www.googleapis.com/blogger/v3/blogs/5825039968526520115/posts?key=AIzaSyBTbt5ziPA6tBUeJrYowk-Wv19R5blq0j8";

      //    $.getJSON(dmJSON, function (data) {

      //        $.each(data.items, function (index, f) {

      //            if (f.replies.totalItems > 0) {
      //                var dmJSONs = "https://www.googleapis.com/blogger/v3/blogs/5825039968526520115/posts/" + f.id + "/comments?key=AIzaSyBTbt5ziPA6tBUeJrYowk-Wv19R5blq0j8";

      //                $.getJSON(dmJSONs, function (datas) {
      //                    var content = '<div class="blog">' + '<div id="title">' + '<h2><a href="' + f.url + ' ">' + f.title + '</a></h2>' + '</div>' + '<span class="para">' + 'Posted By Webmaster XIPHIAS On ' + f.updated + '</span>' + '<div class="comment">' + '<span>' + datas.items.length + "" + '<a href=' + f.url + '#comments style="padding-left: 10px; color: #3058ac;">Comments</a>' + '</span>' + '<a href="https://xiphiaskiosk.blogspot.in/' + f.id + ' ">' + '</a>' + '</div>' + '</div>';
      //                    $('.blog-content').append(content);
      //                });
      //            }
      //            else {
      //                var content = '<div class="blog">' + '<div id="title">' + '<h2><a href="' + f.url + ' ">' + f.title + '</a></h2>' + '</div>' + '<span class="para">' + 'Posted By Webmaster XIPHIAS On ' + f.updated + '</span>' + '<div class="comment">' + '<span>' + "0" + "" + '<a href=' + f.url + '#comments style="padding-left: 10px; color: #3058ac;">Comments</a>' + '</span>' + '<a href="https://xiphiaskiosk.blogspot.in/' + f.id + ' ">' + '</a>' + '</div>' + '</div>';
      //                $('.blog-content').append(content);
      //            }
      //        });
      //    });
      //});

  }

}
