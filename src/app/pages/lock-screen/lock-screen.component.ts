import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/service/admin.service';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit {

  newPassword: string = '';
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onUnlock(){
    this.adminService.changePassword(this.newPassword, true);
  }
}
