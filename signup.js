// Sign Up function
function signUp(event) {
    event.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;

    let users = JSON.parse(localStorage.getItem('users')) || []; // Get users from localStorage or empty array if not found

    const userExists = users.some(u => u.username === username);
    if (userExists) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    const user = { fullName, email, username, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage

    alert("Sign Up Successful!");
    document.getElementById('signup-form').reset();
    toggleForms();
}

// Login function
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;

    let users = JSON.parse(localStorage.getItem('users')) || []; // Get users from localStorage

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user)); // Save current user to localStorage
        document.getElementById('user-name').textContent = user.fullName;
        document.getElementById('login-signup-container').classList.add('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('expense-tracker').classList.remove('hidden');
        document.getElementById('logout-btn').classList.remove('hidden');
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
