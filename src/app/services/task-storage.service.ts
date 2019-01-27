import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Task} from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor(private storage: Storage) { }

  /*Permet de sauvegarder les tâches*/
  saveTasks(tasks: Task[]): void {
    this.storage.set('tasks', tasks);
    }

   /*Permet de récupérer les tâches sauvegarder*/
  getTasks(): Promise<Task[]> {
    return this.storage.get('tasks');
  }

    saveNew() {

    }

  getNews() {

  }
}
