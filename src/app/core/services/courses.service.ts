import {Course} from '../models/course';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export class CoursesService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3004/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };


  getList(sartNumber: number) {
    const url = `${this.configUrl}courses?start=${sartNumber}&count=3&sort=date`;
    return this.http.get(url);
  }

  createCourse(item: Course, id: number): Observable<Course> {
    if (id) {
      item.id = id;
      return this.updateItem(item);
    }

    const url = `${this.configUrl}courses`;
    return this.http.post<Course>(url, item, this.httpOptions);
  }

  getItem(id: number) {
    const url = `${this.configUrl}courses/${id}`;
    return this.http.get(url);
  }

  getAuthors() {
    const url = `${this.configUrl}authors`;
    return this.http.get(url);
  }

  searchCourses(term: string): Observable<Course[]> {
    term = term.trim();
    const url = `${this.configUrl}courses?textFragment=${term}`;
    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Course[]>(url, options);
  }

  updateItem(data: Course): Observable<Course> {
    const url = `${this.configUrl}courses/${data.id}`;
    return this.http.patch<Course>(url, data, this.httpOptions);
  }

  removeItem(id: number): Observable<{}> {
    const url = `${this.configUrl}courses/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
