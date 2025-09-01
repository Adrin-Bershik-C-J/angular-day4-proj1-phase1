import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BugService, Bug } from '../../services/bug.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bugs',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './bugs.html',
  styleUrls: ['./bugs.css'],
})
export class Bugs implements OnInit {
  bugs: Bug[] = [];
  error: string | null = null;

  constructor(
    private bugService: BugService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bugService.getBugs().subscribe({
      next: (data) => {
        this.bugs = data;
      },
      error: (err) => {
        this.error = err.message || 'Failed to load bugs';
      },
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
