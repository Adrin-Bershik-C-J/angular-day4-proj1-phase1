import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

export interface Bug {
  id: number;
  title: string;
  status: string;
  assignee: string;
  project: string;
}

@Injectable({ providedIn: 'root' })
export class BugService {
  private apiUrl = 'http://localhost:8080/api/bugs/all';

  constructor(private http: HttpClient) {}

  getBugs(): Observable<Bug[]> {
    return this.http.get<{ content: Bug[] }>(this.apiUrl).pipe(
      map((response) => response.content), // ✅ unwrap the content
      catchError((err) => {
        console.error('Error fetching bugs:', err);
        return throwError(() => new Error('Failed to load bugs'));
      })
    );
  }
}
