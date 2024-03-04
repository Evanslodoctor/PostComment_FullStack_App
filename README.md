# PostComment_FullStack_App

PostComment_FullStack_App is a full-stack web application that allows users to post messages and comment on them. The application is built using Node.js, Express.js, React, and MySQL database.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview

The project provides a platform for users to post messages and engage in discussions through comments. It leverages a full-stack architecture with Node.js and Express.js for the backend, React for the frontend, and MySQL for the database.

## Features

- **Post Messages:** Users can create and post messages.
- **Commenting:** Users can comment on existing posts.
- **Interactive Interface:** The application provides an interactive and user-friendly interface for a seamless experience.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/evanslodoctor/PostComment_FullStack_App.git
   cd PostComment_FullStack_App
2. **Install Dependencies:**

```
npm install
```
3. **Set Up the Database:**

- Create a MySQL database and update the configuration in .env based on .env.example.
4. **Run database migrations:**
```
npx sequelize-cli db:migrate
```
4. **Start the Server:**

```
npm start
```
5. **Start the Frontend:**

```
cd client

npm start

```
## Usage
Access the application at http://localhost:3001 (or as configured) in your web browser. You can create posts, comment on posts, and interact with the platform.

## Dependencies
### Backend:

***Nodejs:*** JavaScript runtime for server-side development.
***Expressjs:*** Web application framework for Node.js, simplifying server-side logic.
***Sequelize*** (with sequelize-cli): An ORM (Object-Relational Mapping) tool for interacting with databases.
***mysql2:*** MySQL database driver for Node.js.
***cors:*** Middleware for handling Cross-Origin Resource Sharing.
***nodemon*** (for development): A utility that monitors changes and automatically restarts the server during development.
### Frontend:

***React:*** JavaScript library for building user interfaces.
***axios:*** HTTP client for making API requests.
***react-router-dom:*** Routing library for React applications.
### Contributing
Feel free to contribute to this project. Follow these steps:

### Fork the repository.
### Create a new branch: git checkout -b feature-name.
### Make your changes and commit them: git commit -m 'Add some feature'.
### Push to the branch: git push origin feature-name.
### Submit a pull request.
## License
This project is licensed under the MIT License.
