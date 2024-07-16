import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { newTask } from '../../Interfaces/task'

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

import { ChangeDetectionStrategy, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
  todo: string;
  name: string;
}

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CdkDropList, CdkDrag,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, NgFor
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})

export class BoardComponent {

  addedTask: any;
  tasksArray: any = [];
  progress: any = [];
  done: any = [];

  add(){
    this.tasksArray.push(this.addedTask)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // BUTTON
//   readonly todo = signal('');
//   readonly name = model('');
//   readonly dialog = inject(MatDialog);

//   openDialog(): void {
//     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       data: { name: this.name(), todo: this.todo() },
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       if (result !== undefined) {
//         this.todo.set(result);
//       }
//     });
//   }


// }

// POP UP
// @Component({
//   selector: 'dialog',
//   templateUrl: './dialog.component.html',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
// })
// export class DialogOverviewExampleDialog {

//   readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
//   readonly data = inject<DialogData>(MAT_DIALOG_DATA);
//   readonly todo = model(this.data.todo);

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

  
}

