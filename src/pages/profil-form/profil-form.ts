import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { ProfilService } from '../services/profil.service';
import { Profil } from '../models/Profil';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-profil-form',
  templateUrl: 'profil-form.html',
})
export class ProfilFormPage implements OnInit {

  profilForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private profilService: ProfilService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profilForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      pseudo: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      imc: ['', Validators.required],
      allergies: [''],
      age: ['', Validators.required],
      health: [''],
      activity: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmitForm() {
    let newProfil = new Profil(this.profilForm.get('name').value);
    newProfil.firstname = (this.profilForm.get('firstname').value);
    newProfil.pseudo = (this.profilForm.get('pseudo').value);
    newProfil.weight = (this.profilForm.get('weight').value);
    newProfil.height = (this.profilForm.get('height').value);
    newProfil.allergies = (this.profilForm.get('allergies').value);
    newProfil.imc = Math.round((this.profilForm.get('weight').value/((newProfil.height/100)*(newProfil.height/100))));
    newProfil.age = (this.profilForm.get('age').value);
    newProfil.health = (this.profilForm.get('health').value);
    newProfil.activity = (this.profilForm.get('activity').value);
    newProfil.gender = (this.profilForm.get('gender').value);
  
    this.profilService.createProfil(newProfil);
    this.navCtrl.push(ProfilPage);
  }
}