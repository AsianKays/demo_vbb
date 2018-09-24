import { Profil } from "../models/Profil";

export class ProfilService {
    profil: Profil[] = [
        
    ]

    createProfil(profil: Profil) {
        this.profil.push(profil);
    }
}