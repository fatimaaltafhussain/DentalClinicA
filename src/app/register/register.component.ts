import { Component, OnInit } from '@angular/core';
import {SignUpService} from '../sign-up.service';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthMiddlewareGuard} from '../auth-middleware.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signinForm: FormGroup;

  // public currentUser = null;
  // public token =null;
  // public verify;
  // constructor(private signup:SignUpService, private apiService: ApiService, private fb: FormBuilder, private router: Router){
  //    }
  
  ngOnInit() {
  }
}

//   createForm() {
//     console.log('Whatthemeow');
//         this.signinForm = this.fb.group({
//             email: [
//                 '',
//                 Validators.compose([
//                   Validators.required,
//                   this.validateEmail
//               ])
//             ],
//             password: [
//               '',
//               Validators.required
//           ],
//         })
//       }
// validateEmail(controls) {
//           // Create a regular expression
//           const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//           // Test email against regular expression
//           if (regExp.test(controls.value)) {
//               return null; // Return as valid email
//           } else {
//               return { 'validateEmail': true } // Return as invalid email
//           }}

//           signin(){
//             const user = {
//               email: this.signinForm.get('email').value,
//               password: this.signinForm.get('password').value,
//             }
//             console.log('yum',user);
//             this.apiService.signin(user).subscribe(
//               (data)=>{       
//               console.log(data);   
//               this.router.navigate(['/home']);        
//             }, 
//             (error)=>{
//               console.log('error', error);
//             }
            
//             );
//           }
      
//   // model:any = {};


//   // onSubmit(){
//   //  // console.log(JSON.stringify(this.model));
//   //   this.signin().subscribe(response=>{
//   //     this.currentUser = response.data;
//   //     localStorage.setItem('token',response.token);
//   //     this.token = response.token;
//   //     console.log('goto home now');
//   //     this.myrouter.navigate(["home"]);
      
//   //   });}

//     ngOnInit() {
//       this.createForm();
//       // this.signup();
//     }
//   }

