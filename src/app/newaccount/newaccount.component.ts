import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  // keyPress(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;

  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (event.keyCode != 8 && !pattern.test(inputChar)) {
  //     event.preventDefault();
  //   }
  // }
}




// export class NewaccountComponent implements OnInit , AfterViewInit {
//   isFormSubmitted = false; // Can be used to disable submit button until form is valid
//   appointmentForm: FormGroup;
//   constructor(private register: RegisterComponent,
//               private router: Router,
//               private readonly ngxSmartModalService: NgxSmartModalService,
//               private readonly formBuilder: FormBuilder) {

//               }

//   ngAfterViewInit(): void {
//     // Dummy initalize
//     const obj: Object = {
//       // name: 'email...',
//       // promo: 'promo....'
//     };

//     this.ngxSmartModalService.setModalData(obj, 'createAppointmentModal');
//   }
//   initalizeForm(): void {
//   // initalize the form and initalize any fields that are in the form
//     this.appointmentForm = this.formBuilder.group({
//       email: ['', [Validators.required]], // Add more rules in this array validators followed by ','
//       promo: ['', [Validators.required]]
//     });
//   }
//   ngOnInit() {
//     this.initalizeForm();
//   }
// }
