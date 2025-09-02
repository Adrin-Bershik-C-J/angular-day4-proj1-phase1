# Angular Bug Tracker

A modern Angular application for tracking and managing bugs with JWT authentication.

## Features

- **User Authentication**: Secure login with JWT tokens
- **Bug Management**: View and track bug status
- **Responsive Design**: Clean, modern UI with hover effects
- **Real-time Updates**: Dynamic bug status display with color-coded badges
- **Route Protection**: Authenticated routes with interceptors

## Tech Stack

- **Frontend**: Angular 18+ (Standalone Components)
- **Styling**: Custom CSS with modern design patterns
- **Authentication**: JWT tokens with HTTP interceptors
- **Routing**: Angular Router with lazy loading
- **HTTP Client**: Angular HttpClient with RxJS

## Project Structure

```
src/
├── app/
│   ├── interceptors/        # JWT authentication interceptor
│   ├── pages/
│   │   ├── login/          # Login page component
│   │   └── bugs/           # Bug listing page component
│   ├── services/           # Authentication and bug services
│   └── app.routes.ts       # Application routing configuration
├── index.html
├── main.ts
└── styles.css
```

## Prerequisites

- Node.js (v18 or higher)
- Angular CLI
- Backend API running on `http://localhost:8080`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Adrin-Bershik-C-J/angular-day4-proj1-phase1.git
cd angular-day4-proj1-phase1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## API Endpoints

The application expects the following backend endpoints:

- `POST /api/auth` - User authentication
  - Request: `{ username: string, password: string }`
  - Response: `{ jwt: string }`

- `GET /api/bugs/all` - Fetch all bugs (requires authentication)
  - Response: `{ content: Bug[] }`
  - Bug object: `{ id: number, title: string, status: string, assignee: string, project: string }`

## Usage

1. **Login**: Enter your credentials on the login page
2. **View Bugs**: After successful authentication, you'll be redirected to the bugs page
3. **Bug Status**: Each bug displays with a color-coded status badge:
   - 🔴 **Open** - Red badge
   - 🟠 **In Progress** - Orange badge
   - 🟢 **Closed** - Green badge
4. **Logout**: Use the logout button to clear your session

## Key Features

### Authentication Flow
- JWT tokens are automatically stored and attached to requests
- Protected routes redirect to login if not authenticated
- Secure logout clears stored tokens

### Bug Display
- Responsive table layout
- Hover effects for better UX
- Status-based color coding
- Clean, modern design

## Development

### Building for Production
```bash
ng build --prod
```

### Running Tests
```bash
ng test
```

### Code Formatting
The project uses EditorConfig for consistent code formatting.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

---

**Repository**: [angular-day4-proj1-phase1](https://github.com/Adrin-Bershik-C-J/angular-day4-proj1-phase1)
