import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/service/admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  userEmail: string = '';

  domain: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.onForgotPassword(this.domain, this.userEmail);
  }

}
