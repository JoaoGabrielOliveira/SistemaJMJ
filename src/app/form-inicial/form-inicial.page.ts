import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { GlobaisService } from 'src/app/Dados/globais.service'

@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.page.html',
  styleUrls: ['./form-inicial.page.scss'],
})
export class FormInicialPage implements OnInit {

  constructor(public alertController: AlertController,
     private router: Router
     ) { }

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

   formValorCaixa:number = 0;

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
      let teste = localStorage.getItem('PrimeiraVez');
      alert(teste);
      if (teste == 'true' || teste == null)
      {
        this.Apresentar();
        localStorage.setItem('PrimeiraVez', 'false')
      }
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

  async EnviarDados()
  {
    let dadosInicias = {Membros:[{}], Pasteis:{}, ValorCaixa:0};
    let Validou:boolean;
    dadosInicias.Membros = this.formMembros;
    dadosInicias.Pasteis = this.formPasteis;
    dadosInicias.ValorCaixa = this.formValorCaixa;

    for(this.Index = 0; this.Index < 3; this.Index++){
      Validou = await this.Validar();
      if(!Validou){ break; }
    }

    if (Validou) GlobaisService.DadosInicias = dadosInicias; this.router.navigate(['/home']);
  }

  async Validar(){
    let alert1 = await this.alertController.create({
      mode:'ios',
      header: 'Formulario Incial',
      buttons: ['OK']
    });


    switch(this.Index)
    {
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
      this.RelatorioCompleto[0] = true;
      return true;

      case 1:
        let pasteis = "";

        if (this.formPasteis.carne < 1)
        {
          pasteis += "O(s) pastel(is) <b>CARNE</b>";
        }

        if (this.formPasteis.queijo < 1)
        {
          pasteis += ", <b>QUEIJO</b>";
        }

        if (this.formPasteis.pizza < 1)
        {
          pasteis += ", <b>PIZZA</b>";
        }

        if (this.formPasteis.frango < 1)
        {
          pasteis += ", <b>FRANGO</b>";
        }

        if (this.formPasteis.calabresa < 1)
        {
          pasteis += ", <b>CALABRESA</b>";
        }
        if(pasteis != ""){
          alert1.message = pasteis + " esta(ão) zerado(s).<br>Caso aja um erro, volte para o formulario anterior.";
          await alert1.present();
        }
        this.RelatorioCompleto[1] = true;
      return true;

      case 2:
        if(this.formValorCaixa < 10.00)
        {
          alert1.message = " O valor de caixa está muito baixo.<br>Caso esse seja o valor, continue.";
          await alert1.present();
        }
        this.RelatorioCompleto[2] = true;
      return true;

      default:
        console.log("Ocorreu um erro inesperado");
      return false;
    }
  }

}
