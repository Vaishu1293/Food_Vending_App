import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdminService } from "../services/service/admin.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private adminService: AdminService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.adminService.getToken();

    if (authToken !== undefined) {
      const authRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + authToken)
      });
      console.log("hi");
      return next.handle(authRequest);
    } else {
      console.log("bye")
      return next.handle(req);
    }
  }
}
