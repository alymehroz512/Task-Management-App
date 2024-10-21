# Project-18 Task Management Application

# Overview

This project is a Task Management Application developed using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**. It allows users to create, update, delete, and manage tasks efficiently. With added functionalities like task categorization, recurrence, and status tracking, this project provides a comprehensive solution for task management. Users can attach links to tasks and get reminders about task deadlines. The application also includes an Analytics Dashboard to visualize task progress and completion rates, with insights into task distribution across categories.

# Key Functionalities

# Task Creation and Management:
   - Users can add tasks with essential details like task name, description, priority, deadline, category, and recurrence.
   - Tasks are displayed in the "Your Tasks" section, and users can update or delete tasks directly from this list.

# Task Categorization:
   - Users can categorize tasks into groups such as **Work**, **Personal**, **Urgent**, and others.
   - The application allows easy categorization of tasks, which helps in filtering and organizing tasks better.

# Task Recurrence:
   - Users can set tasks to repeat on a daily, weekly, or monthly basis.
   - Recurrence options make it easier to manage routine tasks that occur frequently.

# Task Status Management:
   - Each task has a status that can be set to **In Progress** or **Completed**.
   - Users can toggle the status with a single button click, marking tasks as either active or done.

# Task Subtasks:
   - For complex tasks, users can add subtasks under each main task.
   - This feature helps break down larger tasks into manageable units and keep track of smaller goals within a task.

# Recurring Tasks:
   - Tasks can be set to repeat on a schedule (daily, weekly, or monthly).
   - Users can manage recurring tasks effectively without needing to recreate tasks for repeated events.

# Due Date Reminders:
   - The application sends reminders for upcoming task deadlines.
   - Users are alerted about tasks that are approaching their due date, helping them stay on top of deadlines.
   - If a task is marked as completed, the background color changes to indicate the task’s completion.

# File Attachments and Links:
   - Users can attach **links** to each task, which open in a new window when clicked.
   - Attachments allow users to reference related web resources or documents that are relevant to the task.

# Task Reports:
   - A report feature allows users to generate reports on tasks added, updated, and deleted.
   - Users can view the reports in the task reports section and download them in PDF format.

# Analytics Dashboard:
   - A dynamic dashboard provides insights into the total number of tasks, tasks completed, tasks in progress, and the overall completion rate.
   - The application also includes a **Pie Chart** visualization of tasks by category, giving users a quick overview of their task distribution.
   - The chart is interactive and responsive, updating whenever tasks are added, modified, or deleted.

# Local Storage Integration:
   - All tasks, updates, and changes are stored locally in the browser's local storage, ensuring that users’ data is persisted even after the page is refreshed.
   - The application retrieves stored tasks on page load, maintaining a consistent user experience.

# Technologies Used:
- HTML for structure
- CSS and Bootstrap for responsive styling and layout
- JavaScript for dynamic interactions, task management logic, and chart rendering
- Chart.js for generating the pie chart in the Analytics Dashboard
- LocalStorage API for persisting task data across sessions

# Future Improvements:
- File Attachments: Add the functionality for attaching files (images, documents, etc.) to tasks, in addition to the current link attachment feature.
- Advanced Filtering and Search: Introduce advanced filtering and search functionality to help users find tasks based on specific criteria, such as category or priority.

This application is a complete solution for task management, offering both basic and advanced features to help users stay organized and efficient in managing their daily tasks.
