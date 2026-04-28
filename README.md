# Employee Directory CRUD

A simple full-stack CRUD practice project built with ASP.NET Core Minimal API, EF Core, SQLite, and vanilla JavaScript.

## Project Overview

This project is an employee directory system with basic CRUD features:

- List all employees
- Create a new employee
- Edit employee information
- Delete an employee

The backend is built with ASP.NET Core Minimal API and connects to a SQLite database through EF Core.  
The frontend is built with HTML, CSS, and vanilla JavaScript, using `fetch()` to call the backend API.

## Tech Stack

- ASP.NET Core Minimal API
- Entity Framework Core
- SQLite
- HTML
- CSS
- Vanilla JavaScript
- Fetch API

## Features

- Employee list display
- Add employee form
- Edit existing employee data
- Delete employee data
- Frontend and backend integration through RESTful API
- Static frontend served from the same ASP.NET Core project

## Project Structure

```text
EmployeeAPI/
¢u¢w Data/
¢u¢w Models/
¢u¢w wwwroot/
¢x  ¢u¢w index.html
¢x  ¢u¢w app.js
¢x  ¢|¢w style.css
¢u¢w Program.cs
¢u¢w appsettings.json
¢|¢w employees.db
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| GET | `/employees/{id}` | Get employee by id |
| POST | `/employees` | Create employee |
| PUT | `/employees/{id}` | Update employee |
| DELETE | `/employees/{id}` | Delete employee |

## How to Run

1. Clone this repository
2. Open the project in Visual Studio
3. Restore NuGet packages
4. Make sure the SQLite database and migrations are ready
5. Run the project
6. Open the browser and go to the local URL shown by ASP.NET Core

## Learning Goals

This project was created as a practice project for:

- Understanding ASP.NET Core Minimal API
- Practicing CRUD operations with EF Core and SQLite
- Learning frontend/backend integration with JavaScript fetch
- Building a basic full-stack project structure without MVC views

## Notes

- This project is for learning and portfolio practice
- The frontend is served from `wwwroot`
- SQLite is used as a lightweight local database for development

## Future Improvements

- Search function
- Sorting and filtering
- Form validation improvements
- Better UI/UX
- Deployment to a cloud platform