# Expense Tracker

An intuitive Expense Tracker application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This app allows users to track their daily expenses, view detailed spending reports, and manage their financial activities with ease.

## Features
- **Add Expenses:** Easily add expenses with details like amount, category, and date.
- **Expense Categories:** Organize expenses by customizable categories.
- **Responsive Design:** Fully responsive UI for seamless experience across devices.
- **Data Persistence:** All data is stored securely in MongoDB.
- **Real-Time Updates:** Immediate reflection of data changes in the UI.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/NovaK0/expense_tracker.git
    cd expense_tracker
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory.
   - Add the following environment variables:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     ```

5. **Run the application:**

    - **Backend:**
      ```bash
      cd backend
      npm start
      ```

    - **Frontend:**
      ```bash
      cd ../frontend
      npm start
      ```

    - The application will run at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

