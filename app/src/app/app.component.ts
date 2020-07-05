import { Component,OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,FormArray, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
  
  submitform=false;
  login:FormGroup;
  
data;
adddata=[];
  constructor(private log:FormBuilder)
  { this.ngOnInit(); }
  ngOnInit()
  {
    this.login=this.log.group({
      name:this.log.control("",Validators.required),
      email:this.log.control("",[Validators.email,Validators.required]),
      dob:this.log.control("",Validators.required),
      country:this.log.control("",Validators.required),
      gender:this.log.control(""),
      status:this.log.control(""),
      street:this.log.control("",Validators.required),
      door:this.log.control("",Validators.required),
      pin:this.log.control("",[Validators.required,Validators.maxLength(6),Validators.minLength(6)])
    })
  }
  
getdata()
{
  return this.login.controls;
  //console.log(this.login.value);
}
  onSubmit()
  {
    this.submitform=true;
    this.data=this.login.value;
    this.adddata.push(this.data);
    }

}
