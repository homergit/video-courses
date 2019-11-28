import {TestBed} from '@angular/core/testing';
import {AuthorizationService} from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationService]
    });

    service = TestBed.get(AuthorizationService);

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should create the service',
    () => {
      expect(service).toBeTruthy();
    });

  it('should store the token in localStorage',
    () => {
      service.login('name', 'pass');
      expect(localStorage.getItem('personalData-name')).toEqual('name');
      expect(localStorage.getItem('personalData-pass')).toEqual('pass');
    });

  it('should remove stored token from localStorage',
    () => {
      service.logout();
      expect(localStorage.getItem('personalData-name')).toEqual(null);
      expect(localStorage.getItem('personalData-pass')).toEqual(null);
    });

  it('should return true if user log in system',
    () => {
      expect(service.isAuthenicated()).toEqual(false);
      localStorage.setItem('personalData-name','name');
      expect(service.isAuthenicated()).toEqual(true);
    });

  it('should return array with user name and pass',
    () => {
      service.login('name', 'pass');
      expect(service.getUserInfo()).toEqual(['name', 'pass']);
    });
});
