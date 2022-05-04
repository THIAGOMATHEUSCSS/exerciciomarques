import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fixa de clientes';

  pessoas = [
   {
     "nome" : "Thiago",

     "email" : "thiagodebarros12@gmail.com"
   },
   {
     "nome" : "Marcos",

     "email" : "thiagodebarros12@gmail.com"
   },
   {
     "nome" : "Cristiano",

     "email" : "thiagodebarros12@gmail.com"
   }



  ]
}
