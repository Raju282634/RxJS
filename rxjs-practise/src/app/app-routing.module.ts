import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkipLastComponent } from './components/operators/filtering/skip/skip-last/skip-last.component';
import { SkipComponent } from './components/operators/filtering/skip/skip/skip.component';
import { TakeLastComponent } from './components/operators/filtering/take/take-last/take-last.component';
import { TakeUntilComponent } from './components/operators/filtering/take/take-until/take-until.component';
import { TakeWhileComponent } from './components/operators/filtering/take/take-while/take-while.component';
import { TakeComponent } from './components/operators/filtering/take/take/take.component';
import { OperatorBasicsComponent } from './components/operators/operator-basics/operator-basics.component';
import { BufferCountComponent } from './components/operators/transformation/buffers/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './components/operators/transformation/buffers/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './components/operators/transformation/buffers/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './components/operators/transformation/buffers/buffer-when/buffer-when.component';
import { BufferComponent } from './components/operators/transformation/buffers/buffer/buffer.component';


const routes: Routes = [
  { path: 'operators',
    component: OperatorBasicsComponent,
    children: [{path: 'buffer', component: BufferComponent},
               {path: 'buffer-count', component: BufferCountComponent},
               {path: 'buffer-time', component: BufferTimeComponent},
               {path: 'buffer-toggle', component: BufferToggleComponent},
               {path: 'buffer-when', component: BufferWhenComponent},
               {path: 'take', component: TakeComponent},
               {path: 'take-last', component: TakeLastComponent},
               {path: 'take-until', component: TakeUntilComponent},
               {path: 'take-while', component: TakeWhileComponent},
               {path: 'skip', component: SkipComponent},
               {path: 'skip-last', component: SkipLastComponent},
               {path: 'skip-until', component: SkipUntilComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
