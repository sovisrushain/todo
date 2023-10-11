import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  name = ""
  route : ActivatedRoute

  constructor(route: ActivatedRoute){
    this.route = route;
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }
}
