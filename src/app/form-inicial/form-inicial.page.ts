import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.page.html',
  styleUrls: ['./form-inicial.page.scss'],
})
export class FormInicialPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ListaDados = [true, false, false];

  RelatorioCompleto = [false,false,false];
  
  Index:number = 0;

  //Formularios
  formMembros = [
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""},
    {nome:""}
  ];

  formPasteis = {
    carne:0,
    queijo:0,
    pizza:0,
    frango:0,
    calabresa:0
   };

  async Apresentar() {

    const alert1 = await this.alertController.create({
      mode:'ios',
      header: 'Bem Vindo',
      subHeader: 'Formulario Incial',
      message: 'Qual terminar esse formulário, Pressione a Seta para Direita para Avançar',
      buttons: ['OK']
    });

    const alert = await this.alertController.create({
      mode:'ios',
      header: 'Bem Vindo',
      subHeader: 'Formulario Incial',
      message: 'Bem Vindo a ao Formulario para geração de Relatorios de Vendas',
      buttons: ['OK']
    });

    await alert.present();
    await alert1.present();
  }  

  ngOnInit()
  {
    this.Apresentar();
  }

  Voltar() {
    if(this.Index >= 0 )
    {
      console.log("Antes de voltar: " + this.Index);
      this.ListaDados[this.Index] = false;

      this.Index--;

      console.log("Depois de voltar: " + this.Index);
      this.ListaDados[this.Index] = true;
    }

    else {
      console.log("Você não pode mais voltar.");
    }
  }

  async Avancar() {
    let Validou = await this.Validar();
    if(Validou == true)
    {
      if(this.Index < 2)
      {
        console.log("Antes de avançar: " + this.Index);
        this.ListaDados[this.Index] = false;

        this.Index++;

        console.log("Depois de avançar: " + this.Index);
        this.ListaDados[this.Index] = true;
      }

      else
      {
        console.log("Você não pode mais avançar.");
      }
    }
  }

  EnviarDados()
  {
  }

  async Validar(){
    let alert1 = await this.alertController.create({
      mode:'ios',
      header: 'Bem Vindo',
      subHeader: 'Formulario Incial',      
      buttons: ['OK']
    });


    switch(this.Index) {
      case 0:
        for(let i = 0; i < 3; i++)
        {
          if(this.formMembros[i].nome == "")
          {
            alert1.message = 'Escreva nos 3 primeiros campos';
            await alert1.present();
            return false;
          }
        }
      return true;

      case 1:
      return true;

      case 2:
        console.log("Informação de Caixa validado.");
      return true;

      default:
        console.log("Ocorreu um erro inesperado");
        return false;
      break
    }

    return false;
  }

}
