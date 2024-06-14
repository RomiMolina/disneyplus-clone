# **Disney+ Clone with React JS (Firebase + Styled Components + Redux)**

## **Description**

This is a **ReactJS Disney Plus Clone** application that replicates the user interface and some of the functionalities of Disney+. It utilizes **Firebase** for backend services, **Styled Components** for styling, and **Redux** for state management.

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## **Features**

- **User Authentication with Firebase** (Google Sign-In)
- **Responsive UI** for both desktop and mobile
- **View movie details**
- **Dynamic content fetching and display**
- **State management with Redux**
- **Real-time database with Firebase Firestore**

## **Technologies Used**

- **React JS**: A JavaScript library for building user interfaces
- **Firebase**: Backend-as-a-Service (BaaS) for database, authentication, and hosting
- **Styled Components**: CSS-in-JS library for component-level styling
- **Redux**: A predictable state container for JavaScript apps
- **React Router**: Declarative routing for React applications

## **Getting Started**

### **Prerequisites**

- **Node.js** (version 14 or above)
- **npm** or **yarn**

### **Installation**

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/disney-plus-clone.git
    cd disney-plus-clone
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Create a `.env` file in the root directory and add your Firebase configuration**
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

4. **Start the development server**
    ```bash
    npm start
    # or
    yarn start
    ```

5. **Open your browser and navigate to** `http://localhost:3000`

## **Project Structure**

```css
disney-plus-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── Home.js
│   │   ├── Detail.js
│   │   ├── Recommends.js
│   │   └── ...
│   ├── features/
│   │   ├── movie/
│   │   │   ├── movieSlice.js
│   │   │   └── ...
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── .gitignore
├── package.json
├── README.md
└── ...
