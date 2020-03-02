import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://192.168.1.129/cands/wp-json/custom-plugin/';
  constructor(private http: HttpClient) { }

  //get project category details
  getProjectData(userId) {
    return this.http.post(this.baseUrl + 'projects', userId).pipe(
      map(results => results)
    );
  }

  //get client category details
  getClientData() {
    return this.http.get(this.baseUrl + 'clients')

  }

  //get invoice category details
  getInvoiceData() {
    return this.http.get(this.baseUrl + 'invoice').pipe(
      map(results => results)
    );
  }

  //get estimate category details
  getEstimateData() {
    return this.http.get(this.baseUrl + 'estimate').pipe(
      map(results => results)
    );
  }
}
