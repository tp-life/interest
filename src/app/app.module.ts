import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ArticleModule} from "./article/article.module";
import {NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {AuthModule} from "./auth/auth.module";
import { NbSearchModule } from "@nebular/theme";
import { EditorDirective } from '../directive/editor.directive';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
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
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://127.0.0.1:8080',
          login: {
            endpoint: '/login',
            method: 'post',
            defaultMessages: ['登陆成功'],
            defaultErrors: ['登陆失败']
          },
          register: {
            endpoint: '/register',
            method: 'post',
            defaultMessages: ['注册成功'],
            defaultErrors: ['注册失败']
          }
        }),
      ],
      forms: {},
    }),
    ArticleModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
