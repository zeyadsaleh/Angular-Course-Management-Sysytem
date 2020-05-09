import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesService } from './services/courses.service';
import { FormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CoursesComponent, CoursesListComponent, CoursesItemComponent, CourseDetailsComponent, CourseFormComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [CoursesComponent],
  providers: [CoursesService]
})
export class CoursesModule { }
