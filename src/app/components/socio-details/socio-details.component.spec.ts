import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioDetailsComponent } from './socio-details.component';

describe('SocioDetailsComponent', () => {
  let component: SocioDetailsComponent;
  let fixture: ComponentFixture<SocioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
