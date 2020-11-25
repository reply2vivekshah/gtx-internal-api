import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ApiSharedModule } from 'app/shared/shared.module';
import { ApiCoreModule } from 'app/core/core.module';
import { ApiAppRoutingModule } from './app-routing.module';
import { ApiHomeModule } from './home/home.module';
import { ApiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ApiSharedModule,
    ApiCoreModule,
    ApiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ApiEntityModule,
    ApiAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ApiAppModule {}
