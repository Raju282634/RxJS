import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancelObservableComponent } from './components/cancel-observable/cancel-observable.component';
import { OperatorBasicsComponent } from './components/operators/operator-basics/operator-basics.component';
import { PagesComponent } from './components/operators/pages/pages.component';
import { BufferComponent } from './components/operators/transformation/buffers/buffer/buffer.component';
import { BufferCountComponent } from './components/operators/transformation/buffers/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './components/operators/transformation/buffers/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './components/operators/transformation/buffers/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './components/operators/transformation/buffers/buffer-when/buffer-when.component';
import { TakeComponent } from './components/operators/filtering/take/take/take.component';
import { TakeLastComponent } from './components/operators/filtering/take/take-last/take-last.component';
import { TakeUntilComponent } from './components/operators/filtering/take/take-until/take-until.component';
import { TakeWhileComponent } from './components/operators/filtering/take/take-while/take-while.component';
import { SkipComponent } from './components/operators/filtering/skip/skip/skip.component';
import { SkipLastComponent } from './components/operators/filtering/skip/skip-last/skip-last.component';

@NgModule({
  declarations: [
    AppComponent,
    CancelObservableComponent,
    OperatorBasicsComponent,
    PagesComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    TakeComponent,
    TakeLastComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    SkipLastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
