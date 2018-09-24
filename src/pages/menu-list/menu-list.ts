import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleMenuPage } from './single-menu/single-menu';
import { Menu } from '../models/Menu';
import { MenuListService } from '../services/menu-list.service';

@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

  menuList: Menu[];

  constructor(public modalCtrl: ModalController, private menuListService: MenuListService) {
  }

  ionViewWillEnter() {
    this.menuList = this.menuListService.menuList.slice();
  }

  onGoToMenu(index: number){
    let modal = this.modalCtrl.create(SingleMenuPage, {index: index});
    modal.present();
  }

}
