import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHijo } from './comp-hijo';

describe('CompHijo', () => {
  let component: CompHijo;
  let fixture: ComponentFixture<CompHijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompHijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompHijo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
