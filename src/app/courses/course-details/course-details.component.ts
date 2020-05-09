import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  course;
  private _courseSubscription: Subscription;
  private _routeSubscription: Subscription;
  constructor(private _coursesService: CoursesService,
  private _actvaedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    // this._courseSubscription = this._coursesService.courseSubjectObservable.subscribe((data) => {
    //   // console.log(data);
    //   if (data && typeof data === 'object') {
    //     this.course = data;
    //   }

    // })
    this._routeSubscription = this._actvaedRoutes.paramMap.subscribe((paramMap) => {
      // console.log(paramMap);
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        // this.course = this._coursesService.getCourseById(id);
        this._coursesService.getCourseById(id).subscribe((res: any) => {
          if(res.status){
            this.course = res.data;
          }
        })
      }
      
    })
  }

  ngOnDestroy(): void {
    // this._courseSubscription.unsubscribe();
    this._routeSubscription.unsubscribe();
  }

}
