import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/service/admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.adminService.createAdmin({
      "domain":form.value.domain,
      "name":form.value.name,
      "email":form.value.email,
      "confirmpassword":form.value.password,
      "userUpdatedPassword": true,
      "phone":form.value.phone}
    );
  }

}
