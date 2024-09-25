import { Component , inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../auth/employee.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  service = inject(EmployeeService)
  router = inject(Router);
  authService = inject(AuthService);

  protected EmployeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })

  onSubmit(){
    if(this.EmployeeForm.valid){
      console.log(this.EmployeeForm.value)
      this.service.addNew(this.EmployeeForm.value);
    }
  }

  public ALL(){
    this.service.getAll();
  }  

  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
