import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientApiUrl: string = 'https://projet-friedrich-louis.herokuapp.com/api/client/';
  httpOptions = {
    // headers: new HttpHeaders({"Content-Type": "application/x-www-form-urlencoded"})
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private httpClient: HttpClient) { }


  public login(login: string, password: string): Observable<Client>{
    return this.httpClient.post<any>(
      this.clientApiUrl + 'login',
      JSON.stringify(
        {login: login, password: password}
      ),
      this.httpOptions
    ).pipe(
        map((client) => {
          return client;
        })
      );
  }

  public addClient(client: Client) {
    console.log('request post to ' + this.clientApiUrl);
    return this.httpClient.post<Client>(this.clientApiUrl, client);
  }

  public saveClient(client: Observable<Client>) {
    console.log('request put to ' + this.clientApiUrl + 1);
    console.log(client);
    client.pipe(map((c)=> {
      console.log(c);
      return this.httpClient.put<Client>(this.clientApiUrl + c.id, c, this.httpOptions);
    }));
  }
}
