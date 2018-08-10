import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { Istate, INITIAL_STATE, rootReducer } from './store';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgReduxModule],
  declarations: [ AppComponent, TodoOverviewComponent, TodoListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  constructor(ngRedux : NgRedux<Istate>){
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
