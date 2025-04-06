Overview
This project is a modern web application combining:
✔ A fully functional To-Do List (add, delete, and track tasks)
✔ A professional portfolio page (showcases projects in a clean layout)
✔ Dark/Light Mode Toggle (user-friendly theme switching)

Built with React + Vite for fast performance and a smooth UI experience.

🖥️ How the Web App Works
1. Core Features
📋 To-Do List Manager

Add tasks with timestamps

Delete tasks individually

Tasks persist in localStorage (no data loss on refresh)

🎨 Portfolio Integration

Displays the To-Do List as a featured project

Expandable with additional portfolio items

🌓 Dark Mode Toggle

Click the ☀️/🌙 button to switch themes

Smooth CSS transitions for a polished look

2. Tech Stack
Tech	Purpose
React	Frontend UI components
Vite	Fast development/build tool
CSS	Styling & animations
GitHub Pages	Deployment (optional)
⚙️ Code Structure
📂 File Breakdown
File	Purpose
App.jsx	Root component (renders Portfolio)
Portfolio.jsx	Main container (holds TodoApp + Portfolio content)
TodoApp.jsx	Task management logic & UI
App.css	Global styles (fonts, colors)
Portfolio.css	Portfolio layout & styling
TodoApp.css	To-Do List component styling
public/favicon.ico	Browser tab icon
🔧 How to Run Locally
1. Install Dependencies
bash
Copy
npm install
2. Start Development Server
bash
Copy
npm run dev
(Opens at http://localhost:5173)

3. Build for Production
bash
Copy
npm run build
(Generates optimized files in /dist)

🔗 Deployment
Host on:

GitHub Pages

Vercel

Netlify

Example for GitHub Pages:

bash
Copy
npm install gh-pages --save-dev
Then update vite.config.js with your repo details.

