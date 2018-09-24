import { Component } from '@angular/core';
import { ProfilPage } from '../profil/profil';
import { RestaurantsListPage } from '../restaurants-list/restaurants-list';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage = HomePage;
  profilPage = ProfilPage;
  restaurantsListPage = RestaurantsListPage;

}
