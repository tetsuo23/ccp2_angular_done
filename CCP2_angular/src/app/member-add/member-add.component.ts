import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
// export class MemberAddComponent implements OnInit {
//   angForm: FormGroup;

//   constructor(private fb: FormBuilder, private ms: MemberService, private router: Router) {
//     this.createForm();
//   }
//   createForm() {
//     this.angForm = this.fb.group({
//       'MemberName': ['', Validators.required],
//       'Pseudo': ['', Validators.required],
//       'Password': ['', Validators.required],
//       'MemberAge': ['', Validators.required],
//       'MemberMail': ['', Validators.required]
//     });
//   }
//   addMember(MemberName: any, Pseudo: any, Password: any, MemberAge: any, MemberMail: any) {
//     this.ms.addMember(MemberName, Pseudo, Password, MemberAge, MemberMail);
//     console.log(this.angForm.controls['MemberName']);

//     this.router.navigate(['/']);

//   };



//   ngOnInit(): void {
//   }
// }

// composant qui lie les données du formulaire à la méthode "AuthService.register"
export class MemberAddComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
// fin du composant