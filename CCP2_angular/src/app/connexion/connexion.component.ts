import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ConnexionService } from '../connexion.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
// export class ConnexionComponent implements OnInit {
//   angForm: FormGroup;

//   constructor(private fb: FormBuilder, private ms: ConnexionService, private router: Router) {
//     this.createForm();
//   }
//   createForm() {
//     this.angForm = this.fb.group({

//       'Pseudo': ['', Validators.required],
//       'Password': ['', Validators.required],
//     });
//   }
//   connexion(Pseudo: any, Password: any) {
//     this.ms.connexion(Pseudo, Password);
//     console.log(this.angForm.controls['Pseudo']);

//     this.router.navigate(['/']);

//   };



//   ngOnInit(): void {
//   }
// }


// vérifie l'état de connexion et enregistre le jeton et les infos utilisateur dans le stockage de session
export class ConnexionComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
// fin du component