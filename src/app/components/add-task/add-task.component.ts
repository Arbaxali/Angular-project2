import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: string | any;
  day: string | any;
  reminder : boolean = false;
  showAddTask : boolean = false;
  subscription: Subscription | any;

  constructor(private uiService: UiService) { 
    console.log(this.showAddTask)
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }


    this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
