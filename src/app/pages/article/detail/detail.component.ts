import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.paramMap.pipe(
      map( (params : ParamMap) =>  params.get('id')  )
    )
    const d = id.subscribe(((id: string) => { console.log(id, "#####") }))
  }

}
