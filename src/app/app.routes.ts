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
    { path: 'courseManagement', component: CourseComponent, }
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