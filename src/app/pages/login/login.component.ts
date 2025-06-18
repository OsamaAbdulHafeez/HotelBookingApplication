import { Component } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any = {
    "phone":"",
    "password":""
  }

  constructor(private roomSrv: RoomService, private router: Router){}

  onLogin(){
    this.roomSrv.login(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        localStorage.setItem("hoteluser",JSON.stringify(res.data))
        this.router.navigateByUrl('/dashboard')
      }else{
        alert("Check User Credentials")
      }
    },
    error=>{
      
    })
  }
}
