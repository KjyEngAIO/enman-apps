import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(
    public auth: TokenStorageService,
    private router: Router
  ) { }

  refresh = () => {
    window.location.reload();
  }
  
  histories = () => {
    this.router.navigate(["/histories-login"])
  }
  
  modalSignOut = () => {
    Swal.fire({
      title: 'Are you sure you want to exit?',
      text: 'Be patient please!',
      icon: 'warning',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      cancelButtonText: 'No',
      preConfirm: () => {
        this.authLogout();
      }
    });
  }

  authLogout = () => {
    this.auth.signOut();
      this.router.navigate(["/"])
  }
}
