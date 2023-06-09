import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Admin } from '../models/admin.model';

const BACKEND_URL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  // Variables

  private isAuthenticated = false;

  //tokens related

  public token: any;
  public tokenExpiryDate: any;
  private tokenTimer: any;

  //User Related

  private user: any;

  userDomain: any;
  // Subjects
  private authStatusListener = new Subject<boolean>();
  private userInfoUpdated = new Subject<Admin>();
  private profilePicUpdated = new Subject<any>();
  private userSelected = new Subject<Admin>();
  getUserDomain = new Subject<{ userDomain: any }>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // Observables

  getAuthStatusListner() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    const user = localStorage.getItem('user');

    if (user) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    return this.isAuthenticated;
  }

  getDomain() {
    const userDomain = localStorage.getItem('userDomain');

    if (userDomain) {
      try {
        return JSON.parse(userDomain);
      } catch (error) {
        console.error('Error parsing user domain JSON:', error);
      }
    }

    return null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    const user = localStorage.getItem('user');

    if (user) {
      try {
        return JSON.parse(user);
      } catch (error) {
        console.error('Error parsing user JSON:', error);
      }
    }

    return null;
  }

  // Registration Routes

  //--1)------Register-------

  createAdmin(admin: Admin) {
    this.http
      .post<{ msg: string; user: Admin }>(
        BACKEND_URL + 'api/user/register',
        admin
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.user = response.user;
          if (this.user) {
            window.alert(response.msg);
            this.router.navigate(['page-login']);
          }
        },
        (error) => {
          if (error.status == 400) {
            //console.log(error);
            window.alert(error.error.msg);
            this.router.navigate(['page-error-404']);
          } else {
            console.log(error.status);
            //window.location.reload();
          }
        }
      );
  }

  //-2)-----------Login------------

  login(domain: any, email: string, password: string) {
    const authData = {
      domain: domain,
      email: email,
      password: password,
    };
    this.http
      .post<{ user: any; domain: any; token: string; expiresIn: number }>(
        BACKEND_URL + 'api/user/login',
        authData
      )
      .subscribe(
        (response) => {
          //console.log(response);
          const token = response.token;
          this.token = token;
          this.user = response.user;
          this.userDomain = response.domain;

          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.getUserDomain.next({ userDomain: this.userDomain });
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.tokenExpiryDate = expirationDate;
            this.clearAuthData();
            this.saveAuthData(
              token,
              expirationDate,
              response.user,
              this.userDomain
            );
            if (response.user.userUpdatedPassword == true) {
              this.router.navigate(['']);
            } else {
              this.router.navigate(['/page-lock-screen']);
            }
          }
        },
        (error) => {
          console.log(error);
          this.router.navigate(['/page-register']);
        }
      );
  }

  //3)---------------Logout all--------------------------------------------

  // logout() {
  //   this.http.post(BACKEND_URL + "admin/logout", this.token).subscribe(response => {
  //     this.token = null;
  //     this.isAuthenticated = false;
  //     this.authStatusListener.next(false);
  //     clearTimeout(this.tokenTimer);
  //     this.clearAuthData();
  //     this.router.navigate(['/login']);
  //   }, error => {
  //       this.onLogoutall();
  //       this.router.navigate(['/login']);
  //   });
  // }

  onLogoutall() {
    this.http
      .post(BACKEND_URL + 'api/user/logoutAll', this.token)
      .subscribe((response) => {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/admin/ecom-product-list']);
      });
  }

  //-----------------------------------------------FORGOT PASSWORD------------------------------------------------------------

  onForgotPassword(domain: any, email: string) {
    const userEmail = {
      domain: domain,
      email: email,
    };

    localStorage.setItem('tempDomain', userEmail.domain);
    localStorage.setItem('tempEmail', userEmail.email);

    this.http
      .post<{ message: string; otp: number }>(
        BACKEND_URL + 'api/user/forgot-password',
        userEmail
      )
      .subscribe(
        (res) => {
          //console.log(res.msg);
          //console.log(res.otp);
          this.router.navigate(['/page-validate-otp']);
        },
        (error) => {
          //console.log(error.error.msg);
          this.router.navigate(['/page-register']);
        }
      );
  }

  onValidateOtp(otp: number) {
    const domain = localStorage.getItem('tempDomain');
    const email = localStorage.getItem('tempEmail');
    const userOtp = {
      domain: domain,
      email: email,
      otp: otp,
    };

    this.http
      .post<{ message: string; password: string }>(
        BACKEND_URL + 'api/user/validate-otp',
        userOtp
      )
      .subscribe(
        (res) => {
          //console.log(res.msg);
          //console.log(res.password);
          localStorage.removeItem('tempDomain');
          localStorage.removeItem('tempEmail');
          this.router.navigate(['page-login']);
        },
        (error) => {
          //console.log(error.error.msg);
          this.router.navigate(['page-error-500']);
        }
      );
  }

  changePassword(password: string, userUpdatedPassword: boolean) {
    let userData = {
      confirmpassword: password,
      userUpdatedPassword: userUpdatedPassword
    };
    this.http.patch<{ user: any, token: any, expiresIn: any }>(BACKEND_URL + "api/user/users/me", userData).pipe(map(response => {
      return {
        user: {
          domain: response.user.domain,
          name: response.user.name,
          email: response.user.email,
          confirmpassword: response.user.confirmpassword,
          phone: response.user.phone,
          address: response.user.address,
          city: response.user.city,
          state: response.user.state,
          country: response.user.country,
          avatar: response.user.avatar,
          userUpdatedPassword: response.user.userUpdatedPassword
        },

        token: response.token,
        expiresIn: response.expiresIn
      };
    })).subscribe(res => {
      let updatedUser = res
      const now = new Date();
      let expiresIn = new Date(now.getTime() + updatedUser.expiresIn * 1000);

      this.saveAuthData(updatedUser.token, expiresIn, updatedUser.user, updatedUser.user.domain);
      this.userInfoUpdated.next(updatedUser.user);
      this.router.navigate(['/admin/ecom-product-list']);
    }, error => {
      //console.log(error);
        window.location.reload();
    });
  }


  //-------------------------------------------------------------LOCAL STORAGE-------------------------------------------------

  // Local Storage Settings Routes

  private setAuthTimer(duration: number) {
    //console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      //this.logout();
    }, duration * 1000);
  }

  private saveAuthData(
    token: string,
    expirationDate: Date,
    user: any,
    domain: any
  ) {
    //console.log(expirationDate);
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userDomain', domain);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('user');
    localStorage.removeItem('userDomain');
    localStorage.removeItem('Cart');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const user = localStorage.getItem('user');
    const userDomain = localStorage.getItem('userDomain');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      user: user,
      userDomain: userDomain,
    };
  }
}
