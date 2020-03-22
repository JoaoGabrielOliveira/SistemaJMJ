import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-final',
  templateUrl: './form-final.page.html',
  styleUrls: ['./form-final.page.scss'],
})
export class FormFinalPage implements OnInit {

  constructor() { }

  Pasteis = {
     carne:0,
     queijo:0,
     pizza:0,
     frango:0,
     calabresa:0
    };

  ngOnInit() {
  }

  PegarPasteis(){
    console.log(this.Pasteis.carne);
    console.log(this.Pasteis.queijo);
    console.log(this.Pasteis.pizza);
    console.log(this.Pasteis.frango);
    console.log(this.Pasteis.calabresa);
  }

  Confirmar(){
    this.PegarPasteis();
  }

}
