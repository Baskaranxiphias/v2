import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {WhyAtsiComponent}from'./why-atsi/why-atsi.component';
import {PackageComponent}from'./package/package.component';
import {ClientsComponent}from'./clients/clients.component';
import {ContactComponent}from'./contact/contact.component';
import {TestimonialComponent}from'./testimonial/testimonial.component';
import {ErpSoftwareComponent}from'./erp-software/erp-software.component';
import {PayrollManagementComponent}from'./payroll-management/payroll-management.component';
import {LibraryComponent}from'./library/library.component';
import {AttendanceComponent}from'./attendance/attendance.component';
import {CourseComponent}from'./course/course.component';
import {EmpPayrollComponent}from'./emp-payroll/emp-payroll.component';
import {HrmsComponent}from'./hrms/hrms.component';
import {SchoolComponent}from'./school/school.component';
import {TimeTableComponent}from'./time-table/time-table.component';
import {HostelComponent}from'./hostel/hostel.component';
import {OnlineExamComponent}from'./online-exam/online-exam.component';
import {DeviceEnableComponent}from'./device-enable/device-enable.component';
import {FeeManagementComponent}from'./fee-management/fee-management.component';
import {TransportComponent}from'./transport/transport.component';
import {AccountComponent}from'./account/account.component';
import {NoticeboardComponent}from'./noticeboard/noticeboard.component';
import {BulkSmsComponent}from'./bulk-sms/bulk-sms.component';
import {BulkEmailComponent}from'./bulk-email/bulk-email.component';
import {InventoryComponent}from'./inventory/inventory.component';
import {SportsComponent}from'./sports/sports.component';
import {TermsComponent}from'./terms/terms.component';
import {ReturnPolicyComponent}from'./return-policy/return-policy.component';
import {PrivacyPolicyComponent}from'./privacy-policy/privacy-policy.component';
import {DisclaimerComponent}from'./disclaimer/disclaimer.component';
import {SitemapComponent}from'./sitemap/sitemap.component';
import {BlogComponent}from'./blog/blog.component';
import {ThankyouComponent}from'./thankyou/thankyou.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'about', component: AboutComponent, },
    { path: 'whyAtsi', component: WhyAtsiComponent, },
    { path: 'package', component: PackageComponent, },
    { path: 'clients', component: ClientsComponent, },
    { path: 'testimonials', component: TestimonialComponent, },
    { path: 'contact', component: ContactComponent, }, 
    { path: 'School-Management-ERP-Software-india', component: ErpSoftwareComponent, },
    { path: 'online-payroll-Management-System-software', component: PayrollManagementComponent, },
    { path: 'online-library-management-software-india', component: LibraryComponent, },
    { path: 'Online-Student-Attendance-Management-System', component: AttendanceComponent, },
    { path: 'web-based-Syllabus-Management-System', component: CourseComponent, },
    { path: 'employee-management-system-software', component: EmpPayrollComponent, },
    { path: 'human-resource-management-software-india', component: HrmsComponent, },
    { path: 'school-information-management-system-india', component: SchoolComponent, },
    { path: 'school-timetable-tenerator-system-software', component: TimeTableComponent, },
    { path: 'hostel-management-system-software-india', component: HostelComponent, },
    { path: 'online-examination-management-system-software', component: OnlineExamComponent, },
    { path: 'deviceEnable', component: DeviceEnableComponent, },
    { path: 'school-fee-management-system-software', component: FeeManagementComponent, },
    { path: 'gps-vehicle-tracking-system', component: TransportComponent, },
    { path: 'accountManagement', component: AccountComponent, },
    { path: 'school-digital-notice-board-software', component: NoticeboardComponent, },
    { path: 'online-bulk-sms-sender-software', component: BulkSmsComponent, },
    { path: 'bulk-mass-email-sending-software', component: BulkEmailComponent, },
    { path: 'stock-inventory-management-software', component: InventoryComponent, },
    { path: 'sportsMangement', component: SportsComponent, },
    { path: 'terms', component: TermsComponent, },
    { path: 'returnPolicy', component: ReturnPolicyComponent, },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent, },
    { path: 'disclaimer', component: DisclaimerComponent, },
    { path: 'sitemap', component: SitemapComponent, },
    { path: 'blog', component: BlogComponent, },
    { path: 'thankyou', component: ThankyouComponent, }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }