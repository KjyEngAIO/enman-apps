import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrls: ['./authentication-login.component.css']
})
export class AuthenticationLoginComponent {
  form!: FormGroup
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  isMlMode: boolean = false
  spinner: boolean = false;  
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    public auth: TokenStorageService,
    private router: Router
  ) { }

  get f() {
    return this.form.controls;
  }

  clear = () => {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  };
  
  ngOnInit(): void {
    this.isMlMode = (window.localStorage.getItem('ml-mode') == null) ? false : true
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  authLogin = () => {
    this.spinner = true;
    const username = this.form.value.username
    const password = this.form.value.password

    if (this.auth.getToken()) {
      if (this.isLoggedIn = true) {
        if(this.isMlMode == true){
          this.router.navigate(["/"])
        }else{
          this.router.navigate(["/"])
        }
      }
    }

    this.authService.login(username, password).subscribe({
      next: data => {
        this.auth.saveToken(data);
        this.auth.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.auth.getUser().roles;
        //this.reloadPage();

        if(this.isMlMode == true){
          this.router.navigate(["/"])
        }else{
          this.router.navigate(["/"])
        }

        Swal.fire(
          'Welcome !',
          'Enman Apps login was successful',
          'success'
        )
        this.clear()
      },
      error: err => {
        this.spinner = false;
        Swal.fire(
          'Warning!',
          `${err.error.error}`,
          'warning'
        )
        this.isLoginFailed = true;
      }
    });
  }
}
