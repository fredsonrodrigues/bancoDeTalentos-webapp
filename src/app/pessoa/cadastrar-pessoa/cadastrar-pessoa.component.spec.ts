import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPessoaComponent } from './cadastrar-pessoa.component';

describe('CadastrarPessoaComponent', () => {
  let component: CadastrarPessoaComponent;
  let fixture: ComponentFixture<CadastrarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
