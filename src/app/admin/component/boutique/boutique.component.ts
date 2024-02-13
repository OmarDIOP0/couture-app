import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from '../../model/categoriemodel';
import { BoutiqueApiService } from '../../service/boutique-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit{

  ngOnInit(): void {
    this.getAllCategorie();
      this.categorieForm=this.formbuilder.group({
        name:['',Validators.required],
        description:['',Validators.required]
      })
  }

  categorieData:any;
  categorieForm:FormGroup|any;
  loading:boolean=true;
  constructor(private router:Router,private formbuilder:FormBuilder,private apiBoutique:BoutiqueApiService,private toastr:ToastrService){}

  NavigateElement(category:any){
    this.router.navigate([`/product/category/${category}`]);
  }

   addCategorie(data:any){
      this.apiBoutique.addCategorie(data).subscribe(res=>{
        this.categorieForm.reset();
        this.toastr.success('Categorie Ajouté avec success !');
        this.getAllCategorie();
      },

      (error)=>{
        this.toastr.error('Erreur lors de l ajout');
        console.error('Une erreur s est produit');
      });
  }
  getAllCategorie(){
    this.apiBoutique.getAllCategorie().subscribe(res=>{
      this.categorieData=res;
      this.loading=false;
    },
    (error)=>{
      this.toastr.error('Erreur lors de la recupération');
      console.error('Une erreur s est produit');
      this.loading=false;
    })
  }
  deleteCategorie(id:string){
    const confirmation=confirm('Voulez vous supprimez la categorie');
    if(confirmation){
      this.apiBoutique.deleteCategorie(id).subscribe(res=>{
        this.toastr.success('Categorie supprimé avec success');
        this.getAllCategorie();
      },
      (error)=>{
        this.toastr.error('Une erreur est survenue');
        console.error('Une erreur est survenue');

      }
      )
    }
    return false;

  }

}
