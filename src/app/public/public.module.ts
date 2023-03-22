import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './pages/landing/components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyWorkComponent } from './pages/landing/components/my-work/my-work.component';
import { ContactComponent } from './pages/landing/components/contact/contact.component';


@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    NavbarComponent,
    MyWorkComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
