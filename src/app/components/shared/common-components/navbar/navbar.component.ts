import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router :Router , private storageService : StorageService){

  }
  logOut(){
    this.router.navigate(["/login"]);
    this.storageService.removeItem('userDetail')
    }
}
