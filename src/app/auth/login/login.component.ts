import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  domain: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onSignin(){
    this.adminService.login(this.domain,this.email, this.password);
  }

}
