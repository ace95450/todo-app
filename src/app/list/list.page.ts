import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task';
import * as _ from 'lodash';
import {TaskStorageService} from '../services/task-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  /*Générer une progress-bar Auto*/

  avancement(){

  };

  /*Création d'une tâche*/
  task: Task = new Task();

  /*Création d'une date*/
  date: Date = new Date();

  /*Liste de tâches*/
  tasks: Task[] = [];

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  /*La fonction saveTask()
  * permet de déclencher une nouvelle tache*/
  saveTask() {
    if (undefined !== this.task.title) {
      this.task.id = Date.now();
      this.tasks.push(this.task);
      this.taskStorage.saveTasks(this.tasks);
      this.saveOUrTasks();
      this.task = new Task();
    }
  }

  /*Déclenche l'enregistrement lors de la pression sur "Enter"*/
  enterSave(code: string) {
    if (code === 'Enter') {
      this.saveTask();
    }
  }

  /* Progress-bar */
  countTrue(){
    let i=0;
    let j=0;
    while( i < this.tasks.length)
    {
      if( this.tasks[i].status === true )
      { j++;       }
      i++;    }
      return j / this.tasks.length;
  }

  constructor(private taskStorage: TaskStorageService){
    this.taskStorage.getTasks().then(tasks => {
      if ( null !== tasks){
        this.tasks = tasks;
      }
    });
  }

  /*Sauvegarde*/
  saveOUrTasks(){
    this.taskStorage.saveTasks(this.tasks);
  }

  /*Suppression*/
  deleteTask(task: Task){
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.saveOUrTasks();
  }


}
