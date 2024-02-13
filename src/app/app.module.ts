import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { ClientComponent } from './admin/component/client/client.component';
import { StockComponent } from './admin/component/stock/stock.component';
import { BoutiqueComponent } from './admin/component/boutique/boutique.component';
import { MesboutiquesComponent } from './admin/component/mesboutiques/mesboutiques.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateClientComponent } from './admin/component/update-client/update-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ItemBoutiqueComponent } from './admin/component/item-boutique/item-boutique.component';
import { CommandeEnCoursComponent } from './admin/component/commande-en-cours/commande-en-cours.component';
import { CommandeTermineComponent } from './admin/component/commande-termine/commande-termine.component';
import { ComptabiliteComponent } from './admin/component/comptabilite/comptabilite.component';
import { FacturationComponent } from './admin/component/facturation/facturation.component';
import { CaisseComponent } from './admin/component/caisse/caisse.component';
import { ComptabilitegeneraleComponent } from './admin/component/comptabilitegenerale/comptabilitegenerale.component';
import { SalaireComponent } from './admin/component/salaire/salaire.component';
import { AutrefactureComponent } from './admin/component/autrefacture/autrefacture.component';
import { LoginComponent } from './admin/component/login/login.component';
import { SignupComponent } from './admin/component/signup/signup.component';
import { ParametreComponent } from './admin/component/parametre/parametre.component';
import { CommandeLivreComponent } from './admin/component/commande-livre/commande-livre.component';
import { UpdateCommandeComponent } from './admin/component/update-commande/update-commande.component';
import { GeneraleComponent } from './admin/component/generale/generale.component';
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
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    StockComponent,
    BoutiqueComponent,
    MesboutiquesComponent,
    UpdateClientComponent,
    ItemBoutiqueComponent,
    CommandeEnCoursComponent,
    CommandeTermineComponent,
    ComptabiliteComponent,
    FacturationComponent,
    CaisseComponent,
    ComptabilitegeneraleComponent,
    SalaireComponent,
    AutrefactureComponent,
    LoginComponent,
    SignupComponent,
    ParametreComponent,
    CommandeLivreComponent,
    UpdateCommandeComponent,
    GeneraleComponent,
    ViewBoutiqueComponent,
    UpdateBoutiqueComponent,
    UpdateBoutiqueCategorieComponent,
    ProduitComponent,
    UpdateProductComponent,
    ViewProduitComponent,
    NotFoundComponent,
    ProductShopComponent,
    UpdateEmployeComponent,
    AccueilComponent,
    ViewClientComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbCarouselModule,
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
