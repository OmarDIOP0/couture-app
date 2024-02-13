import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor(private router:Router,config: NgbCarouselConfig){

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  showNavigationArrows = false;
	showNavigationIndicators = false;

  navigateClient(){
    this.router.navigate(["/client"]);
  }
  navigateCommande(){
    this.router.navigate(["/commande"]);
  }

  navigateStock(){
    this.router.navigate(["/stock"]);
  }

  navigateBoutique(){
    this.router.navigate(["/boutique"]);
  }
	images=[
    {name:'img1.jpeg',description:'Découvrez notre collection de boubous pour homme, alliant tradition et modernité. Fabriqués à partir de tissus africains authentiques, nos boubous offrent un style unique et une élégance intemporelle pour les hommes soucieux de leur apparence'},
    {name:'img2.jpeg',description:'Explorez nos boubous sur mesure, conçus pour mettre en valeur la silhouette masculine. Chaque boubou est soigneusement adapté à vos préférences, que ce soit en termes de coupe, de motifs ou de choix de tissus, pour créer une tenue sur mesure qui reflète votre style personnel'},
    {name:'img3.jpeg',description:'Plongez dans notre collection de boubous haut de gamme, réalisés avec des finitions artisanales impeccables. Que vous recherchiez un look formel pour une occasion spéciale ou un boubou décontracté pour votre quotidien, notre boutique propose une variété de styles pour répondre à toutes les envies'},
    {name:'img4.jpeg',description:'Découvrez notre sélection exclusive de tissus pour boubous, offrant une palette de couleurs et de motifs variés. Laissez libre cours à votre créativité en choisissant le tissu qui correspond le mieux à votre personnalité et à votre style, et notre équipe de couturiers expérimentés se chargera de réaliser votre boubou sur mesure.'},
    {name:'img5.jpeg',description:'Découvrez notre gamme de boubous pour homme décontractés et tendance, parfaits pour ajouter une touche de style ethnique à votre garde-robe quotidienne. Fabriqués à partir de tissus légers et confortables, nos boubous vous offrent un look décontracté et sophistiqué, idéal pour différentes occasions'},
    {name:'img6.jpeg',description:'Rejoignez nos ateliers de couture dédiés aux boubous pour homme et apprenez les techniques traditionnelles de confection. Nos experts vous guideront tout au long du processus, de la sélection du tissu à la réalisation de votre propre boubou, pour vous permettre de maîtriser cet art ancestral et de créer des pièces uniques'}
  ]
}
