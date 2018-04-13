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

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'about', component: AboutComponent, },
    { path: 'whyAtsi', component: WhyAtsiComponent, },
    { path: 'package', component: PackageComponent, },
    { path: 'clients', component: ClientsComponent, },
    { path: 'testimonials', component: TestimonialComponent, },
    { path: 'contact', component: ContactComponent, },
    { path: 'erpSoftware', component: ErpSoftwareComponent, },
    { path: 'payrollManagement', component: PayrollManagementComponent, },
    { path: 'libraryManagement', component: LibraryComponent, },
    { path: 'attendanceManagement', component: AttendanceComponent, },
    { path: 'syllabusManagement', component: CourseComponent, },
    { path: 'empPyroll', component: EmpPayrollComponent, },
    { path: 'hrms', component: HrmsComponent, },
    { path: 'schoolManagement', component: SchoolComponent, },
    { path: 'timetable', component: TimeTableComponent, },
    { path: 'hostelMangement', component: HostelComponent, },
    { path: 'onlineExamination', component: OnlineExamComponent, },
    { path: 'deviceEnable', component: DeviceEnableComponent, },
    { path: 'feeManagement', component: FeeManagementComponent, },
    { path: 'transport', component: TransportComponent, },
    { path: 'accountManagement', component: AccountComponent, },
    { path: 'noticeBoard', component: NoticeboardComponent, },
    { path: 'bulksms', component: BulkSmsComponent, },
    { path: 'bulkEmail', component: BulkEmailComponent, },
    { path: 'inventoryMangement', component: InventoryComponent, },
    { path: 'sportsMangement', component: SportsComponent, },
    { path: 'terms', component: TermsComponent, },
    { path: 'returnPolicy', component: ReturnPolicyComponent, },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent, },
    { path: 'disclaimer', component: DisclaimerComponent, },
    { path: 'sitemap', component: SitemapComponent, }
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