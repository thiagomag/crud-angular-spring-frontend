import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {

  }

  listAll() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(4000),
      tap(courses => console.log(courses))
    );
  }

}
