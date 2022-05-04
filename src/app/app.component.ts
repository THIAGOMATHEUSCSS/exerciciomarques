import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Fixa de clientes';

  pessoas = [
   {
     "nome" : "Thiago",
     "enereco" : "Rua Mark",
     "email" : "thiagodebarros12@gmail.com"
   },
   {
     "nome" : "Marcos",
     "endereco" : "Rua polo",
     "email" : "thiagodebarros12@gmail.com"
   },
   {
     "nome" : "Cristiano",
     "endereco" : "Rua Muscle",
     "email" : "thiagodebarros12@gmail.com"
   }



  ]
}
