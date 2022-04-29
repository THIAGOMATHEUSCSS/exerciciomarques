import { IconeLixeiraModule } from './../../projects/layout/src/lib/icone-lixeira/icone-lixeira.module';
import { IconeVisualizarModule } from './../../projects/layout/src/lib/icone-visualizar/icone-visualizar.module';
import { IconeEditarModule } from './../../projects/layout/src/lib/icone-editar/icone-editar.module';
import { BotaoAdicionarModule } from './../../projects/layout/src/lib/botao-adicionar/botao-adicionar.module';
import { LayoutModule } from './../../projects/layout/src/lib/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Foo2Component } from './foo2/foo2.component';

@NgModule({
  declarations: [AppComponent,

    Foo2Component],
  imports: [BrowserModule,
    LayoutModule, AppRoutingModule, BotaoAdicionarModule, IconeEditarModule, IconeVisualizarModule, IconeLixeiraModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
