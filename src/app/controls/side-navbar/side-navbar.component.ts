import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor(private sideNabarService: SideNavbarService) { }

  ngOnInit() {
    this.sideNabarService.sideNavbarToggele.subscribe((val)=> {
      
    });
  }

}
