import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  // @Input() title: string;
  // @Input() instructor: string;
  // @Input() isAvailabel: boolean;
  @Input() course;
  @Output() courseClick = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.courseClick.emit(this.course.title);
  }

}
