import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPostsComponent } from './app-posts.component';

describe('AppPostsComponent', () => {
  let component: AppPostsComponent;
  let fixture: ComponentFixture<AppPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPostsComponent]
    });
    fixture = TestBed.createComponent(AppPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
