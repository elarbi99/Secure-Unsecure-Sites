import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isAuthenticated()) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }

  isAuthenticated(): boolean {
    console.log(localStorage.getItem('JWT'));
    if(localStorage.getItem('JWT')!=null && localStorage.getItem('JWT')!='')
    {
      return true;  
    }
    return false;  
  }
}
