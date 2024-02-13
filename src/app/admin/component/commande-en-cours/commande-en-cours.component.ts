import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from '../../service/client-api.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommandeApiService } from '../../service/commande-api.service';
import { ToastrService } from 'ngx-toastr';
import { ProduitApiService } from '../../service/produit-api.service';
import { produit } from '../../model/produitmodel';
import { DatePipe } from '@angular/common';
import {jsPDF} from 'jspdf'
import  autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-commande-en-cours',
  templateUrl: './commande-en-cours.component.html',
  styleUrls: ['./commande-en-cours.component.css']
})
export class CommandeEnCoursComponent implements OnInit{

  public utilisateurConnecte=true;
  commandeEncoursForm:FormGroup|any;
  nombreCommande:any;
  selectedItems:number[]=[];
  total:any;
  prixModel:any;
  selectedProduit:produit| null=null;
  shopData:any;
  clientData:any[]=[];
  produitData:any[]=[];
  commandeData:any[]=[];
  productControl:any;
  categoryData:any;
  loading: boolean = true;
  totalPrixUnitaire:any;

constructor(private datepipe: DatePipe,private router:Router,private apiClient:ClientApiService,private formBuilder:FormBuilder,private apiCommande:CommandeApiService,private toarst:ToastrService,private produitItem:ProduitApiService,private apiProduit:ProduitApiService){}

  ngOnInit(): void {
    this.getProduit();
    this.getAllBoutique();
      this.getAllClient();
      this.getAllCommande();
      // this.getAllProduit();
      this.commandeEncoursForm = this.formBuilder.group({
        deliveryDate: ['', Validators.required],
        shopId:['',Validators.required],
        deliveryShop:['',Validators.required],
        discount: [1, Validators.min(0)],
        advance: [1, Validators.min(0)],
        status: ['in-progress', Validators.required],
        owner:['',Validators.required],
        products: this.formBuilder.array([])
      });
  }
  addProduct() {
    const productGroup = this.formBuilder.group({
      originalProductId: ['', Validators.required],
      orderQuantity: [0, Validators.min(0)],
      price:['',Validators.required],
      size:['',Validators.required]
    });
    this.products.push(productGroup);
  }


  submitCommande(data:any) {
    console.log(data);
    if (this.commandeEncoursForm.valid) {
      this.apiCommande.addCommande(data).subscribe(
        (res) => {
          this.toarst.success('Commande ajoutée avec succès !');
          this.commandeEncoursForm.reset();
          this.getAllCommande();
        },
        (error) => {
          this.toarst.error('Erreur lors de l\'ajout de la commande.');
          console.error(error);
        }
      );
    } else {
      this.toarst.error('Veuillez remplir correctement le formulaire de commande.');
    }
  }
  getAllCommande(){
    this.apiCommande.getAllCommande().subscribe(commandes=>{
      this.commandeData=commandes.filter(commande=>commande.status ==='in-progress');
      this.nombreCommande=this.commandeData.length;
      this.loading=false;
      console.log(this.commandeData);

    })

  }
  validerCommande(commande:any){
    const confirmation = confirm('Etes vous sûr de valider la commmande ?');
    if(confirmation){
      return this.apiCommande.validerCommande(commande._id).subscribe(()=>{
      this.getAllCommande();
      this.toarst.success('Commande Validé avec success !')
      })
    }
    else{
      return false;
    }
  }

  formatDate(updatedAt:string){
    const date = new Date(updatedAt);
    const formatDate =this.datepipe.transform(date, 'dd-MM-yyyy');
    return formatDate;
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }
  get products() {
    return this.commandeEncoursForm.get('products') as FormArray;
  }
  getAllBoutique(){
    this.apiCommande.getAllBoutique().subscribe(res=>{
      this.shopData=res;
    })
  }
  getCategory(){
    this.apiCommande.getAllCategorie().subscribe(res=>{
      this.categoryData=res;
    })
  }
  getProduit(){
    this.apiCommande.getAllProduit().subscribe(res=>{
      this.produitData=res;
      console.log(this.produitData);

    })
  }

selectOption:any;
navigatePage(selectOption:string):void{
  if(selectOption==='EnCours'){
    this.router.navigate(['/commandeEnCours']);
  }
  else if(selectOption==='Termine'){
    this.router.navigate(['/commandeTermine']);
  }
  else{
    this.router.navigate(['/commandeLivre']);
  }
}
getAllClient(){
    this.apiClient.getClient().subscribe(res=>{
      this.clientData=res;
    })
  }
// getAllProduit(){
//     this.produitItem.getAllProduit().subscribe(produit=>{
//        this.produitData=produit;
//     })
//   }


  selectedOption(event:any){
    const selected=event.target.value;
  }


  getClientName(clientId:number):string{
    const client=this.clientData.find(c => c.id === clientId);
    return client ? client.prenom: 'Inconnu';
  }



  deleteCommande(commande:any){
    const confirmation = confirm('Voulez vous supprimez la commmande ?');
    if(confirmation){
      return this.apiCommande.deleteCommande(commande).subscribe(res=>{
        this.toarst.success('Commande supprimé !');
        this.getAllCommande();
      })
    }
    return false;
  }
  calculTotal(){
    this.totalPrixUnitaire=this.commandeData.reduce((acc:any,totalPrix:any)=>{
      return acc * totalPrix.orderedQuantity*totalPrix.price;
    },0);
  }

  makePDF(commande: any) {
      var doc = new jsPDF();
      autoTable(doc, { html: '#my-table' })
    const img = new Image();
    img.src ="/assets/logo.jpg"
    img.onload = () => {
      doc.addImage(img, 'PNG', 10, 10, 20, 20);
      doc.text('Put & Go', 35, 20);
      doc.text('Date : '+commande.createdAt,10,40,);
      doc.text('Client : '+commande.owner.firstName + commande.owner.lastName,10,50);
      doc.text('Telephone : '+ commande.owner.phone,10,60);
      doc.text('Boutique : '+ commande.shopId.name,10,70);
      doc.setTextColor(255, 0, 0);
      doc.setFont('helvetica');
      doc.setFontSize(12);
      commande.products.forEach((product:any) => {
        autoTable(doc, {
          head: [['Commande', 'Quantite', 'Price Unitaire', 'Total de la commande']],
          body: [[
            `${product.name}`,
            `${product.orderedQuantity}`,
            `${product.price}`,
             this.totalPrixUnitaire
          ]],
          startY: 80,
        });
        autoTable(doc,{
          head:[['Avance','Remise']],
          body:[[
            `${commande.advance}`,
            `${commande.discount}`,
          ]],
        })
        autoTable(doc,{
          head:[['Total']],
          body:[[
            `${commande.totalOrder}`,
          ]],
        })
    });
    // `${commande.orderNumber}`,
    //       `${commande.owner.firstName} ${commande.owner.lastName}`,
    //       `${commande.advance}`,
    //       `${commande.totalOrder}`,
      doc.save(`Facture_Commande_${commande.orderNumber}.pdf`);
    };
  }
}

