import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-kolleg-klasse',
  templateUrl: './kolleg-klasse.component.html',
  styleUrls: ['./kolleg-klasse.component.css']
})
export class KollegKlasseComponent implements OnInit {

  students : Student[];
  
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
    
  }

  getStudents(): void {    
    this.studentService.getStudents().subscribe(students => this.students = students);
  }
}
