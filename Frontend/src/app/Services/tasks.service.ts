import { inject, Injectable } from '@angular/core';
import { newTask } from '../Interfaces/task';

import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';

const PATH = 'tasks';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
})

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // constructor(private firestore: Firestore) { }

  // addTask(task: newTask){
  //   const taskRef = collection(this.firestore, 'tasks');
  //   return addDoc(taskRef, task)
  // }

  private _firestore = inject(Firestore)

  private _collection = collection(this._firestore, PATH)
}

