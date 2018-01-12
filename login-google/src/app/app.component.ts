import { Component } from '@angular/core';
import { AuthenticationService } from './services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authorizationService: AuthenticationService){

  }
  login(){
    this.authorizationService.login()
        .then((data)=>{
          console.log(data);
          alert('Logueado exitosamente');
        })
        .catch((error)=>{
          console.log(error);
          alert('Hubo un error');
        })
  }
}
