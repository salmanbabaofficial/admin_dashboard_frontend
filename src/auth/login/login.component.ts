import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { environment } from '../../environment';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, FaIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  loginForm: FormGroup;
  loginError: string = '';
  showPassword = signal(false);

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.value;
    if (username === environment.auth.username && password === environment.auth.password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', username);
      Swal.fire({
        icon: 'success',
        title: 'Logged In Successfully.',
        text: 'You are redirecting to dashboard...',
        timer: 2000,
        showConfirmButton: false,
        didClose: () => {
          this.router.navigate(['/dashboard']);
        }
      });
    } else {
      this.loginError = 'Invalid username or password';
    }
  }

  togglePassword() {
    this.showPassword.update((value) => !value);
  }
}