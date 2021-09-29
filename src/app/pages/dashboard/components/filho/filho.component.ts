import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {

  public form: FormGroup;

  @Output()
  public valorDoFormulario = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciaFormulario();
  }

  iniciaFormulario() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
      check: [false]
    })


    this.form.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((valorDoFormulario) => {
      this.valorDoFormulario.emit(valorDoFormulario);
    });
  }



}


