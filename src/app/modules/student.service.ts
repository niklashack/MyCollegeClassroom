import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../shared/message.service';

import { STUDENTS } from '../classes/mock-Student';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('StudentService: fetched student');
    return of(STUDENTS);
  }

  getStudent(id: number): Observable<Student> {
    // TODO: send the message _after_ fetching the student
    this.messageService.add('StudentService: fetched student id=${id}');
    return of(STUDENTS.find(student => student.id === id));
  }

  addStudent()
  {
    let id = STUDENTS.length;
    STUDENTS.push({id: id, name: "new Student"});
    console.log(id);
    return id;
  }
}
