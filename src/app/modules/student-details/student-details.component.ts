import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from '../../classes/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public student: Student;

  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location,
    private router: Router) { }
    
    ngOnInit(): void {
      this.getStudent();
    }
    
    getStudent(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.studentService.getStudent(id)
        .subscribe(student => this.student = student);
    }

    goBack(): void {
      this.location.back();
    }  
}
