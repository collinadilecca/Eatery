import { Component, OnInit } from '@angular/core';
import { Food } from 'src/assets/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  burger: Food = {
    name: 'Burger',
    price: 15,
    url: 'https://media.istockphoto.com/photos/burger-isolated-on-white-picture-id840902892?k=6&m=840902892&s=612x612&w=0&h=lA4ww5bmLwCzlRXYqHU_EkVC_xfgoOIsX9IvDu0rE1c='
  }

  pizza: Food = {
    name: 'Pizza',
    price: 8,
    url: 'https://content-service.sodexomyway.com/media/SLICE-OF-LIFE_1920x976_tcm436-8004.jpg?url=https://harpercollege.sodexomyway.com/'
  }

  hotDog: Food = {
    name: 'Hot dog',
    price: 6,
    url: 'https://media.istockphoto.com/photos/hot-dog-on-white-picture-id1131775824?k=6&m=1131775824&s=612x612&w=0&h=ftSOw6xne388mWztO78nCAXo1L6f4aLRSmbjU9hGogg='
  }

  donut: Food = {
    name: 'Donut',
    price: 3,
    url: 'https://4.imimg.com/data4/TC/QO/GLADMIN-30189855/nb-500x500.png'
  }

}
