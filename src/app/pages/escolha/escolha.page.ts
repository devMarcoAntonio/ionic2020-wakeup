import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss'],
})
export class EscolhaPage implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }
  navegarOrigemDestino(origem: any, destino: any) {
    console.log('Estou navegando para =>', origem);
    //this.router.navigate([destino]);
    this.navegar(destino);
  }

  navegar(destino: any) {
    console.log('Estou navegando para =>', destino);
    this.router.navigate([destino]);

  }
}
