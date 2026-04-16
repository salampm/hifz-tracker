import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Global handles
let db, fb, auth;

function waitForFirebase(cb) {
    if (window._firebaseReady && window._auth) {
        db = window._db;
        fb = window._firebase;
        auth = window._auth;
        cb();
    } else {
        window.addEventListener('firebaseReady', () => {
            db = window._db;
            fb = window._firebase;
            auth = window._auth;
            cb();
        });
    }
}

// Initialize Auth Listener
waitForFirebase(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // User is signed in, fetch profile
            try {
                const userDoc = await fb.getDoc(fb.doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    const profile = userDoc.data();
                    if (profile.approved) {
                        loginSuccess({ ...profile, uid: user.uid });
                    } else {
                        showError("Your account is pending approval.");
                        doLogout();
                    }
                } else {
                    showError("User profile not found in database.");
                    doLogout();
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                showError("Error loading user profile.");
            }
        } else {
            // User is signed out
            showLoginScreen();
        }
    });
});

async function doLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorEl = document.getElementById('loginError');
    if (errorEl) errorEl.textContent = '';

    if (!email || !password) {
        showError("Please enter email and password.");
        return;
    }

    const btn = document.getElementById('signInBtn');
    const originalText = btn.textContent;
    btn.textContent = "Signing in...";
    btn.disabled = true;

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Login error:", error);
        let msg = "Invalid email or password.";
        if (error.code === 'auth/user-not-found') msg = "User not found.";
        if (error.code === 'auth/wrong-password') msg = "Incorrect password.";
        showError(msg);
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

function loginSuccess(user) {
    window.currentUser = user;
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('appShell').classList.add('active');
    
    // UI components setup based on role
    const navAdmin = document.getElementById('adminNavBtn');
    const isAdmin = ['owner', 'admin', 'management'].includes(user.role);
    if (navAdmin) navAdmin.style.display = isAdmin ? '' : 'none';
    
    // Load appropriate data
    if (window.loadStudents) window.loadStudents();
    
    // Role-based redirection logic
    if (window.navigate) {
        if (user.role === 'parent') {
            // Parents might land directly on their child's profile
            // For now, default to dashboard
            window.navigate('dashboard');
        } else {
            window.navigate('dashboard');
        }
    }
}

async function doLogout() {
    try {
        await signOut(auth);
        window.currentUser = null;
        if (window.closeModal) window.closeModal();
        showLoginScreen();
    } catch (error) {
        console.error("Logout error:", error);
    }
}

function showLoginScreen() {
    document.getElementById('appShell').classList.remove('active');
    document.getElementById('loginScreen').classList.add('active');
    const btn = document.getElementById('signInBtn');
    if (btn) {
        btn.disabled = false;
        btn.textContent = "Sign In";
    }
}

function showError(msg) {
    const errorEl = document.getElementById('loginError');
    if (errorEl) errorEl.textContent = msg;
}

function showLogoutConfirm() {
    if (window.showModal) {
        window.showModal(`
            <div class="modal-title">Sign Out?</div>
            <p style="font-size:0.85rem;color:var(--slate-500);margin-bottom:1.5rem">Are you sure you want to sign out?</p>
            <div class="modal-actions">
                <button class="btn-outline" onclick="closeModal()">Cancel</button>
                <button class="btn-green" onclick="doLogout()">Sign Out</button>
            </div>
        `);
    }
}

// Global Exports
window.doLogin = doLogin;
window.doLogout = doLogout;
window.showLogoutConfirm = showLogoutConfirm;
window.waitForFirebase = waitForFirebase;
