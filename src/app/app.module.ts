import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminPanelLayoutComponent } from './layouts/adminPanel/AdminPanelLayout.component';
import { AdminTheatreLayoutPanelComponent } from './layouts/adminTheatrePanel/adminTheatrePanel.component';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { HeaderComponent } from './core/Header/Header.component';
import { FooterComponent } from './core/Footer/Footer.component';
import { MenuComponent } from './core/Menu/Menu.component';
import { SignInComponent } from './core/SignInPopup/SignIn.component';

import { AdminHeaderComponent } from './core/AdminHeader/AdminHeader.component';
import { AdminSidebarComponent } from './core/AdminSidebar/AdminSidebar.component';
import { AdminTheatreSidebarComponent } from './core/AdminTheatreSidebar/AdminTheatreSidebar.component'; 

import { MenuItems } from './core/Menu/menu-items';
import { AdminMenuItems } from './core/AdminHeader/admin-menu-items';

import { ShowsModule } from './shows/shows.module';
import { TheatresModule } from './theatres/theatres.module';
import { ActorsModule } from './actors/actors.module';
import { DirectorsModule } from './directors/directors.module';
import { RepertoiresModule } from './repertoires/repertoires.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModule } from './authentication/authentication.module';
import { AuthInterceptor } from './helpers/authInterceptor';
import { HttpErrorInterceptor } from './helpers/http-error.interceptor';
import { AlertifyService } from './shared/services/alertify.service';
import { NotFoundComponent } from './notFound/notFound.component';
import { TokenStorageService } from './authentication/tokenStorage.service';
import { ModalModule } from './_modal';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };

export function tokenGetter(){
  return localStorage.getItem("jwt");
}
  

@NgModule({
  declarations: [									
      AppComponent,
      AdminPanelLayoutComponent,
      AdminTheatreLayoutPanelComponent,
      FrontendPanelLayoutComponent,
      AuthLayoutComponent,

      HeaderComponent,
      FooterComponent,
      MenuComponent,
      SignInComponent,

      AdminHeaderComponent,
      AdminSidebarComponent,
      AdminTheatreSidebarComponent,
      ContactComponent,
      AboutComponent,
      PartnershipsComponent,
      NotFoundComponent
   ],
  imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      DropzoneModule,
      RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' }),
      HttpClientModule,
      NgxPaginationModule,
      ShowsModule,
      TheatresModule,
      ActorsModule,
      DirectorsModule,
      RepertoiresModule,
      SharedModule,
      ReactiveFormsModule,
      AuthModule,
      NgxDropzoneModule,
      JwtModule.forRoot({
        config : {
          tokenGetter: tokenGetter,
          allowedDomains: [ 'localhost:44355' ],
          disallowedRoutes: []
        }
      }),
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger'
      }),
      ModalModule
  ],
  providers: [
      MenuItems,
      AlertifyService, 
      AdminMenuItems,
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
        deps: [ AlertifyService, Router, TokenStorageService ]
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
