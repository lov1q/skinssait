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

    if (!loginForm) {
        console.error("Login form not found!");
        return;
    }

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);
            alert("Login successful!");

            // Добавляем анимацию исчезновения
            document.body.classList.add('fade-out');

            // Задерживаем редирект на 1 секунду (время анимации)
            setTimeout(function() {
                window.location.href = "shop.html"; // ✅ Перенос на shop.html
            }, 1000); // 1000 миллисекунд = 1 секунда
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Login failed: " + error.message);
        }
    });
});


// ✅ Выход
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");

    if (!logoutButton) {
        console.error("Logout button not found!");
        return;
    }

    logoutButton.addEventListener("click", async function () {
        try {
            await signOut(auth);
            console.log("User signed out");
            alert("Logged out successfully!");
            window.location.href = "login.html"; // ✅ Перенос на страницу логина
        } catch (error) {
            console.error("Error signing out:", error.message);
            alert("Error signing out: " + error.message);
        }
    });
});
