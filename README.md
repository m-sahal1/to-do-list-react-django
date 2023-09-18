# to-do-app has two directories
- todo (react frontend)
- todo backend(django backend)

## React Todo App

This repository contains a simple React-based Todo App that allows you to create, update, and delete tasks. It's a great way to manage your daily tasks and stay organized.

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone this repository to your local machine using:

```bash
git clone https://github.com/your-username/todo.git
```

2. Navigate to the project directory:

```bash
cd to-do-app/todo
```
3. Install the project dependencies:
```bash
npm install
```
4. Running the App
Once you've installed the dependencies, you can start the development server.
```bash
npm start
```

The app should now be running at http://localhost:3000/. You can open this URL in your web browser to use the Todo App.

Usage
- To add a new task, enter the task description in the input field and press the "Add Task" button.
- To mark a task as completed, click the checkbox next to the task.
- To edit a task, click the "Edit" button next to the task, make your changes, and press the "Save" button.
- To delete a task, click the "Delete" button next to the task.

# Todo Backend - Django Project

This is the backend part of a Todo App built using Django. It provides the necessary API endpoints to manage tasks and interact with the frontend.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.x installed on your machine.
- [Virtualenv](https://virtualenv.pypa.io/en/latest/) for creating a virtual environment (optional but recommended).

### Installation

1. **Clone the Repository**: Open your terminal and run the following command to clone the project to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-backend.git
   ```
2. Navigate to the Project Directory: Change your current directory to the project directory:

```bash
cd to-do-list/todo-backend
```
3. Create a Virtual Environment (Optional): It's a good practice to create a virtual environment to isolate project dependencies. Run the following commands to create and activate a virtual environment:

```bash
virtualenv venv
source venv/bin/activate
```
If you're not using virtualenv, you can skip this step.

4. Install Dependencies: Install the project dependencies using pip:

```bash
pip install -r requirements.txt
```
Database Setup: Configure your database settings in todo/settings.py. By default, this project is set up to use SQLite.

5. Migrate the Database: Run the following commands to apply database migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```
6. Create a Superuser (Admin User): Create an admin user to access the Django admin panel and manage tasks:

```bash
python manage.py createsuperuser
```

7. Running the Server
Now, you can start the Django development server:

```bash
python manage.py runserver
```
The server should now be running at http://localhost:8000/.
