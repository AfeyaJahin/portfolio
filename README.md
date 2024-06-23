
# Portfolio Website using MERN Stack

Checkout the app at https://afeyajahin.vercel.app/


## Introduction

This project is a comprehensive portfolio website designed using the MERN (MongoDB, Express, React, Node) stack. It encapsulates my professional timeline, educational endeavors, and serves as a resource hub for technical interview preparation. The website is a testament to my journey in software development, showcasing my experiences, projects, leadership roles, and academic ventures. The design is inspired from Shan Jiang

---

## Installation and Running Instructions

### Prerequisites

- **Node.js and npm**: Download and install from [Node.js official website](https://nodejs.org/).
- **MongoDB Atlas Account**: Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Backend Setup

1. **Clone the Repository**: 
   ```
   git clone https://github.com/AfeyaJahin/portfolio.git
   cd PERSONALWEB
   ```

2. **Navigate to Backend Directory**:
   ```
   cd backend
   ```

3. **Install Dependencies**: (This will install Express, Mongoose, dotenv, and other required packages as listed in `package.json`)
   ```
   npm install
   ```

4. **Set up Environment Variables**:
   - Create a `.env` file in the backend directory.
   - Add your MongoDB URI: `DB_URI=your_mongodb_uri`

5. **Populate Database** (if needed):
   ```
   node data/convertJsonToNdjson.js
   node data/populateDB.js
   ```

6. **Run the Backend Server** (Nodemon will automatically restart the server on file changes):
   ```
   nodemon index.js
   ```

### Frontend Setup

1. **Navigate to Frontend Directory**:
   ```
   cd ../frontend
   ```

2. **Install Dependencies**: (This will install React, Material UI, and other necessary packages)
   ```
   npm install
   ```

3. **Run the Frontend Server**:
   ```
   npm run dev
   ```

4. **Access the Application**:
   - Backend: [http://localhost:3005/](https://afeyajahin.vercel.app/)
   - Frontend: [http://localhost:5173/](http://localhost:5173/)

---

