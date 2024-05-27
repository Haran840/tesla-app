import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/Model';
import { Option } from '../models/Option';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http:HttpClient) { }

  getAllCarModels():Observable<Array<Model>>
  {
    return this.http.get<Array<Model>>('/models');
  }
  
  getCarOptionsById(id: string):Observable<Option>
  {
    return this.http.get<Option>(`/options/${id}`);
  }
}
