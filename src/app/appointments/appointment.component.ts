import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit , AfterViewInit {
  isFormSubmitted = false; // Can be used to disable submit button until form is valid
  appointmentForm: FormGroup;
  constructor(private register: RegisterComponent,
              private router: Router,
              private readonly ngxSmartModalService: NgxSmartModalService,
              private readonly formBuilder: FormBuilder) {

              }

  ngAfterViewInit(): void {
    // Dummy initalize
    const obj: Object = {
      // name: 'email...',
      // promo: 'promo....'
    };

    this.ngxSmartModalService.setModalData(obj, 'createAppointmentModal');
  }
  initalizeForm(): void {
  // initalize the form and initalize any fields that are in the form
    this.appointmentForm = this.formBuilder.group({
      email: ['', [Validators.required]], // Add more rules in this array validators followed by ','
      promo: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.initalizeForm();
  }
}
