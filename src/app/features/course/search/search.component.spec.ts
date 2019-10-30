import {FormsModule} from '@angular/forms';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search() should be called', () => {
    spyOn(component, 'search');

    const button = fixture.debugElement.nativeElement.querySelector('.search__button');
    button.click();
    expect(component.search).toHaveBeenCalled();
  });

  it('search() should call filterData.emit(term)', () => {
    component.term = 'hello';
    spyOn(component.filterData, 'emit');

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.search__button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.filterData.emit).toHaveBeenCalledWith('hello');
  });
});
