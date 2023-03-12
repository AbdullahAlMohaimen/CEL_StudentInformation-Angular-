import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Information';

  departmentList=['CSE','EEE','CE','ME','TEX','IPE','ARCH','BBA'];
  semesterList=[1.1,1.2,2.1,2.2,3.1,3.2,4.1,4.2];
  genderList=['Male','Female','Others'];
  religionList=['Islam','Hindu','Christian','Buddiist','Others'];

  studentID: string = '';
  studentName: string = '';
  studentDepartment: string = '';
  studentSemester: string = '';
  studentCGPA: string = '';
  studentDOB: string = '';
  studentGender: string = '';
  studentReligion: string = '';
  studentAddress: string = '';
  studentEmail: string = '';
  studentPhoneNo: string = '';

  selectDepartment (event: any) {
    this.studentDepartment = event.target.value;
  }
  selectSemester (event: any) {
    this.studentSemester = event.target.value;
  }
  selectGender (event: any) {
    this.studentGender = event.target.value;
  }
  selectReligion (event: any) {
    this.studentReligion = event.target.value;
  }

  public StudentInformation: any =[
    {studentID:this.studentID, studentName: this.studentName, studentDepartment:this.studentDepartment, 
      studentSemester:this.studentSemester, studentCGPA:this.studentCGPA, studentDOB:this.studentDOB,
      studentGender:this.studentGender, studentReligion:this.studentReligion,
      studentAddress:this.studentAddress, studentEmail:this.studentEmail, studentPhoneNo:this.studentPhoneNo}
  ];

  SaveInformation()
  {
    this.StudentInformation.push({studentID:this.studentID, studentName: this.studentName, studentDepartment:this.studentDepartment, 
            studentSemester:this.studentSemester, studentCGPA:this.studentCGPA, studentDOB:this.studentDOB,
            studentGender:this.studentGender, studentReligion:this.studentReligion,studentAddress:this.studentAddress,
            studentEmail:this.studentEmail, studentPhoneNo:this.studentPhoneNo});
  }
}
