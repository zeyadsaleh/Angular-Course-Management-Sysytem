import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course = new Course;
  constructor(
    private _coursesSerive: CoursesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(form.value);
      const course = { ...this.course };
      // this._coursesSerive.addCourse(form.value);
      // form.reset();
      this._coursesSerive.addCourse(course).subscribe((res: any) => {
        if (res.status) {
          this._router.navigate(['/courses', res.data.id]);
        }
      });
      form.reset();

    }

  }

}
