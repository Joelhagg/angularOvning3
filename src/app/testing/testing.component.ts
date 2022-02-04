import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  isMarried: boolean = true

  changeMarriedStatus() {
    this.isMarried = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
