import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
@Output() introductionButtonClicked = new EventEmitter()

  next(){
  this.introductionButtonClicked.emit()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
