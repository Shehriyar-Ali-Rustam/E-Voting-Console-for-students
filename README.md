
## 📊 E-Voting Console for Students

A secure and modern **React.js** application that enables students to vote online. The system is integrated with **Firebase** for real-time database functionality, making it ideal for educational institutions looking to conduct transparent digital elections.

---

### 🚀 Features

* 🧑‍🎓 Intuitive UI for students to vote
* 🔒 Firebase integration for secure & real-time data
* 📊 Live results with candidate modal view
* 🌐 Component-based architecture
* 📱 Responsive design across all devices

---

### 🛠️ Tech Stack

* **React.js (Vite)**
* **JavaScript (ES6+)**
* **Firebase**
* **CSS3 / Custom Styling**
* **FontAwesome Icons**

---

### 📁 Project Structure

```
cust-voting-react/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AboutTab.jsx
│   │   ├── CandidateCard.jsx
│   │   ├── CandidateModal.jsx
│   │   ├── ContactTab.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HomeTab.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── ResultsTab.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   ├── main.jsx
│   └── style.css
├── firebase-config.js
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

---

### 🔥 Firebase Features Used

* **Firebase Firestore**: To store and fetch voting data in real-time
* **Firebase Hosting** *(optional)*: Deploy your app online
* **Firebase Auth** *(if added)*: Secure login system for students

---

### 📦 Installation & Run Locally

Clone and run the project locally:

```bash
git clone https://github.com/Shehriyar-Ali-Rustam/E-Voting-Console-for-students.git
cd cust-voting-react
npm install
npm run dev
```

Then visit:
🌐 `http://localhost:5173`

---

### 📝 Environment Variables

Make sure you add your Firebase configuration in a `.env` file:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_MESSAGING_SENDER_ID=...
VITE_APP_ID=...
```

> ✅ These variables are accessed in your code using `import.meta.env.VITE_API_KEY` etc.

---

### ✅ Future Enhancements (Optional)

* Add **student authentication** using Firebase Auth
* Admin panel to manage elections and results
* Voting history and analytics dashboard

---

### 👨‍💻 Developed By

**Shehriyar Ali**
📧 [shehriyarali122@gmail.com](mailto:shehriyarali122@gmail.com)
🔗 [GitHub Profile](https://github.com/Shehriyar-Ali-Rustam)

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
