import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoProfissionalComponent } from './historico-profissional.component';

describe('HistoricoProfissionalComponent', () => {
  let component: HistoricoProfissionalComponent;
  let fixture: ComponentFixture<HistoricoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
