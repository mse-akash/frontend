import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {

  response = [];

  constructor(private http: HttpClient) { }

  fetchdata() {
    return this.http.get('http://localhost:8080/datamodel/result');
  }
}
export class DatamodelBean {
  attribute = '';
  type = '';
  internal = '';
  fixmlMapping = '';
  format = '';
  fixTag = '';
  description = '';
}
