import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

  public valorDoFormularioQueRecebiDoComponenteFilho: any;

  constructor() { }

  ngOnInit(): void {
  }

  recebeValorDoComponenteFilho(informacoesDoFormulario: any) {
    console.log('Estou recebendo as informações do componente filho =>', informacoesDoFormulario);
    this.valorDoFormularioQueRecebiDoComponenteFilho = informacoesDoFormulario;
  }

  enviaFormulario() {
    console.log('Enviando Formulario pelo botão=>', this.valorDoFormularioQueRecebiDoComponenteFilho)
  }

}
