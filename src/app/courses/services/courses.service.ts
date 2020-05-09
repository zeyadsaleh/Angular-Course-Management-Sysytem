import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CoursesService {


  // private _courses = [
  //   {
  //     id: 1,
  //     title: 'NodeJs',
  //     instructor: 'Ali',
  //     isAvailabel: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'JavaScript',
  //     instructor: 'Mahmoud',
  //     isAvailabel: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'HTML',
  //     instructor: 'Ali',
  //     isAvailabel: true,
  //   },
  //   {
  //     id: 4,
  //     title: 'Angular',
  //     instructor: 'Eman',
  //     isAvailabel: false,
  //   },
  // ];

  private _apiURL = 'http://afternoon-falls-30227.herokuapp.com/api/v1/courses';
  private _courseSubject = new BehaviorSubject(null);

  constructor(private _http: HttpClient) { }

  changeCourseData(data) {
    // console.log(data);
    this._courseSubject.next(data);
  }

  get courseSubjectObservable() {
    return this._courseSubject.asObservable();
  }

  getCourses(params = {}) {
    // return this._courses;
    return this._http.get(this._apiURL, { params });
  }
  getCourseById(id) {
    // return this._courses.find((course => course.id = id));
    return this._http.get(`${this._apiURL}/${id}`);
  }

  addCourse(course) {
    // this._courses.push(course);
    return this._http.post(this._apiURL, course);
  }
}
