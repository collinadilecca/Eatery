import { Component, OnInit } from '@angular/core';
import { Drinks } from 'src/assets/drinks';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  water: Drinks = {
    name: 'Water',
    price: 2,
    url: 'https://icon2.cleanpng.com/20171220/kxq/water-bottle-png-image-5a3ac0c436d735.8291154815137998762246.jpg'
  }

  cola: Drinks = {
    name: 'Cola',
    price: 4,
    url: 'https://pngimg.com/uploads/cocacola/cocacola_PNG3.png'
  }

  orangeJuice: Drinks = {
    name: 'Orange juice',
    price: 5,
    url: 'https://icon2.cleanpng.com/20180130/kaw/kisspng-orange-juice-smoothie-jal-jeera-oranges-and-orange-juice-splash-5a7025e81d4cf3.78988170151729917612.jpg'
  }

  appleJuice: Drinks = {
    name: 'Apple juice',
    price: 5,
    url: 'https://img.pngio.com/apple-juice-png-images-free-png-library-apple-juice-png-418_385.png'
  }

  beer: Drinks = {
    name: 'Beer',
    price: 9,
    url: 'https://lh3.googleusercontent.com/proxy/vxOk8FGJJg1YpClWzs_TP1UwbDrYHk3_Wum3s70HoitNzlD7snGottcKSENEzlWr36q-K16zZq7Z0RYiowVCK0NgebRzVSVsNLBpPg_97ajdNLleDoGp'
  }


}
