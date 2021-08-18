import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  // @Input() userForm: FormGroup;
  // @Input() name;
  // @Input() username;
  // @Input() email;

  @Input() values:string[];
  @Input() control:AbstractControl;
  @Input() fieldId:string;
  @Input() Selected:string;
  @Input() label:string; 

  constructor() { }

  ngOnInit() {
   console.log("values")
   console.log("values22")
   this.Selected
  }
  
}
