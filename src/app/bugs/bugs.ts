import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { BugService, Bug } from '../services/bug.service'; // adjust path if needed

@Component({
  selector: 'app-bugs',
  standalone: true,
  imports: [NgFor, NgIf,NgClass],
  templateUrl: './bugs.html',
  styleUrls: ['./bugs.css'], // ✅ should be plural `styleUrls`
})
export class Bugs implements OnInit {
  bugs: Bug[] = [];
  error: string | null = null;

  constructor(private bugService: BugService) {}

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
}
