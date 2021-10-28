import { Component, OnInit } from '@angular/core';
import {ListaNoticias} from '../../interfaces/noticias';
import {ListaCategorias} from '../../interfaces/categorias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  ListaCategorias=ListaCategorias;
  ListaNoticias=ListaNoticias;
  constructor() { }

  ngOnInit(): void {
  }

}
