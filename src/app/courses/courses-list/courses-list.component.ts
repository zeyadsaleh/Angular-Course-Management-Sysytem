import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

 

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit  {

  courses;
  clickedCourseTitle;
  pages: any[];
  currentPage: number = 1;
  constructor(private _coursesService: CoursesService, private _activedRouter: ActivatedRoute) { }
  


  ngOnInit(): void {
    
    this._activedRouter.queryParamMap.subscribe(queryParamMap => {
      const params = {};
      queryParamMap.keys.forEach(
        (key) => (params[key] = queryParamMap.get(key) ) 
      );
      // const limit = queryParamMap.get('Limit') || 8;
      this._coursesService.getCourses(params).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          this.courses = res.data;
          this.currentPage = res.page;
          this.pages = new Array(res.total_pages || 0);
        }
        
      });
    })
  }

  onCourseClick(data) {
    this.clickedCourseTitle = data;
  }

  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  }

}
