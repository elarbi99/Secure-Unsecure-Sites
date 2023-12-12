import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAccount } from 'src/app/model/user/CreateAccount';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  fname:string="";
  lname:string="";
  email:string="";
  phone: string="";
  address:string="";
  city:string="";
  zipCode=null;
  password:string="";
  confirm:string="";
  cnt=0;
empty="*At least one of the fields is empty";
value="";
public account: CreateAccount[] | undefined; 
public account2: CreateAccount = new CreateAccount; 
constructor(
  private formBuilder: FormBuilder,private userService: UserService,
  private router: Router
) {

}
onClickSubmit():void {
  
  console.log("33333333333333");   
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if(this.fname==""||this.lname==""||this.phone==""||this.email==""
    ||this.password==""||this.confirm==""||this.address==""||this.city==""||this.zipCode==null)
  {
    this.value=this.empty;
    return;
  }
  if(this.password.length<16 || !passwordRegex.test(this.password))
  {
    this.value="Password does not meet criteria";
    return;
  }
  for(let i=0; i<this.email.length;i++)
  {
    if(this.email[i]=='@')
    {
      this.cnt++;
    }
  }
  if(this.cnt!=1)
  {
    this.value="Invalid Email";
    return;
  }
  if(this.password!=this.confirm)
  {
    return;
  }
  this.account2.fname=this.fname;
  this.account2.lname=this.lname;
  this.account2.phone=this.phone;
  this.account2.email=this.email.toLowerCase();
  this.account2.address=this.address!;
  this.account2.city=this.city!;
  this.account2.zipCode=this.zipCode!;
  this.account2.password=this.password!;
 
  console.log(this.account2);
  this.userService.signup(this.account2).subscribe(
    (response) => {
      console.log('POST request successful:', response);
      localStorage.setItem("ACCOUNT","Account Created Successfully")
      this.router.navigateByUrl('/dashboard');
      // Handle the response data as needed
    },
    (error) => {
      console.error('Error:', error);
      // Handle errors here
    }
  ); 

}

ngOnInit() {

}
}
