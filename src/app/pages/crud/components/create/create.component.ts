import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudServiceService } from '../../service/crud-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudServiceService
  ) { }

  ngOnInit(): void {
    this.iniciaFormulario();
  }

  iniciaFormulario() {
    this.form = this.formBuilder.group({
      title: [''],
      author: ['']
    })
  }

  enviaFormulario() {
    console.log('Estou enviando para o backend =>', this.form.value);
    this.crudService.postFormulario(this.form.value).subscribe((resposta) => {
      console.log('Fizemos o post com sucesso', resposta);
    }, err => {
      console.log('OOps ocorreu um erro');
    });
  }

}
