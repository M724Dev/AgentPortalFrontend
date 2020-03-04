import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsubcreateComponent } from './agentsubcreate.component';

describe('AgentsubcreateComponent', () => {
  let component: AgentsubcreateComponent;
  let fixture: ComponentFixture<AgentsubcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsubcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsubcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
