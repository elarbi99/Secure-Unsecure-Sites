import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import { CreateAccount } from 'src/app/model/user/CreateAccount';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    email:string="";
    password:string="";
    value="";
    public account: CreateAccount[] | undefined; 
    public account2: CreateAccount = new CreateAccount; 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        localStorage.setItem("ACCOUNT","");
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onClickSubmit():void {
        this.account2.email=this.email!;
        this.account2.password=this.password!;
        this.userService.login(this.account2).subscribe((response) => {
            if (response.jwtToken) {
              const jwtToken = response.jwtToken;
              localStorage.setItem('JWT', jwtToken);
              localStorage.setItem('EMAIL',this.email);
              this.router.navigateByUrl('/order-dashboard');
            }
            
          })
        this.value="Email or Password is invalid";
        
    }
}
