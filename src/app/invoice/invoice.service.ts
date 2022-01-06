import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Invoice } from "../model/invoice/invoice";

@Injectable({ providedIn: 'root' })
export class InvoiceService{

  private headers = new HttpHeaders().append(
    'Content-Type',
    'application/json'
  );

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) { }

  getAll(): Observable<Invoice>{
    return this.http.get(`${this.apiUrl}api/Invoice/GetAll`).pipe(map((response: any) => {
      (response as Invoice[]).map(person => {
        return person;
      });
      console.log(response);
      
      return response;
    }));
  }

  async delete(id: number): Promise<any> {
    let response = await this.http.delete<any>(`${this.apiUrl}Invoice/Delete?pId=${id}`, { headers: this.headers }).toPromise();
    return response;
  }

  async updatePerson(person: Invoice): Promise<any> {
    let response = await this.http.put<Invoice>(`${this.apiUrl}Invoice/Update`, person, { headers: this.headers }).toPromise();
    return response;
  }

  async createPerson(person: Invoice): Promise<any> {
    let response = await this.http.post<Invoice>(`${this.apiUrl}Invoice/Create`, person, { headers: this.headers }).toPromise();
    return response;
  }
}