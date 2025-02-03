// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Конфигурация Firebase вашего проекта
const firebaseConfig = {
  apiKey: "AIzaSyBdFs8nPacY3KSOuoxDQK6fATWxVz4kuq0",
  authDomain: "skinssite-74b19.firebaseapp.com",
  projectId: "skinssite-74b19",
  storageBucket: "skinssite-74b19.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Регистрация
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form-action");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            // Регистрация через Firebase Authentication
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User registered:", user);
                    alert("Registration successful!");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Registration failed:", errorMessage);
                    alert("Registration failed: " + errorMessage);
                });
        });
    } else {
        console.error("Form element not found!");
    }
});

// ✅ Авторизация
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form-action");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            // Вход через Firebase Authentication
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User logged in:", user);
                    alert("Login successful!");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Login failed:", errorMessage);
                    alert("Login failed: " + errorMessage);
                });
        });
    } else {
        console.error("Login form not found!");
    }
});

// ✅ Выход
document.getElementById("logout-button").addEventListener("click", function () {
    signOut(auth).then(() => {
        console.log("User signed out");
        alert("Logged out successfully!");
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
});
