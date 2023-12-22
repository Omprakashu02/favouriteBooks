import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private storage :any;
  storageSetDone: boolean = false;
  constructor(public router: Router, private storageservice  : StorageService, ) {

  }
    setStorage() {
    const rememberMe = localStorage.getItem('rememberMe');
    this.storage = (rememberMe && rememberMe == "true") ? localStorage: sessionStorage;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // Guard for user is login or not
      let user = this.storageservice.retrieve('userDetail');
      if (!user || user === null) {
        this.router.navigate(['/login']);
        return true
      }
      else if (user) {
        if (!Object.keys(user).length) {
          this.router.navigate(['/login']);
          return true
        }
      }
      return true;
    }

  }
