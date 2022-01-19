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

  constructor(private httpClient: HttpClient) { }


  public login(login: string, password: string): Observable<Client>{
    console.log('request put to ' + this.clientApiUrl + 'login');
    return this.httpClient.post<Client>(
      this.clientApiUrl + 'login',
      // data
      // {'login': login, 'password': password}
      JSON.stringify(
        {'login': login, 'password': password}
      )
    ).pipe(
        map((client) => {
          console.log(client);
          return client;
        })
      );
    
  }

  public addClient(client: Client) {
    console.log('request post to ' + this.clientApiUrl);
    return this.httpClient.post<Client>(this.clientApiUrl, client);
  }

  public saveClient(client: Observable<Client>) {
    let id = client.pipe(map(client => client.id));
    console.log('request put to ' + this.clientApiUrl + id);
    return this.httpClient.put<Client>(this.clientApiUrl + id, client);
  }
}
