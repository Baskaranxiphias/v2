import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.component.html',
  styleUrls: ['./return-policy.component.css']
})
export class ReturnPolicyComponent implements OnInit {

    constructor(meta: Meta, title: Title) {

        title.setTitle('Return Policy');

        meta.addTags([
            { name: 'author', content: 'Mr.Rohit Kumar' },
            {
                name: 'keywords', content: 'leave management software,employee management software,payroll management software'
            },
            { name: 'description', content: 'Payroll management software refers to the employees� salary and bonus, tax deduction, and other benefits in an organization. This is also a Leave Management Software that keeps a record of leaves applied and approved for the employees. This is a complete employee management software that maintains all the records pertaining to payroll' }
        ]);

    }

  ngOnInit() {
  }

}
