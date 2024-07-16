import { Component, Inject } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';

import { ChangeDetectionStrategy, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CdkAccordionModule } from '@angular/cdk/accordion';


// BOARD
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CdkDropList, CdkDrag, FormsModule, NgFor,
    CdkAccordionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent {

  // ARRAY QUE CONTIENE LOS TASKS
  addedTask: any;
  tasksArray: any = [];
  progress: any = [];
  done: any = [];

  ngOnInit(): void {
    this.tasksArray.resetForm();
  }

  // FUNCTION PARA AñADIR TASK
  add() {
    this.tasksArray.push(this.addedTask)
  }
  // FUNCIONES PARA ELIMINAR TASK
  deleteFromTodo(index: number) {
    this.tasksArray.splice(index, 1)
    console.log("Deleted from Todo");
  }
  deleteFromProgress(index: number){
    this.progress.splice(index, 1)
  }
  deleteFromDone(index: number){
    this.done.splice(index, 1)
  }

  // FUNCION DRAG AND DROP
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex,);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
