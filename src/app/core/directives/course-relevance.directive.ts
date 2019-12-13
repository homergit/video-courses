import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCourseRelevance]'
})
export class CourseRelevanceDirective implements OnInit {
  @Input('appCourseRelevance') date: Date;
  creationDate: Date;
  currentDate = new Date();
  twoWeeksBeforeCurrentDate =  new Date(Date.now() - 12096e5);

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.creationDate = new Date(this.date);
    this.setBorderColor();
  }

  setBorderColor() {
    if (this.creationDate < this.currentDate && this.creationDate > this.twoWeeksBeforeCurrentDate) {
      this.el.nativeElement.style.borderColor = '#a1f6a1';
    } else if (this.creationDate > this.currentDate) {
      this.el.nativeElement.style.borderColor = '#b3b3f2';
    }
  }
}
