import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutImagesComponent } from './about-images.component';

describe('AboutImagesComponent', () => {
  let component: AboutImagesComponent;
  let fixture: ComponentFixture<AboutImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutImagesComponent]
    });
    fixture = TestBed.createComponent(AboutImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
