import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(LoginService);
  const currentMenu=route.url[0].path;
  const toastr = inject(ToastrService);
  const token = localStorage.getItem('access_token');
  if(token){
    return true;
  }
  else {
    router.navigate(['/login']);
    toastr.error('Vous devez vous connectez !');
    return false;
  }

};
