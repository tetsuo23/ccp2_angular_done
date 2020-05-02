import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ms: ContactService, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Mail: ['', Validators.required],
      Contact: ['', Validators.required],
    });
  }
  addContact(Name: any, Mail: any, Contact: any) {
    this.ms.addContact(Name, Mail, Contact);
    console.log(this.angForm.controls['Name']);

    this.router.navigate(['/']);

  };



  ngOnInit(): void {
  }
}

