import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KollegKlasseComponent } from './kolleg-klasse.component';

describe('KollegKlasseComponent', () => {
  let component: KollegKlasseComponent;
  let fixture: ComponentFixture<KollegKlasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KollegKlasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KollegKlasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
