import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  lastname : string = "";
  firstname : string = "";
  title : string = "";
  email : string = "";
  
  login : string = "";
  password : string = "";
  
  street : string = "";
  postcode : string = "";
  city : string = "";
  country : string = "";

  titles : Array<string> = ["Homme", "Femme"];

  valid : boolean = false;
  response : string = "";

  onSubmit(){
    this.valid = true;
    // console.log( this.clientService.addClient(new Client
      // (this.firstname, this.lastname, this.login, this.password)
    // ));
  }
  
  ngOnInit(): void {
    
  }
  
}
