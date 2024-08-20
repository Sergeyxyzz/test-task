# About the Project

This project serves as a test assignment for Company N, showcasing various aspects of modern web development using React, Redux, and TypeScript. Below is a detailed description of the project's structure and functionality.

## Project Structure

- **`src/app/index.tsx`**: The entry point of the application, responsible for rendering the main application component and integrating essential providers such as Redux and error boundaries.

- **`src/assets`**: Contains all static assets used throughout the application, such as images, fonts, and other media files.

- **`src/ErrorBoundary`**: Implements error handling for the application. This component catches JavaScript errors anywhere in the application tree, logs those errors, and displays a fallback UI.

- **`src/hooks`**: Houses reusable custom hooks that encapsulate common logic, promoting code reuse and separation of concerns.

- **`src/pages`**: Contains page components used in routing. These components represent different views or pages within the application.

- **`src/shared`**: Includes reusable components and utilities that can be shared across different parts of the application.

- **`src/store`**: Contains the Redux store configuration and slices. Manages the global state of the application and provides actions and reducers for state management.

- **`src/widgets`**: Includes widget components that are used in various parts of the application.

- **`src/widgets/main-page`**: The main page of the application where patient cards are rendered. It serves as the primary view and integrates various widgets and components.

- **`src/widgets/patient-card`**: Displays individual patient cards, featuring essential details about each patient. These cards are a core part of the assignment, showcasing patient information in a visually appealing manner.

## Features

- **Error Handling**: Utilizes an error boundary to gracefully handle and display errors encountered in the application.

- **Custom Hooks**: Leverages reusable hooks for fetching data and managing application state.

- **Redux State Management**: Employs Redux for managing application state, with a well-structured store and slices for various data types.

- **Dynamic Routing**: Uses React Router for navigating between different pages and handling routing logic.

- **Component-Based Architecture**: Organizes code into reusable components and widgets, promoting modularity and maintainability.

- **Theme Support**: The application supports light and dark themes based on the user's device settings. It automatically adapts to the preferred color scheme of the device, providing a consistent and user-friendly experience.

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/Sergeyxyzz/test-task/
cd <repository-folder>
npm install
npm run dev