import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../must-match.validator';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {
  singupForm: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  
  }
  createForm() {
console.log('Whatthemeow');
    this.singupForm = this.fb.group({
        username: [
            '',
            Validators.required
        ],
        fname: [
          '',
          Validators.required
      ],
      
      lname: [
        '',
        Validators.required
    ],
        email: [
            '',
            Validators.compose([
                Validators.required,
                this.validateEmail
            ])
        ],
        password: [
            '',
            Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(12),
            ])
        ],
        confirmpassword: [
            '',
            Validators.compose([
                Validators.required,
            ])
        ],
        gender: [
          '',
          Validators.required
      ],
      dob: [
        '',
        Validators.required
    ],
    phoneno: [
      '',
      Validators.required
  ],
  validator: MustMatch('password', 'confirmPassword')
        // userRole: [
        //     '',
        //     Validators.compose([
        //         Validators.required,
        //     ])
        // ]


    });
}
// Function to validate e-mail is proper format
validateEmail(controls) {
  // Create a regular expression
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  // Test email against regular expression
  if (regExp.test(controls.value)) {
      return null; // Return as valid email
  } else {
      return { 'validateEmail': true } // Return as invalid email
  }}

  signup(){
    const user = {
      email: this.singupForm.get('email').value,
      fname: this.singupForm.get('fname').value,
      lname: this.singupForm.get('lname').value,
      // password: this.singupForm.get('password').value,
      // confirmpassword: this.singupForm.get('confirmpassword').value,
      gender: this.singupForm.get('gender').value,
      dob: this.singupForm.get('dob').value,
      phoneno: this.singupForm.get('phoneno').value,
      // username: this.singupForm.get('username').value,
      // userRole: this.singupForm.get('userRole').value,
  }
  console.log(user);

    this.apiService.signup(user).subscribe((data)=>{       
      console.log(data);           
     this.router.navigate(['/register']);        
  }, 
  (error)=>{
    console.log('error', error);
  });
  }

  ngOnInit() {
    this.createForm();
    // this.signup();
    
  }
  
  // keyPress(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;

  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (event.keyCode != 8 && !pattern.test(inputChar)) {
  //     event.preventDefault();
  //   }
  // }
}
