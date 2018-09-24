import { Menu } from "../models/Menu";

export class MenuListService {
    menuList: Menu[] = [
        {
          name: 'Menu McChicken',
          src: 'assets/imgs/burgers/mcchicken.png',
          description: [
            'Energie (en kcal) : 760',
            'Matières grasses (g) : 36',
            'Glucides (g) : 79',
            'Protéines (g) : 17'
          ],
          allergenes: [
            'Céleri',
            'Gluten',
            'Lait',
            'Moutarde',
            'Oeufs',
            'Soja',
            'Arachides',
            'Fruits à coque'
          ]
        },
        {
          name: 'Menu BigMac',
          src: 'assets/imgs/burgers/bigmac.png',
          description: [
            'Energie (en kcal) : 1107',
            'Matières grasses (g) : 60',
            'Glucides (g) : 85',
            'Protéines (g) : 33'
          ],
          allergenes: [
            'Lupin',
            'Gluten',
            'Lait',
            'Graines de sésame',
            'Oeufs',
            'Moutarde',
            'Fruits à coque'
          ]
        }
      ]
}