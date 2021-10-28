import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  formulario:FormGroup;
  
  constructor(public Form:FormBuilder) {
    this.formulario=this.Form.group({
      nombre:["",Validators.required],
      telefono:["",[Validators.required,Validators.maxLength(9),Validators.minLength(9)]],
      email:["",[Validators.required,Validators.email]],
      select:["",Validators.required],
      mensaje:["",Validators.required]
    })
   }

  ngOnInit(): void {
  }

  validacion(){
    console.log
  }

}
