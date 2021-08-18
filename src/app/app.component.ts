import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // userForm : FormGroup;
  // name;
  // username;
  // email;
  values:string[]=["Save Data","Fetch Data","Delete Data"]
  
 constructor(){}
 form: FormGroup = new FormGroup({
  'dropdown':new FormControl(
    this.values,
    Validators.required)
  });


  ngOnInit() {
  //  this.userForm = new FormGroup({
  //    name : new FormControl(),
  //    username:  new FormControl(),
  //    email :  new FormControl()
  //  });
  }

  

}
