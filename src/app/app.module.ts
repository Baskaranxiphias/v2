
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {PathLocationStrategy, LocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {AppRoutingModule}from'./app.routes';
import { WhyAtsiComponent } from './why-atsi/why-atsi.component';
import { PackageComponent } from './package/package.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ErpSoftwareComponent } from './erp-software/erp-software.component';
import { PayrollManagementComponent } from './payroll-management/payroll-management.component';
import { LibraryComponent } from './library/library.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CourseComponent } from './course/course.component';
import { EmpPayrollComponent } from './emp-payroll/emp-payroll.component';
import { HrmsComponent } from './hrms/hrms.component';
import { SchoolComponent } from './school/school.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { HostelComponent } from './hostel/hostel.component';
import { OnlineExamComponent } from './online-exam/online-exam.component';
import { DeviceEnableComponent } from './device-enable/device-enable.component';
import { FeeManagementComponent } from './fee-management/fee-management.component';
import { TransportComponent } from './transport/transport.component';
import { AccountComponent } from './account/account.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { BulkSmsComponent } from './bulk-sms/bulk-sms.component';
import { BulkEmailComponent } from './bulk-email/bulk-email.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SportsComponent } from './sports/sports.component';
import { TermsComponent } from './terms/terms.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { BlogComponent } from './blog/blog.component';
import { ThankyouComponent } from './thankyou/thankyou.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        WhyAtsiComponent,
        PackageComponent,
        ClientsComponent,
        ContactComponent,
        TestimonialComponent,
        ErpSoftwareComponent,
        PayrollManagementComponent,
        LibraryComponent,
        AttendanceComponent,
        CourseComponent,
        EmpPayrollComponent,
        HrmsComponent,
        SchoolComponent,
        TimeTableComponent,
        HostelComponent,
        OnlineExamComponent,
        DeviceEnableComponent,
        FeeManagementComponent,
        TransportComponent,
        AccountComponent,
        NoticeboardComponent,
        BulkSmsComponent,
        BulkEmailComponent,
        InventoryComponent,
        SportsComponent,
        TermsComponent,
        ReturnPolicyComponent,
        PrivacyPolicyComponent,
        DisclaimerComponent,
        SitemapComponent,
        BlogComponent,
        ThankyouComponent,
      
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
    ],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
