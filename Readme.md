# Zen Class Program Database

This repository contains the setup and sample data for a MongoDB database designed to manage the Zen class program, including users, codekata progress, attendance, topics covered, tasks assigned, company drives, and mentors.

## Collections

### 1. `users`
Stores information about users.

### 2. `codekata`
Tracks the problems solved by users in the CodeKata practice tool.

### 3. `attendance`
Records the attendance of users for each class.

### 4. `topics`
Lists the topics covered in classes.

### 5. `tasks`
Records the tasks assigned to users and their submission status.

### 6. `company_drives`
Lists company placement drives and the users who appeared for them.

### 7. `mentors`
Stores information about mentors and their mentees.

## Sample Data

Each collection contains 15 sample documents to facilitate testing and querying.

## Setup Instructions

1. **Install MongoDB**: Ensure MongoDB is installed and running on your system.

2. **Import Sample Data**:
   - Save the JSON data for each collection in separate files (e.g., `users.json`, `codekata.json`, etc.).
   - Use the `mongoimport` command to import the data into your MongoDB instance. For example:
     ```bash
     mongoimport --db zen_class --collection users --file users.json --jsonArray
     mongoimport --db zen_class --collection codekata --file codekata.json --jsonArray
     mongoimport --db zen_class --collection attendance --file attendance.json --jsonArray
     mongoimport --db zen_class --collection topics --file topics.json --jsonArray
     mongoimport --db zen_class --collection tasks --file tasks.json --jsonArray
     mongoimport --db zen_class --collection company_drives --file company_drives.json --jsonArray
     mongoimport --db zen_class --collection mentors --file mentors.json --jsonArray
     ```
