import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ArticleModule} from "./pages/article/article.module";
import {NbLayoutModule, NbSearchModule, NbThemeModule, NbToastrModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbAuthModule, NbPasswordAuthStrategy, NbTokenStorage, NbTokenLocalStorage} from '@nebular/auth';
import {AuthModule} from "./pages/auth/auth.module";
import {interceptorProviders} from 'src/app/interceptor'
import {AuthService} from "./service/auth.service";
import {environment} from "../environments/environment";
import {ApiUrl} from "./config/app";


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbToastrModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: environment.url,
          token: {
            key: 'token'
          },
          login: {
            endpoint: ApiUrl.login,
            method: 'post',
            defaultMessages: ['登陆成功'],
            defaultErrors: ['登陆失败'],
          },
          register: {
            endpoint: ApiUrl.register,
            method: 'post',
            defaultMessages: ['注册成功'],
            defaultErrors: ['注册失败']
          }
        }),
      ],
      forms: {},
    }),
    // syncfusion
    // routing
    ArticleModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    interceptorProviders,
    {provide: NbTokenStorage, useClass: NbTokenLocalStorage},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
