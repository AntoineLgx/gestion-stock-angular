import { Component, OnInit } from '@angular/core';
import { Produit,produits} from './produit';
import { ProduitService } from '../produit-service.service';
import { FormBuilder, FormGroup, FormControl,Validators, FormControlName } from '@angular/forms';

@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit {
    produits  : Array<Produit>;

    hiddenForm : boolean;
    produit : Produit;
    ageCtrl: FormControl;
    nomCtrl : FormControl;
    prixCtrl : FormControl;
    fournisseurCtrl: FormControl;
    descriptionCtrl : FormControl;
    produitForm : FormGroup;

  constructor(private produitListService:ProduitService, fb:FormBuilder) { 
    this.hiddenForm = false;
    this.nomCtrl = fb.control("",[Validators.required]);
    this.ageCtrl = fb.control("", Validators.pattern("^[0-9]*$"));
    this.fournisseurCtrl = fb.control("",[Validators.required]);
    this.descriptionCtrl = fb.control("",[Validators.required]);
    this.prixCtrl = fb.control("", Validators.pattern("^[0-9]*$"));
    this.produitForm = fb.group({
    nom: this.nomCtrl,
    age : this.ageCtrl,
    prix: this.prixCtrl,
    description : this.descriptionCtrl,
    fournisseur : this.fournisseurCtrl
    });
  }
  reset() {
    this.nomCtrl.setValue('');
    this.ageCtrl.setValue('');
    this.fournisseurCtrl.setValue('');
    this.descriptionCtrl.setValue('');

  }

  register(){
    this.hiddenForm = true;
    this.produitListService.addProduit(this.produitForm.value);
  }
  ngOnInit() {
    this.produits = this.produitListService.getProduits();
  }

  deleteProduit(produit:Produit){
      this.produitListService.deleteProduit(produit);
  }
}