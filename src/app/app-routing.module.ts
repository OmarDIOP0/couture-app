import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { BoutiqueComponent } from './admin/component/boutique/boutique.component';
import { ClientComponent } from './admin/component/client/client.component';
import { StockComponent } from './admin/component/stock/stock.component';
import { MesboutiquesComponent } from './admin/component/mesboutiques/mesboutiques.component';
import { UpdateClientComponent } from './admin/component/update-client/update-client.component';
import { ItemBoutiqueComponent } from './admin/component/item-boutique/item-boutique.component';
import { CommandeEnCoursComponent } from './admin/component/commande-en-cours/commande-en-cours.component';
import { CommandeTermineComponent } from './admin/component/commande-termine/commande-termine.component';
import { ComptabiliteComponent } from './admin/component/comptabilite/comptabilite.component';
import { FacturationComponent } from './admin/component/facturation/facturation.component';
import { LoginComponent } from './admin/component/login/login.component';
import { SignupComponent } from './admin/component/signup/signup.component';
import { ParametreComponent } from './admin/component/parametre/parametre.component';
import { CommandeLivreComponent } from './admin/component/commande-livre/commande-livre.component';
import { UpdateCommandeComponent } from './admin/component/update-commande/update-commande.component';
import { CaisseComponent } from './admin/component/caisse/caisse.component';
import { SalaireComponent } from './admin/component/salaire/salaire.component';
import { AutrefactureComponent } from './admin/component/autrefacture/autrefacture.component';
import { GeneraleComponent } from './admin/component/generale/generale.component';
import { authGuard } from './admin/login/auth.guard';
import { ViewBoutiqueComponent } from './admin/component/view-boutique/view-boutique.component';
import { UpdateBoutiqueComponent } from './admin/component/update-boutique/update-boutique.component';
import { UpdateBoutiqueCategorieComponent } from './admin/component/update-boutique-categorie/update-boutique-categorie.component';
import { ProduitComponent } from './admin/component/produit/produit.component';
import { UpdateProductComponent } from './admin/component/update-product/update-product.component';
import { ViewProduitComponent } from './admin/component/view-produit/view-produit.component';
import { NotFoundComponent } from './admin/component/not-found/not-found.component';
import { ProductShopComponent } from './admin/component/product-shop/product-shop.component';
import { UpdateEmployeComponent } from './admin/component/update-employe/update-employe.component';
import { AccueilComponent } from './admin/component/accueil/accueil.component';
import { ViewClientComponent } from './admin/component/view-client/view-client.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'',component:AccueilComponent
  },
  {
    path:'dashboard',component:DashboardComponent,canActivate:[authGuard]
  },
  {
    path:'boutique',component:BoutiqueComponent,canActivate:[authGuard]
  },
  {
    path:'product/category/:category',component:ItemBoutiqueComponent,canActivate:[authGuard]
  },
  {
    path:'client',component:ClientComponent,canActivate:[authGuard]
  },
  {
    path:'viewClient/:id',component:ViewClientComponent,canActivate:[authGuard]
  },
  {
    path:'updateClient/:id',component:UpdateClientComponent,canActivate:[authGuard]
  },
  {
    path:'commandeEnCours',component:CommandeEnCoursComponent,canActivate:[authGuard]
  },
  {
    path:'commandeTermine',component:CommandeTermineComponent,canActivate:[authGuard]
  },
  {
    path:'commandeLivre',component:CommandeLivreComponent,canActivate:[authGuard]
  },
  {
    path:'updateCommande/:id',component:UpdateCommandeComponent,canActivate:[authGuard]
  },
  {
    path:'mesboutiques',component:MesboutiquesComponent,canActivate:[authGuard]
  },
  {
    path:'comptabilite',component:ComptabiliteComponent,canActivate:[authGuard]
  },
  {
    path:'facturation',component:FacturationComponent,canActivate:[authGuard]
  },
  {
    path:'parametre',component:ParametreComponent,canActivate:[authGuard]
  },
  {
    path:'caisse',component:CaisseComponent,canActivate:[authGuard]
  },
  {
    path:'general',component:GeneraleComponent,canActivate:[authGuard]
  },
  {
    path:'employee',component:SalaireComponent,canActivate:[authGuard]
  },
  {
    path:'autrefacture',component:AutrefactureComponent,canActivate:[authGuard]
  },
  {
    path:'viewBoutique/:id',component:ViewBoutiqueComponent,canActivate:[authGuard]
  },
  {
    path:'updateBoutique/:id',component:UpdateBoutiqueComponent,canActivate:[authGuard]
  },
  {
    path:'updateBoutiqueCategorie/:id',component:UpdateBoutiqueCategorieComponent,canActivate:[authGuard]
  },
  {
    path:'produit',component:ProduitComponent,canActivate:[authGuard]
  },
  {
    path:'updateProduct/:id',component:UpdateProductComponent,canActivate:[authGuard]
  },
  {
    path:'viewProduit/:id',component:ViewProduitComponent,canActivate:[authGuard]
  },
  {
    path:'product/shop/:shopId',component:ProductShopComponent,canActivate:[authGuard]
  },
  {
    path:'product/stock',component:StockComponent,canActivate:[authGuard]
  },
  {
    path:'updateEmploye/:id',component:UpdateEmployeComponent,canActivate:[authGuard]
  },
  {
    path:'**',component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
