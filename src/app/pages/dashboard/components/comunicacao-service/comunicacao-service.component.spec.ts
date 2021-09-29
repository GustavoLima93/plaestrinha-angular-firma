import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoServiceComponent } from './comunicacao-service.component';

describe('ComunicacaoServiceComponent', () => {
  let component: ComunicacaoServiceComponent;
  let fixture: ComponentFixture<ComunicacaoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacaoServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
