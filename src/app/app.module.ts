import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilFormPage } from '../pages/profil-form/profil-form';
import { RestaurantsListPage } from '../pages/restaurants-list/restaurants-list';
import { MenuListPage } from '../pages/menu-list/menu-list';
import { SingleMenuPage } from '../pages/menu-list/single-menu/single-menu';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuListService } from '../pages/services/menu-list.service';
import { ProfilService } from '../pages/services/profil.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilFormPage,
    RestaurantsListPage,
    MenuListPage,
    SingleMenuPage,
    ProfilPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilFormPage,
    RestaurantsListPage,
    MenuListPage,
    SingleMenuPage,
    ProfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuListService,
    ProfilService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
