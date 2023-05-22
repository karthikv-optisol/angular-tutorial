import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('mor_2314', [Validators.required]),
    password: new FormControl('83r5^_', [Validators.required])
  })

  constructor(private loginService: LoginService,private route:Router) {

  }

  ngOnInit(): void {

  }



  handleSubmit(event: any) {

    let data = {
      username:this.loginForm.controls.username.value,
      password:this.loginForm.controls.password.value
    }

    this.loginService.login('login',data)
    .subscribe((res:any)=>{
      // console.log('results',res);
      if(res.token)
      {
        localStorage.setItem("token",res.token);
        Swal.fire({
          title: 'You are successfully loggedIn!',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'OK',
          // denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.route.navigate(['/']);
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
    },
    (error:any)=>{
      // console.log("error",error.status);
      Swal.fire(
        error.error,
        "Status "+error.status+" received",
        'question'
      )
    }
    )
    
  }

  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
}


