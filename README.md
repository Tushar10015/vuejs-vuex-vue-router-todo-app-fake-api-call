# Vue.js Todo App with Vuex, Vue Router, Ant Design & Tailwind CSS

## Project Description

This is a simple **To-Do List** application built using **Vue.js** with state management through **Vuex**, routing via **Vue Router**, and styled using **Tailwind CSS** and **Ant Design Vue** for UI components. The app allows users to perform **CRUD (Create, Read, Update, Delete)** operations on to-do items, which are fetched from the **JSONPlaceholder API**.

### Features

- **CRUD Operations**:
  - Create new to-do tasks.
  - Edit existing tasks.
  - Mark tasks as completed.
  - Delete tasks.
- **State Management**: The application uses **Vuex** to manage global state, ensuring a seamless experience when adding, editing, and deleting tasks.
- **Routing**: Utilizes **Vue Router** for navigating between the **About Us** and **Contact Us** pages.
- **API Integration**: Fetches data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to simulate real-world API calls for the to-do list.
- **Tailwind CSS**: Custom styling is applied using **Tailwind CSS** for responsive and modern design.
- **Ant Design Vue**: Provides a consistent and clean UI using **Ant Design** components like buttons, modals, forms, and lists.
- **Modular Layout**: The app has a common layout shared across all pages, making use of **Ant Design Layout** components.

### Technologies Used

- **Vue.js 3**: JavaScript framework for building the user interface.
- **Vuex**: State management library for managing the application's state.
- **Vue Router**: Enables routing and navigation between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **Ant Design Vue**: A UI component library for Vue.js, providing easy-to-use and attractive components.
- **JSONPlaceholder API**: Used to mock the backend for CRUD operations.

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vuejs-todo-crud-app.git
cd vuejs-todo-crud-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run serve
```

This will start the development server at `http://localhost:8080`.

### 4. Build for Production

To build the project for production, run:

```bash
npm run build
```

## Project Structure

```
├── src
│   ├── assets
│   ├── components
│   ├── store
│   ├── router
│   ├── views
│   ├── App.vue
│   └── main.js
├── public
├── tailwind.config.js
├── babel.config.js
├── package.json
└── README.md
```

- **`/src/components`**: Contains reusable Vue components like `TodoItem.vue`.
- **`/src/store`**: Vuex store module for managing to-do items and state.
- **`/src/router`**: Vue Router setup, handling navigation between pages like "About Us" and "Contact Us".
- **`/src/views`**: Contains the main views for pages like `Todo.vue`, `AboutUs.vue`, and `ContactUs.vue`.
- **`/tailwind.config.js`**: Configuration file for customizing Tailwind CSS.
- **`main.js`**: Entry point of the application.

## API Endpoints

This project uses the **JSONPlaceholder** API for simulating to-do CRUD operations.

- **Get All Todos**: `GET /todos`
- **Create Todo**: `POST /todos`
- **Edit Todo**: `PUT /todos/{id}`
- **Delete Todo**: `DELETE /todos/{id}`

## Additional Pages

- **About Us**: A simple page to display information about the project.
- **Contact Us**: A contact page for users to get in touch.
