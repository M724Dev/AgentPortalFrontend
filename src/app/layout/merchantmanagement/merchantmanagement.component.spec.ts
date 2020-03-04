import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantmanagementComponent } from './merchantmanagement.component';

describe('MerchantmanagementComponent', () => {
  let component: MerchantmanagementComponent;
  let fixture: ComponentFixture<MerchantmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
