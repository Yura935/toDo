import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (localStorage.getItem('user')) {
      const CURRENT_USER = JSON.parse(localStorage.getItem('user'));
      if (CURRENT_USER != null) {
        return true;
      }
      else {
        this.router.navigateByUrl('signUp');
        return false;
      }
    }
    else {
      this.router.navigateByUrl('signUp');
      return false;
    }
  }

}
