# Custom Note Service

A simple React-based note-taking app with localStorage persistence.

## Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:
    npm install

3. Start the app:
    npm start

4. Technologies Used
-React
-Material-UI
-localStorage

5. Features
- Add and view notes.
-Persistent data stored in localStorage.

6. Design Decisions
-useState for controlled inputs.
-useEffect for syncing storage to state.
-Tabs navigation for simplicity.
-Material-UI for rapid UI development.

7. Why localStorage + Key Naming?
-LocalStorage is used to persist notes client-side, ensuring they are available across sessions. The My-Storage-Key name is unique to avoid the
 conflicts with other stored data.
