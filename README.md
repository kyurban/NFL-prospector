# NFL Prospector

NFL Prospector is an app designed to manage and evaluate prospects for the 2025 NFL draft. It allows users to create, update, delete, or view prospects' information, including their college and position to assist in making draft decisions.

## Features

**Prospect Management**
- Create, update, and view player information.

**Draft Analysis**
- Evaluate players based on various attributes such as college, position, age, height, and weight.

**Search & Filter**
- Search and filter players based on their various details.

**User-Friendly Interface**
- Simple and intuitive interface for easy navigation and data entry.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Database:** Sequelize (MySQL)
- **API Testing:** Postman for testing and interacting with the app's API endpoints

## Project Setup Instructions

**1. Clone the repository**

   ```
   git clone https://github.com/kyurban/nfl-prospector.git
  ```

**2. Install Dependencies**

  ```
npm install
  ```

**3. Install MySQL**

  MacOS: ```brew install mysql```
  
  Windows: https://dev.mysql.com/downloads/installer/

**4. Import Database**

  ```
mysql -u root -p < players.sql
  ```
**5. Create a ```.env``` File**

```bash
PORT = 5000
NAME = your_username
DB_PASSWORD = your_password
```

**6. Run the Appp**

```
npm start
```


