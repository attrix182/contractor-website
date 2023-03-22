import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './pages/landing/components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { MyWorkComponent } from './pages/landing/components/my-work/my-work.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    NavbarComponent,
    SeparatorComponent,
    MyWorkComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
