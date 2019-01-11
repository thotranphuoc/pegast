import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { PdfViewerComponent } from 'ng2-pdf-viewer'; 

// import firebase from 'firebase/app';
import { firebaseConfig } from '../config/firebase.config';
import * as firebase from 'firebase';
// import { HotdealSliderComponent } from './components/hotdeal-slider/hotdeal-slider.component';
import { CustomComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// for material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent
    //  PdfViewerComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // PdfViewerModule,
    // PdfViewerComponent
    CustomComponentsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
