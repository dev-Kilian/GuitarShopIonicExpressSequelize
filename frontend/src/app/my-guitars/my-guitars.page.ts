import { Component, OnInit } from '@angular/core';
import { GuitarService } from '../services/guitar.service'

@Component({
  selector: 'app-my-guitars',
  templateUrl: './my-guitars.page.html',
  styleUrls: ['./my-guitars.page.scss'],
})
export class MyGuitarsPage implements OnInit {

  guitars: any [];

  constructor(private guitarService: GuitarService) { }

  ngOnInit() {
    this.getAllGuitars();
  }

  getAllGuitars() {
    this.guitarService.getGuitars().subscribe(response => {
      this.guitars = response;
    });
  }
  

  // HARDCODED:
  /*guitars: any = [
    {
      id: 1,
      brand: "Ibanez",
      model: "Gio"
    },{
      id: 2,
      brand: "Fender",
      model: "Stratocaster"
    }
  ]

  constructor() { }

  ngOnInit() {
  }*/

}
