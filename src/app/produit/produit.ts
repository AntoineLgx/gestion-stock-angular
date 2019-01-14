export class Produit {

    nom: string;
    fournisseur : string;
    age : number;
    prix : number;
    description : string;
    ingredients : Array<string>;
    conservation : string
 
   constructor( nom : string, fournisseur:string,age: number, description:string, prix : number, ingredients : Array<string>, conservation : string){
        
        this.nom = nom
        this.age = age;
        this.fournisseur = fournisseur;
        this.description =description;
        this.prix = prix;
        this.ingredients = ingredients;
        this.conservation = conservation;
    
   }
 }
 
    const p1: Produit = new Produit('Ordinateur', 'Asus', 13, 'Ordinateur master race pour g@mer',1999.99, ['intel core i7','bla','bla','bla','bla','bla'],'ne pas mettre dans l\'eau');
    const p2: Produit = new Produit('Stylo', 'Bic', 13, 'Lorem ipsum dolor sit amet, et natum saperet his, ea error utinam consectetuer eum, sed fuisset convenire in. Mea sumo nobis eu, sensibus assentior suscipiantur ex mea. Discere erroribus vituperatoribus eu quo, mel ei essent torquatos. ',2,['encre','bla'],"ne pas manger");
    const p3: Produit = new Produit('Paté pour chat', 'Lorem ispcat', 22, 'Lorem ipsum dolor sit amet, et natum saperet his, ea error utinam consectetuer eum, sed fuisset convenire in. Mea sumo nobis eu, sensibus assentior suscipiantur ex mea. Discere erroribus vituperatoribus eu quo, mel ei essent torquatos. ',5, [
        'Salmon', 'Trout', 'Crappy', 'Walleye', 'Pike', 'Bass', 'Catfish', 'Perch'],"au sec et au frais");
    const p4: Produit = new Produit('Jambon sec', 'Les montagnes de France', 22, 'Lorem ipsum dolor sit amet, et natum saperet his, ea error utinam consectetuer eum, sed fuisset convenire in. Mea sumo nobis eu, sensibus assentior suscipiantur ex mea. Discere erroribus vituperatoribus eu quo, mel ei essent torquatos. ',25, ['jambon','sel'],'au sec et au fras');
    const p5: Produit = new Produit('Chareur fast charge pour téléphone portable', 'Fast & charge', 20, 'Lorem ipsum dolor sit amet, et natum saperet his, ea error utinam consectetuer eum, sed fuisset convenire in. Mea sumo nobis eu, sensibus assentior suscipiantur ex mea. Discere erroribus vituperatoribus eu quo, mel ei essent torquatos. ',32,["electricite, des trucs en plus mais je sais pas quoi"],"heu....");
 
 export const produits= [
     p1,p2,p3,p4,p5
 ] 