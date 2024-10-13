import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  brand: string = "Ibanez";
  model: string = "Gio";
  constructor(private router: Router) {}

  gotoMyGuitars() {
    this.router.navigateByUrl("/my-guitars");
  }
}
