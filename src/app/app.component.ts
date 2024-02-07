import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    public auth: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.isAuthRoute()
  }

  isAuthRoute(){
    return (this.auth.isLogged() == false) ? this.router.url === '/' : this.router.url === '/dashboard'
  }
  title = 'enman-apps';
}