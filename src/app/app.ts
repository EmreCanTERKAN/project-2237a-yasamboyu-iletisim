import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-2237a-yasamboyu-iletisim');

  menuOpen = false;
  submitted = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.formData = { name: '', email: '', subject: '', message: '' };
      }, 4000);
    }
  }
}