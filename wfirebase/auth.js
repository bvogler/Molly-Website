// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvbU-UFFyi7EEoFgxBEpQzE1OfzGnwHog",
  authDomain: "user-login-6f728.firebaseapp.com",
  projectId: "user-login-6f728",
  storageBucket: "user-login-6f728.firebasestorage.app",
  messagingSenderId: "395631654318",
  appId: "1:395631654318:web:c92d46ea4b97fe9b82c43f",
  measurementId: "G-58288LW70D"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Protect a page: redirect to login if not logged in
function protectPage() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      if (!window.location.href.includes("index.html")) {
        window.location.href = "index.html";
      }
    }
  });
}

// Logout function
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Google login
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(err => alert(err.message));
}

// Send password reset email
function resetPassword() {
  const email = document.getElementById('reset-email').value;
  if (!email) {
    alert("Please enter your email.");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert(`Password reset email sent to ${email}`);
    })
    .catch(err => alert(err.message));
}