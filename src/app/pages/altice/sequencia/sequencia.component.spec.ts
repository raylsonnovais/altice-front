import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenciaComponent } from './sequencia.component';

describe('SequenciaComponent', () => {
  let component: SequenciaComponent;
  let fixture: ComponentFixture<SequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
