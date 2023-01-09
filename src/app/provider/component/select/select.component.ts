import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstants } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backClicked(){
    this.router.navigate([RoutingConstants.PROVIDER])
  }
}
