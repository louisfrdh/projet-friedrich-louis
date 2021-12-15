import { Component } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent{
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

  onSubmit(){
    this.valid = true;
  }

  constructor() { }
  
}
