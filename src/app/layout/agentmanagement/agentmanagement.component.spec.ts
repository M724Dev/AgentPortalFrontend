import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmanagementComponent } from './agentmanagement.component';

describe('AgentmanagementComponent', () => {
  let component: AgentmanagementComponent;
  let fixture: ComponentFixture<AgentmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
