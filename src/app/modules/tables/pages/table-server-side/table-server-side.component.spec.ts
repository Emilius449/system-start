import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServerSideComponent } from './table-server-side.component';

describe('TableServerSideComponent', () => {
  let component: TableServerSideComponent;
  let fixture: ComponentFixture<TableServerSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableServerSideComponent]
    });
    fixture = TestBed.createComponent(TableServerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
