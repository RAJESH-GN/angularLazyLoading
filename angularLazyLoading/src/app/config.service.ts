import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { filter, map } from 'rxjs/operators';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ConfigService {
  public users$: Observable<User[]>;
  constructor(private http: HttpClient) {}

  public createHeaders() {}

  public getUsers() {
    this.users$ = this.http.get<User[]>('http://localhost:8080/users');
    return this.users$;
  }
}
