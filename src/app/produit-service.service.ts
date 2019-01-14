import { Injectable } from '@angular/core';
import {Produit,produits} from "./produit/produit";
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  constructor() { 
  }

  getProduits(){
    return produits;
  }
  addProduit(produit:Produit){
    produits.push(new Produit(produit.nom,  produit.fournisseur, produit.age,produit.description,produit.prix, [], produit.conservation));
    console.log(produits);
  }
  deleteProduit(produit:Produit){
      for (var i =0; i < produits.length; i++)
        if (produits[i].nom === produit.nom) {
            produits.splice(i,1);
            break;
        }
  }
}
