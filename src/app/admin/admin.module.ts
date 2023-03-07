import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AboutComponent } from "./about/about.component";
import { DashboardService } from "../Services/dashboard.service";
import { ProjectsComponent } from "./projects/projects.component";
import { FormsModule } from "@angular/forms";
import { TeamSizeValidatorDirective } from '../Directives/team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../Directives/client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../Directives/project-idunique-validator.directive';
import { ProjectComponent } from './project/project.component';
import { CheckBoxPrinterComponent } from './check-box-printer/check-box-printer.component';
import { NumberToWordPipe } from '../number-to-word.pipe';
import { FilterPipe } from '../filter.pipe';
import { PagingPipe } from '../paging.pipe';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent,
    CheckBoxPrinterComponent,
    NumberToWordPipe,
    FilterPipe,
    PagingPipe,
    ProjectDetailsComponent

  ],
  imports: [ CommonModule, FormsModule,AdminRoutingModule,RouterModule ],
  exports: [ DashboardComponent, MyProfileComponent, AboutComponent, ProjectsComponent,ClientLocationStatusValidatorDirective,ProjectIDUniqueValidatorDirective ],
  providers: [ DashboardService ]
})
export class AdminModule
{
}
