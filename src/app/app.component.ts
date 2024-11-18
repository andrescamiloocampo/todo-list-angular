import { ChangeDetectorRef, Component } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [ TaskComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To do App';

  tasks: {name: string,completed: boolean}[] = [];
  newTask: string = '';

  addTask(){
    
    if(this.newTask.trim()){
      this.tasks.push({name: this.newTask,completed:false});
      this.newTask = '';
    }      

    console.log(this.tasks)
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    console.log(this.tasks)
  }

  clear(){
    this.tasks = this.tasks.filter(task => task.completed === false);    
  }
}
