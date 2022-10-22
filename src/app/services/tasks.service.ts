import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //Definición de modelo o conexión con la base de datos
  private tasks: string[] = []; //Creación del modelo
  private tasksCompleted: string[] = []; //Creación del modelo
  //Para que el push funcione, debemos inicializar el arreglo


  constructor() {
    // this.tasks.push('Tarea 1'); //Usamos push para agregar nuevos elementos
    // this.tasks.push('Tarea 2');
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.tasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted')) || [];    
    console.log(this.tasks);
    console.log(this.tasksCompleted);
    
  }

  public getTasks(): string[]{
    return this.tasks;
  }
  public getTasksCompleted(): string[]{
    return this.tasksCompleted;
  }

  public addTask(task: string){
    this.tasks.push(task);
    this.updateTask();
  }

  public removeTask(index: number){
    this.tasks.splice(index, 1); //Eliminar elemento de un array splice(index,cuantos elementos a partir del index)
    this.updateTask();
  }
 
  public addCompletedTask(index: number){
    this.tasksCompleted.push(this.tasks[index]);
    this.updateTaskCompleted();
    this.removeTask(index);
  }
  
  public removeTaskCompleted(index: number){
    this.tasksCompleted.splice(index, 1); //Eliminar elemento de un array splice(index,cuantos elementos a partir del index)
    this.updateTaskCompleted();
  }

  private updateTask(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

  private updateTaskCompleted(){
    localStorage.setItem('tasksCompleted',JSON.stringify(this.tasksCompleted));
  }
}
