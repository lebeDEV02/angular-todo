import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
inputValue: string = '';
todoTasks: string[] = []
error: string = ""
	logHello(){
		console.log("Hello!")
	}
	onInput(value: string){
		this.inputValue = value
	}
	onClick(){
		if(this.inputValue){
			this.todoTasks.push(this.inputValue)
			this.inputValue = ''
			this.error = ""
		} else{
			this.error = "Your todo cannot be empty =)"
		}
	}
	onSubmit($event: any){
		$event.preventDefault()
	}
	onDeleteEvent(task: string){
		this.todoTasks = this.todoTasks.filter(item => item !== task)
		// console.log(task)
	}
}
