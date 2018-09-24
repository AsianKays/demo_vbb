import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuListPage } from '../menu-list/menu-list';

@Component({
  selector: 'page-restaurants-list',
  templateUrl: 'restaurants-list.html',
})
export class RestaurantsListPage {

  restaurantsList = [

    {
      name: "McDonald's Quetigny",
      description: [
        '2 rue du cap vert 21800 Quetigny',
        'Ouvert de lundi à dimanche',
        '24H/24',
        '0380466155'
      ]
    },
    {
      name: "McDonald's Marsannay-la-côte",
      description: [
        'Boulevard Charles de Gaulle 21160 Marsannay-la-côte',
        'Ouvert de lundi à dimanche',
        '24H/24',
        '0380529238'
      ]
    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  onGoToMenuList(){
    this.navCtrl.push(MenuListPage);
  }

}
