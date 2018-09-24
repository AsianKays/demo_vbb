import { Component } from '@angular/core';
import { ProfilFormPage } from '../profil-form/profil-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profilFormPage = ProfilFormPage;

}
