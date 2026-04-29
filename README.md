📌 Project Overview
This is a component-based React application designed to manage and track student academic performance. Built as part of the **Web Dev II (Advanced JS & React)** course, this project demonstrates state management, prop drilling, and conditional rendering.

## 🚀 Features
* **Dynamic Data Management**: View a real-time list of student names and marks.
* **Interactive Updates**: Edit student scores directly within the table; the pass/fail status updates instantly.
* **Student Registration**: Add new student records via a validated form.
* **Conditional UI Logic**: 
    * `Pass` status (Score ≥ 40) is highlighted in **Green**.
    * `Fail` status (Score < 40) is highlighted in **Red**.
* **Responsive Design**: Built with pure CSS for a clean, modern aesthetic.

## 🛠️ Tech Stack
* **Frontend**: React.js (Functional Components & Hooks)
* **Build Tool**: Vite
* **Styling**: Pure CSS (Standard CSS3)
* **State Management**: `useState` hook

## 📂 Component Structure
The application follows a modular architecture for better reusability:
- **Header**: Displays the application title and assignment metadata.
- **AddStudentForm**: Handles user input for new student entries.
- **StudentTable**: Manages the layout for the student data grid.
- **StudentRow**: A reusable child component that handles individual student logic and status styling.



