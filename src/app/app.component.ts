import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoproject';
  public token : any;
  public username:string = ""
  public password:string = ""
 
        constructor(private authService:AuthService) {
          
        }
        // Login(){
        //   this.authService.Authentication(this.username,this.password).subscribe(
        //     (data)=>{
             
        //      if(data!= null){
        //        // retreive the access token from the server
        //     // console.log(data["token"])
        //      // store the token in the localStorage
              
        //     //  this.token = data.token;
        //      localStorage.setItem("access-token",this.token)
            
        //      }else{
        //        console.log("check your credentials !!")
        //      }
        //     }
        //   )
        // }
        // DisplayList(){
        //   this.authService.GetAllProducts().subscribe(
        //     (data)=>{
        //        // display list in the console 
        //           console.log(data)
        //     }
        //   )
        // }
}
