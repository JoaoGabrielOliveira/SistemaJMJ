import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobaisService {

  constructor() { }

  public static relInicialPronto:boolean;
  public static relFinalPronto:boolean;

  public static DadosInicias = {Membros:[{}], Pasteis:{}, ValorCaixa:0};
}

