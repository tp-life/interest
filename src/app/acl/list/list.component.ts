import {Component, OnInit, ViewChild, ViewRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('sle') sel
  selectItem: string

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  nav() {
    console.log(this.sel)

  }
  test() {
    this.selectItem = "SD"
    console.log("###")
  }
}
