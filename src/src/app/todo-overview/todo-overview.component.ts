import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; 
import { Istate } from '../store';
import { REMOVE_ALL_TODOS } from '../actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: [ './todo-overview.component.css' ]
})
export class TodoOverviewComponent {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux : NgRedux<Istate>){}

  clearTodos(){
      this.ngRedux.dispatch({type : REMOVE_ALL_TODOS });
  }
}
