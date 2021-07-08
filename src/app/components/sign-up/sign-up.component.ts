import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup = new FormGroup({

    "fullName": new FormControl("", Validators.required),
    "userName": new FormControl("", Validators.required),
    "userEmail": new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    "userPhone": new FormControl("", [Validators.required, Validators.pattern("[0-9\-?]{10,12}")]),
    "userAddress": new FormControl("", Validators.required),
    "userSuite": new FormControl(""),
    "userCity": new FormControl("", Validators.required),
    "userZipCode": new FormControl("", Validators.required)
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createAcc() {
    if (this.myForm.valid) {
      const user = {
        name: this.myForm.value.fullname,
        username: this.myForm.value.username,
        email: this.myForm.value.userEmail,
        phone: this.myForm.value.userPhone,
        address: {
          street: this.myForm.value.userAddress,
          suite: this.myForm.value.userSuite,
          city: this.myForm.value.userCity,
          zipcode: this.myForm.value.userZipCode
        }
      }
      this.authService.auth(user).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigateByUrl('main');
      })
    }
  }

}
