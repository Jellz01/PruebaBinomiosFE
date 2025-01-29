import { ComponentFixture, TestBed } from '@angular/core/testing';
//
import { BinomiosComponent } from './binomios.component';

describe('BinomiosComponent', () => {
  let component: BinomiosComponent;
  let fixture: ComponentFixture<BinomiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinomiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinomiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
