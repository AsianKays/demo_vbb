import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Profil } from '../models/Profil';
import { ProfilService } from '../services/profil.service';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  profil: Profil[];
  
  public infos: any;

  /*
  Je n'arrive pas à ré-utiliser les données du profil créé juste avant d'arriver sur cette page.
  De ce fait, la condition If dans la méthode getData() ne peut se faire et m'empeche d'associer le profil utilisateur
  à un profil se trouvant dans le fichier data.json.
  Tout est donc en commentaire pour ne pas déranger le reste de l'application.
  */

  constructor(private profilService: ProfilService, public http: HttpClient) {
    //this.getData(this.profil);
  }

  ionViewWillEnter() {
    this.profil = this.profilService.profil.slice();
  }
/*
  getData(profil){
    let url = "assets/data.json";
    this.http.get(url).subscribe(result => {
      let res = Object.keys(result).map(function (key){
        return result[key]; 
      });
      for(let i=0; i < res.length; i++){
        if(res[i]["gender"] == profil["gender"] && parseInt(res[i]["minAge"]) <= parseInt(profil["age"]) && parseInt(res[i]["maxAge"]) >= parseInt(profil["age"])){
          let end = Object.keys(res[i]).map(function (key){
            return res[i][key]; 
          });
          this.infos = end;
          console.log(this.infos);
        }
      }
    });
  }
*/
}
