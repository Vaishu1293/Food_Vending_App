import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/service/admin.service';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent implements OnInit {

  otp: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.onValidateOtp(this.otp);
  }

}
