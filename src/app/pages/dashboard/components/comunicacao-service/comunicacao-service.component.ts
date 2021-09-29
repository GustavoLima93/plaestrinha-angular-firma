import { Component, OnInit } from '@angular/core';
import { ComunicacaoService } from './service/comunicacao.service';

@Component({
  selector: 'app-comunicacao-service',
  templateUrl: './comunicacao-service.component.html',
  styleUrls: ['./comunicacao-service.component.scss']
})
export class ComunicacaoServiceComponent implements OnInit {

  // para eu atribuir o valor a uma variavel eu coloco o simbolo de igual;
  // texto = 'oi  mundo';

  public pokemons: any[];
  public page = 1;

  constructor(
    private comunicaoService: ComunicacaoService,
  ) { }

  ngOnInit(): void {
   // this.cozinha();
   this.carregaPokemons();
  }

  carregaPokemons() {
    this.comunicaoService.buscaPokemons(this.page).subscribe((resposta: any) => {
      console.log(resposta);
      this.pokemons = resposta.content;
      console.log('POKEMONS JA NO COMPONENTE', this.pokemons);
    });
  }

  // https://pokemon-apiv2.herokuapp.com/pokemons?page=11&itemsPerPage=10

  // cozinha() {

  // let agua = 5

  //  // como eu declaro variaveis  dentro de uma função ?
  //  // R: Utilizando as palavras reservadas const (constante , *não se muda ),
  //  // ou let ( pode ser alterada);

  // chamando a função quarto para comunica a cozinha com o quarto
  // this.quarto(agua);

  // }

  // quarto(agua: number) {
  //   console.log('Agua chegou no qarto ?', agua);
  // }

  proxPage() {
    this.page = this.page + 1;
    this.carregaPokemons();
  }

  anteriorPage() {
    this.page = this.page -1;

    if(this.page >= 1) {
      this.carregaPokemons();
    }
  }


}
