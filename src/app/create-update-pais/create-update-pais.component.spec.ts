import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdatePaisComponent } from './create-update-pais.component';

describe('CreateUpdatePaisComponent', () => {
  let component: CreateUpdatePaisComponent;
  let fixture: ComponentFixture<CreateUpdatePaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdatePaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdatePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
