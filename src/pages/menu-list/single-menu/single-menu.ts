import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { MenuListService } from '../../services/menu-list.service';
import { Menu } from '../../models/Menu';
import { Profil } from '../../models/Profil';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'page-single-menu',
  templateUrl: 'single-menu.html',
})
export class SingleMenuPage implements OnInit {

  index: number;
  menu: Menu;
  profil: Profil[];

  constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private menuListService: MenuListService,
    private profilService: ProfilService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.menu = this.menuListService.menuList[this.index];
    this.profil = this.profilService.profil.slice();
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
