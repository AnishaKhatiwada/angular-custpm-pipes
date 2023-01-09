import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {

  constructor( 
    private router: Router
    ) { }

  ngOnInit() {
  }

  backClicked(){
    this.router.navigate([RoutingConstants.HOME])
  } 

}
