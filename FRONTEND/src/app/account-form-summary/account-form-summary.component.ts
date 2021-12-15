import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-form-summary',
  templateUrl: './account-form-summary.component.html',
  styleUrls: ['./account-form-summary.component.css']
})
export class AccountFormSummaryComponent implements OnInit {
  @Input() valid : boolean = false;

  @Input() lastname : string = "";
  @Input() firstname : string = "";
  @Input() title : string = "";
  @Input() email : string = "blibloblu";
  
  @Input() login : string = "";
  @Input() password : string = "";
  
  @Input() street : string = "";
  @Input() postcode : string = "";
  @Input() city : string = "";
  @Input() country : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
