import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';
import { LoginForm } from '../../main-components/favroite-books/favroite-books.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm = new LoginForm()

  @ViewChild('loginAuthForm') loginAuthForm : NgForm | undefined

  loginCredentials :LoginForm ={
    email: 'user@user.com' ,
    password: '8ed46d8'
  }
  isVisible = false;
  constructor(public router :Router , public storageServie : StorageService , public toastr : ToastrService){

  }


  navigateToBookList(){
    if(this.loginAuthForm?.valid){
      console.log(this.loginForm)
      if( (this.loginForm.email == this.loginCredentials?.email) && (this.loginForm.password == this.loginCredentials?.password)){
        this.router.navigate(["/dashboard"]);
        this.storageServie.store('userDetail',this.loginForm );
        this.toastr.success('login Successfully')
      }else{
        this.toastr.error('Username or password incorrect')
      }
    }
  }


}
