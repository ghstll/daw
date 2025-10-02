import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPadre } from './comp-padre';

describe('CompPadre', () => {
  let component: CompPadre;
  let fixture: ComponentFixture<CompPadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompPadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompPadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
