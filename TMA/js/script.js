// DOM Elements
/* User Authentication Section Start */
/* Get form elements */ 
const signupForm = document.getElementById('signupForm');
const loginFormSubmit = document.getElementById('loginFormSubmit');
const resetPasswordForm = document.getElementById('resetPasswordSubmit');
const signUpSection = document.getElementById('signUpForm');
const loginSection = document.getElementById('loginForm');
const resetSection = document.getElementById('resetPasswordForm');
const formImage = document.getElementById('formImage'); // For the images (signup/login/rest form)
const formQuote = document.getElementById('formQuote'); // Added for quotes

// Form links
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');
const showResetPasswordLink = document.getElementById('showResetPassword');
const backToLoginLink = document.getElementById('backToLogin')

// Sections to show/hide
const authSection = document.getElementById('authSection');
const taskManagementSection = document.getElementById('taskManagementSection');
const logoutBtn = document.getElementById('logoutBtn');

// Quotes for the different forms
const quotes = {
    login: 'Welcome back! Please log in to your account',
    signUp: 'Join us today! Create an account to get started',
    resetPassword: 'Forgot your password? No worries, let\'s reset it'
};

// Switch between sign-up, login, and reset forms
document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    signUpSection.style.display = 'block';
    loginSection.style.display = 'none';
    resetSection.style.display = 'none';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    signUpSection.style.display = 'none';
    loginSection.style.display = 'block';
    resetSection.style.display = 'none';
});

document.getElementById('showResetPassword').addEventListener('click', function(event) {
    event.preventDefault();
    signUpSection.style.display = 'none';
    loginSection.style.display = 'none';
    resetSection.style.display = 'block';
});

document.getElementById('backToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    signUpSection.style.display = 'none';
    loginSection.style.display = 'block';
    resetSection.style.display = 'none';
});

// Sign-up form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
        alert("Username already exists!");
        return;
    }

    // Save user credentials in localStorage
    const user = {
        username: username,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(user));

    alert("Sign-up successful! Please log in.");
    signupForm.reset();
    signUpSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Login form submission
loginFormSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user from localStorage
    const storedUser = localStorage.getItem(username);
    
    if (!storedUser) {
        alert("User does not exist. Please sign up.");
        return;
    }

    const user = JSON.parse(storedUser);

    // Authenticate user
    if (user.password === password) {
        alert("Login successful!");

        // Hide authentication section and show task management section
        authSection.style.display = 'none';
        taskManagementSection.style.display = 'block';
    } else {
        alert("Incorrect password!");
    }

    loginFormSubmit.reset();
});

// Reset password form submission
resetPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('resetUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Retrieve user from localStorage
    const storedUser = localStorage.getItem(username);
    
    if (!storedUser) {
        alert("User does not exist.");
        return;
    }

    // Update password
    const user = JSON.parse(storedUser);
    user.password = newPassword;
    localStorage.setItem(username, JSON.stringify(user));

    resetPasswordForm.reset();
    resetSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Logout
logoutBtn.addEventListener('click', function() {
    alert("You have logged out.");
    taskManagementSection.style.display = 'none';
    authSection.style.display = 'block';
});

// Function to change the image with animation
function changeImage(src, quotes) {
    formImage.classList.add('fade-out');  // Start fading out

    setTimeout(() => {
        formImage.src = src;  // Change the image source
        // Set image height, width, and padding
        formImage.style.height = '100%';
        formImage.style.width = '100%';
        formImage.style.padding = '5rem';  // Adjust as needed

        formImage.classList.remove('fade-out');  // Fade in after the image is set
        formQuote.innerText = quotes;  // Update the quote text
        formQuote.style.textAlign = 'center';  // Ensure quote is aligned-center
    }, 500);  // 500ms for fade-out animation
}

// On page load, show the login form and its associated image and quote
window.onload = function() {
    loginForm.style.display = 'block';  // Show login form by default
    signUpForm.style.display = 'none';  // Hide sign-up form
    resetPasswordForm.style.display = 'none';  // Hide reset password form

    // Set default image and quote for login
    changeImage('../image/login-image.svg', quotes.login);
};

// Event listeners to handle form switches
// Show Sign-Up Form
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    resetPasswordForm.style.display = 'none';
    signUpForm.style.display = 'block';

    // Change to signup image & quote
    changeImage('../image/signup-image.svg', quotes.signUp);
});

// Show Login Form
showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.style.display = 'none';
    resetPasswordForm.style.display = 'none';
    loginForm.style.display = 'block';

    // Change to login image & quote
    changeImage('../image/login-image.svg', quotes.login);
});

// Show Reset Password Form
showResetPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signUpForm.style.display = 'none';
    resetPasswordForm.style.display = 'block';

    // Change to reset password image & quote
    changeImage('../image/reset-password-image.svg', quotes.resetPassword);
});

// Back to Login from Reset Password Form
backToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    resetPasswordForm.style.display = 'none';
    loginForm.style.display = 'block';

    // Change back to login image & quote
    changeImage('../image/login-image.svg', quotes.login);
});


// Handle Reset Password Form Submission
resetPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Trigger the pop-up message to simulate sending password reset info
    alert("Password reset instructions have been sent to your email and mobile number, Please log in with your new password.");

    // After alert, switch back to login form and show login image and quote
    resetPasswordForm.style.display = 'none';
    loginForm.style.display = 'block';

    // Change back to login image & quote after password reset
    changeImage('../image/login-image.svg', quotes.login);
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    document.getElementById('taskManagementSection').style.display = 'none';
    document.getElementById('authSection').style.display = 'block';
    loginForm.style.display = 'block';
    changeImage('../image/login-image.svg', quotes.login);  // Change back to login image and quote
});

// Function to toggle password visibility for all forms
document.querySelectorAll('.toggle-password').forEach(toggleIcon => {
    toggleIcon.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const inputType = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', inputType);

        // Toggle the eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});


/* User Authentication Section Close */


/* Task Management Form Section Start */

const taskForm = document.getElementById('taskForm');
const taskName = document.getElementById('taskName');
const taskDescription = document.getElementById('taskDescription');
const taskDeadline = document.getElementById('taskDeadline');
const taskPriority = document.getElementById('taskPriority');
const taskCategory = document.getElementById('taskCategory');
const taskRecurrence = document.getElementById('taskRecurrence');
const taskList = document.getElementById('taskList');
const deletedTasks = document.getElementById('deletedTasks');
const updatedTasks = document.getElementById('updatedTasks');
const addTaskBtn = document.getElementById('addTaskBtn');
const updateTaskBtn = document.getElementById('updateTaskBtn');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let deleted = JSON.parse(localStorage.getItem('deletedTasks')) || [];
let updated = JSON.parse(localStorage.getItem('updatedTasks')) || [];
let currentEditId = null; // Track the currently edited task's ID
let updateSection = ''; // Track whether updating in tasks or updatedTasks

// Load tasks on page load
window.onload = function() {
    displayTasks();
    displayDeletedTasks();
    displayUpdatedTasks();
    updateTaskBtn.style.display = 'none'; // Hide update button initially
};

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('deletedTasks', JSON.stringify(deleted));
    localStorage.setItem('updatedTasks', JSON.stringify(updated));
}

// Add task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (currentEditId) {
        let taskIndex, updatedTask;

        // If updating a task in "Your Tasks" section
        if (updateSection === 'tasks') {
            taskIndex = tasks.findIndex(t => t.id === currentEditId);
            updatedTask = {
                id: Date.now(),
                name: taskName.value,
                description: taskDescription.value,
                deadline: taskDeadline.value,
                priority: taskPriority.value,
                category: taskCategory.value, 
                recurrence: taskRecurrence.value,
                status: 'In Progress', // Default status on update
            };

            // Move task to "Updated Tasks" and remove it from "Your Tasks"
            tasks.splice(taskIndex, 1);
            updated.push(updatedTask);

        } else if (updateSection === 'updated') {
            // If updating a task in "Updated Tasks" section
            taskIndex = updated.findIndex(t => t.id === currentEditId);
            updatedTask = {
                id: Date.now(),
                name: taskName.value,
                description: taskDescription.value,
                deadline: taskDeadline.value,
                priority: taskPriority.value,
                category: taskCategory.value, 
                recurrence: taskRecurrence.value,
                status: 'In Progress', // Default status on update
            };
            updated[taskIndex] = updatedTask; // Update task in "Updated Tasks" only
        }

        // Clear currentEditId and reset the form
        currentEditId = null;
        updateSection = '';
        addTaskBtn.style.display = 'inline'; // Show Add Task button
        updateTaskBtn.style.display = 'none'; // Hide Update Task button

        // Reload the page to reflect the updated tasks
        saveToLocalStorage(); // Save changes
        displayTasks();       // Display updated task list
        displayUpdatedTasks(); // Display updated task list
        generateCategoryChart(); // Update the pie chart
        taskForm.reset();     // Clear the form

    } else {
        // Add new task to "Your Tasks" section
        const newTask = {
            id: Date.now(),
            name: taskName.value,
            description: taskDescription.value,
            deadline: taskDeadline.value,
            priority: taskPriority.value,
            category: taskCategory.value, 
            recurrence: taskRecurrence.value,
            status: 'In Progress', // Default status on new task
        };
        tasks.push(newTask); // Add to tasks array
        saveToLocalStorage(); // Save the tasks
        displayTasks();       // Display updated task list
        taskForm.reset();     // Clear the form
    }
});

// Display tasks in "Your Tasks" section
function displayTasks() {
    taskList.innerHTML = ''; // Clear task list

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        // Determine status class for text color
        const statusClass = task.status === 'In Progress' ? 'task-status-in-progress' : 'task-status-complete';
        taskItem.innerHTML = `
            <div class="p-2">
                <strong>${task.name}</strong> <strong> - (Due: ${task.deadline})</strong><br> 
                Priority: ${task.priority} <br> 
                Category: ${task.category} <br>
                Recurrence: ${task.recurrence}<br> 
                Description: ${task.description}<br>
                <!-- File attachment section -->
                Status: <strong class="task-item ${statusClass}">${task.status}</strong><br>
            </div>
            <div class="p-2">
                <button class="btn btn-dark mt-3 p-2" onclick="toggleTaskStatus(${task.id})"><i class="fas fa-check"></i>/<i class="fas fa-times"></i>&nbsp;Status</button>
                <button class="btn btn-warning mt-3 p-2" onclick="startEditing(${task.id}, 'tasks')"><i class="fa-solid fa-rotate"></i>&nbsp;Update</button>
                <button class="btn btn-danger mt-3 p-2" onclick="deleteTask(${task.id}, 'tasks')"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                <button class="btn btn-primary mt-3 p-2" onclick="showShareCard(${task.id})"><i class="fas fa-share-alt"></i>&nbsp;Share</button>
            </div>
            <!-- Hidden Share Card -->
            <div id="share-card-${task.id}" class="share-card" style="display:none;">
                <div class="share-card-content">
                    <span class="close-btn" onclick="closeShareCard(${task.id})">&times;</span>
                    <h5>Share this task</h5>
                    <button class="btn btn-info" onclick="shareByEmail('${task.name}', '${task.status}', '${task.priority}', '${task.deadline}', '${task.recurrence}')">Share via Email</button>
                    <button class="btn btn-success" onclick="copyShareLink('${task.id}')">Copy Link</button>
                </div>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Start editing a task
function startEditing(id, section) {
    let task;

    if (section === 'tasks') {
        const taskIndex = tasks.findIndex(t => t.id === id);
        task = tasks[taskIndex];
    } else {
        const taskIndex = updated.findIndex(t => t.id === id);
        task = updated[taskIndex];
    }

    // Pre-fill form fields for editing
    taskName.value = task.name;
    taskDescription.value = task.description;
    taskDeadline.value = task.deadline;
    taskPriority.value = task.priority;

    currentEditId = id; // Set the ID of the task being edited
    updateSection = section; // Set the section to update

    addTaskBtn.style.display = 'none'; // Hide Add Task button
    updateTaskBtn.style.display = 'inline'; // Show Update Task button

    // Scroll the form into view when user clicks "Update"
    taskForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Delete task (moves to deleted array)
function deleteTask(id, section) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const deletedTask = tasks.splice(taskIndex, 1)[0]; // Remove task from tasks
    deleted.push({ ...deletedTask, source: section });  // Add to deleted array with source
    saveToLocalStorage();       // Save the updated task and deleted task lists
    displayTasks();             // Update task list
    displayDeletedTasks();      // Display recoverable tasks
}

// Permanently delete task from deleted list
function deletePermanently(id) {
    const taskIndex = deleted.findIndex(task => task.id === id);
    deleted.splice(taskIndex, 1);  // Remove task from the deleted array
    saveToLocalStorage();          // Save updated deleted tasks to localStorage
    displayDeletedTasks();         // Update the display of deleted tasks
}

// Recover a deleted task
function recoverTask(id) {
    const taskIndex = deleted.findIndex(task => task.id === id);
    const recoveredTask = deleted.splice(taskIndex, 1)[0];  // Remove from deleted list

    // Push back to the original source section
    if (recoveredTask.source === 'tasks') {
        tasks.push(recoveredTask);  // Add back to tasks
    } else if (recoveredTask.source === 'updated') {
        updated.push(recoveredTask); // Add back to updated tasks
    }

    saveToLocalStorage(); // Save tasks and deleted list
    displayTasks();       // Update the tasks list display
    displayUpdatedTasks();  // Update the updated tasks list
    displayDeletedTasks();  // Update deleted tasks list
}

// Display Deleted Tasks
function displayDeletedTasks() {
    deletedTasks.innerHTML = ''; // Clear deleted task list
    deleted.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        taskItem.innerHTML = `
            <div class="p-2">
                <strong>${task.name}</strong> <strong> - (Due: ${task.deadline})</strong> <br> 
                Priority: ${task.priority} <br> 
                Category: ${task.category} <br>
                Recurrence: ${task.recurrence}<br>
                Description: ${task.description}<br>
                Status: <strong>${task.status}</strong>
            </div>
            <div class="p-2">
                <button class="btn btn-success mt-3 p-2" onclick="recoverTask(${task.id})"> <i class="fas fa-undo-alt"></i>&nbsp;Recover</button>
                <button class="btn btn-danger mt-3 p-2" onclick="deletePermanently(${task.id})"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                <button class="btn btn-primary mt-3 p-2" onclick="showShareCard(${task.id})"><i class="fas fa-share-alt"></i>&nbsp;Share</button>
            </div>
            <!-- Hidden Share Card -->
            <div id="share-card-${task.id}" class="share-card" style="display:none;">
                <div class="share-card-content">
                    <span class="close-btn" onclick="closeShareCard(${task.id})">&times;</span>
                    <h5>Share this task</h5>
                    <button class="btn btn-info" onclick="shareByEmail('${task.name}', '${task.status}', '${task.priority}', '${task.deadline}', '${task.recurrence}')">Share via Email</button>
                    <button class="btn btn-success" onclick="copyShareLink('${task.id}')">Copy Link</button>
                </div>
            </div>
        `;
        deletedTasks.appendChild(taskItem);
    });
}

// Display updated tasks in the "Updated Tasks" section
function displayUpdatedTasks() {
    updatedTasks.innerHTML = ''; // Clear updated tasks list
    updated.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item', 'updated-task'); // Add class for styling
        // Determine status class for text color
        const statusClass = task.status === 'In Progress' ? 'task-status-in-progress' : 'task-status-complete';
        taskItem.innerHTML = `
            <div class="p-2">
                <strong>${task.name}</strong> <strong> - (Due: ${task.deadline})</strong> <br> 
                Priority: ${task.priority} <br> 
                Category: ${task.category} <br>
                Recurrence: ${task.recurrence}<br>
                Description: ${task.description}<br>
                Status: <strong class="task-item ${statusClass}">${task.status}</strong>
            </div>
            <div class="p-2">
                <button class="btn btn-dark mt-3 p-2" onclick="toggleTaskStatus(${task.id})"><i class="fas fa-check"></i>/<i class="fas fa-times"></i>&nbsp;Status</button>
                <button class="btn btn-warning mt-3 p-2" onclick="startEditing(${task.id}, 'updated')"><i class="fa-solid fa-rotate"></i>&nbsp;Update</button>
                <button class="btn btn-danger mt-3 p-2" onclick="deleteUpdatedTask(${task.id})"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                <button class="btn btn-primary mt-3 p-2" onclick="showShareCard(${task.id})"><i class="fas fa-share-alt"></i>&nbsp;Share</button>
            </div>
            <!-- Hidden Share Card -->
            <div id="share-card-${task.id}" class="share-card" style="display:none;">
                <div class="share-card-content">
                    <span class="close-btn" onclick="closeShareCard(${task.id})">&times;</span>
                    <h5>Share this task</h5>
                    <button class="btn btn-info" onclick="shareByEmail('${task.name}', '${task.status}', '${task.priority}', '${task.deadline}', '${task.recurrence}')">Share via Email</button>
                    <button class="btn btn-success" onclick="copyShareLink('${task.id}')">Copy Link</button>
                </div>
            </div>
        `;
        updatedTasks.appendChild(taskItem);
    });
}

// Delete task from the updated section
function deleteUpdatedTask(id) {
    const taskIndex = updated.findIndex(task => task.id === id);
    const deletedTask = updated.splice(taskIndex, 1)[0]; // Remove task from updated tasks
    deleted.push({ ...deletedTask, source: 'updated' }); // Move to deleted array with source
    saveToLocalStorage(); // Save to localStorage
    displayUpdatedTasks(); // Update the display of updated tasks
    displayDeletedTasks(); // Update the display of deleted tasks
}

// For the searching functionality
const searchTasks = document.getElementById('searchTasks');
const searchUpdated = document.getElementById('searchUpdated');
const searchDeleted = document.getElementById('searchDeleted');

// Load tasks on page load
window.onload = function() {
    displayTasks();
    displayDeletedTasks();
    displayUpdatedTasks();
    updateTaskBtn.style.display = 'none'; // Hide update button initially
    // Add event listeners for search inputs
    searchTasks.addEventListener('input', filterTasks);
    searchUpdated.addEventListener('input', filterUpdatedTasks);
    searchDeleted.addEventListener('input', filterDeletedTasks);
};

// Filter tasks in "Your Tasks" section
function filterTasks() {
    const searchTerm = searchTasks.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
    displayFilteredTasks(filteredTasks);
}

// Display filtered tasks
function displayFilteredTasks(filteredTasks) {
    taskList.innerHTML = ''; // Clear task list

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        // Determine status class for text color
        const statusClass = task.status === 'In Progress' ? 'task-status-in-progress' : 'task-status-complete';
        taskItem.innerHTML = `
            <div class="p-2">
                <strong>${task.name}</strong> <strong> - (Due: ${task.deadline})</strong> <br> 
                Priority: ${task.priority} <br> 
                Category: ${task.category} <br>
                Recurrence: ${task.recurrence}<br> 
                Description: ${task.description}<br>
                Status: <strong class="task-item ${statusClass}">${task.status}</strong>
            </div>
            <div class="p-2">
                <button class="btn btn-dark mt-3 p-2" onclick="toggleTaskStatus(${task.id})"><i class="fas fa-check"></i>/<i class="fas fa-times"></i>&nbsp;Status</button>
                <button class="btn btn-warning mt-3 p-2" onclick="startEditing(${task.id}, 'tasks')"><i class="fa-solid fa-rotate"></i>&nbsp;Update</button>
                <button class="btn btn-danger mt-3 p-2" onclick="deleteTask(${task.id}, 'tasks')"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                <button class="btn btn-primary mt-3 p-2" onclick="showShareCard(${task.id})"><i class="fas fa-share-alt"></i>&nbsp;Share</button>
            </div>
            <!-- Hidden Share Card -->
            <div id="share-card-${task.id}" class="share-card" style="display:none;">
                <div class="share-card-content">
                    <span class="close-btn" onclick="closeShareCard(${task.id})">&times;</span>
                    <h5>Share this task</h5>
                    <button class="btn btn-info" onclick="shareByEmail('${task.name}', '${task.status}', '${task.priority}', '${task.deadline}', '${task.recurrence}')">Share via Email</button>
                    <button class="btn btn-success" onclick="copyShareLink('${task.id}')">Copy Link</button>
                </div>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Filter updated tasks
function filterUpdatedTasks() {
    const searchTerm = searchUpdated.value.toLowerCase();
    const filteredUpdated = updated.filter(task => task.name.toLowerCase().includes(searchTerm));
    displayFilteredUpdatedTasks(filteredUpdated);
}

// Display filtered updated tasks
function displayFilteredUpdatedTasks(filteredUpdated) {
    updatedTasks.innerHTML = ''; // Clear updated tasks list

    filteredUpdated.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item', 'updated-task'); // Add class for styling
        // Determine status class for text color
        const statusClass = task.status === 'In Progress' ? 'task-status-in-progress' : 'task-status-complete';
        taskItem.innerHTML = `
            <div class="p-2">
                <strong>${task.name}</strong> <strong> - (Due: ${task.deadline})</strong> <br> 
                Priority: ${task.priority} <br> 
                Category: ${task.category} <br>
                Recurrence: ${task.recurrence}<br>
                Description: ${task.description}<br>
                Status: <strong class="task-item ${statusClass}">${task.status}</strong>
            </div>
            <div class="p-2">
                <button class="btn btn-dark mt-3 p-2" onclick="toggleTaskStatus(${task.id})"><i class="fas fa-check"></i>/<i class="fas fa-times"></i>&nbsp;Status</button>
                <button class="btn btn-warning mt-3 p-2" onclick="startEditing(${task.id}, 'updated')"><i class="fa-solid fa-rotate"></i>&nbsp;Update</button>
                <button class="btn btn-danger mt-3 p-2" onclick="deleteUpdatedTask(${task.id})"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                <button class="btn btn-primary mt-3 p-2" onclick="showShareCard(${task.id})"><i class="fas fa-share-alt"></i>&nbsp;Share</button>
            </div>
            <!-- Hidden Share Card -->
            <div id="share-card-${task.id}" class="share-card" style="display:none;">
                <div class="share-card-content">
                    <span class="close-btn" onclick="closeShareCard(${task.id})">&times;</span>
                    <h5>Share this task</h5>
                    <button class="btn btn-info" onclick="shareByEmail('${task.name}', '${task.status}', '${task.priority}', '${task.deadline}', '${task.recurrence}')">Share via Email</button>
                    <button class="btn btn-success" onclick="copyShareLink('${task.id}')">Copy Link</button>
                </div>
            </div>
        `;
        updatedTasks.appendChild(taskItem);
    });
}

// Filter deleted tasks
function filterDeletedTasks() {
    const searchTerm = searchDeleted.value.toLowerCase();
    const filteredDeleted = deleted.filter(task => task.name.toLowerCase().includes(searchTerm));
    displayFilteredDeletedTasks(filteredDeleted);
}

// Display filtered deleted tasks
function displayFilteredDeletedTasks(filteredDeleted) {
    deletedTasks.innerHTML = ''; // Clear deleted task list

    filteredDeleted.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
        taskItem.innerHTML = `
            <div class="p-2  task-item ${statusClass}">
                <strong>${task.name}</strong> <strong> - (Due: ${task.deadline})</strong> <br> 
                Priority: ${task.priority} <br> 
                Category: ${task.category} <br>
                Recurrence: ${task.recurrence}<br> 
                Description: ${task.description}<br>
                Status: <strong>${task.status}</strong>
            </div>
            <div class="p-2">
                <button class="btn btn-success mt-3 p-2" onclick="recoverTask(${task.id})"> <i class="fas fa-undo-alt"></i>&nbsp;Recover</button>
                <button class="btn btn-danger mt-3 p-2" onclick="deletePermanently(${task.id})"><i class="fas fa-trash"></i>&nbsp;Delete</button>
                <button class="btn btn-primary mt-3 p-2" onclick="showShareCard(${task.id})"><i class="fas fa-share-alt"></i>&nbsp;Share</button>
            </div>
            <!-- Hidden Share Card -->
            <div id="share-card-${task.id}" class="share-card" style="display:none;">
                <div class="share-card-content">
                    <span class="close-btn" onclick="closeShareCard(${task.id})">&times;</span>
                    <h5>Share this task</h5>
                    <button class="btn btn-info" onclick="shareByEmail('${task.name}', '${task.status}', '${task.priority}', '${task.deadline}', '${task.recurrence}')">Share via Email</button>
                    <button class="btn btn-success" onclick="copyShareLink('${task.id}')">Copy Link</button>
                </div>
            </div>
        `;
        deletedTasks.appendChild(taskItem);
    });
}

// Recurrence Logic
function handleRecurrence(task) {
    const recurrenceMap = {
        daily: 1,
        weekly: 7,
        monthly: 30 // Approximation; adjust as needed
    };

    const recurrenceDays = recurrenceMap[task.recurrence];
    
    if (recurrenceDays) {
        for (let i = 1; i <= 5; i++) { // Create 5 future instances
            const futureTask = { 
                ...task, 
                id: Date.now() + i, // Ensure a unique ID
                deadline: new Date(Date.now() + recurrenceDays * 24 * 60 * 60 * 1000 * i).toISOString().split('T')[0] // Update future deadline
            };
            tasks.push(futureTask);
        }
    }
}

// Downlaod the task list, updated task list, and deleted task list
const downloadTasksPdfBtn = document.getElementById('downloadTasksPdf');
const downloadUpdatedTasksPdfBtn = document.getElementById('downloadUpdatedTasksPdf');
const downloadDeletedTasksPdfBtn = document.getElementById('downloadDeletedTasksPdf');

// Function to download tasks as PDF
function downloadTasksPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Task List', 10, 10);
    
    let yPos = 20;
    tasks.forEach(task => {
        doc.setFontSize(12);
        doc.text(`Task: ${task.name}`, 10, yPos);
        doc.text(`Due: ${task.deadline}`, 10, yPos + 10);
        doc.text(`Priority: ${task.priority}`, 10, yPos + 20);
        doc.text(`Category: ${task.category}`, 10, yPos + 30);
        doc.text(`Recurrence: ${task.recurrence}`, 10, yPos + 40);
        doc.text(`Description: ${task.description}`, 10, yPos + 50);
        doc.text(`Status: ${task.status}`, 10, yPos + 60);
        yPos += 60;
    });

    doc.save('task-list.pdf');
}

// Function to download updated tasks as PDF
function downloadUpdatedTasksPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Updated Task List', 10, 10);
    
    let yPos = 20;
    updated.forEach(task => {
        doc.setFontSize(12);
        doc.text(`Task: ${task.name}`, 10, yPos);
        doc.text(`Due: ${task.deadline}`, 10, yPos + 10);
        doc.text(`Priority: ${task.priority}`, 10, yPos + 20);
        doc.text(`Category: ${task.category}`, 10, yPos + 30);
        doc.text(`Recurrence: ${task.recurrence}`, 10, yPos + 40);
        doc.text(`Description: ${task.description}`, 10, yPos + 50);
        doc.text(`Status: ${task.status}`, 10, yPos + 60);
        yPos += 60;
    });

    doc.save('updated-task-list.pdf');
}

// Function to download deleted tasks as PDF
function downloadDeletedTasksPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Deleted Task List', 10, 10);
    
    let yPos = 20;
    deleted.forEach(task => {
        doc.setFontSize(12);
        doc.text(`Task: ${task.name}`, 10, yPos);
        doc.text(`Due: ${task.deadline}`, 10, yPos + 10);
        doc.text(`Priority: ${task.priority}`, 10, yPos + 20);
        doc.text(`Category: ${task.category}`, 10, yPos + 30);
        doc.text(`Recurrence: ${task.recurrence}`, 10, yPos + 40);
        doc.text(`Description: ${task.description}`, 10, yPos + 50);
        doc.text(`Status: ${task.status}`, 10, yPos + 60);
        yPos += 60;
    });

    doc.save('deleted-task-list.pdf');
}

// Add event listeners to download buttons
downloadTasksPdfBtn.addEventListener('click', downloadTasksPdf);
downloadUpdatedTasksPdfBtn.addEventListener('click', downloadUpdatedTasksPdf);
downloadDeletedTasksPdfBtn.addEventListener('click', downloadDeletedTasksPdf);


// Toggle task status
function toggleTaskStatus(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].status = tasks[taskIndex].status === 'In Progress' ? 'Completed' : 'In Progress';
        saveToLocalStorage(); // Save changes to local storage
        displayTasks();       // Update display
    } else {
        const updatedIndex = updated.findIndex(task => task.id === id);
        if (updatedIndex !== -1) {
            updated[updatedIndex].status = updated[updatedIndex].status === 'In Progress' ? 'Completed' : 'In Progress';
            saveToLocalStorage(); // Save changes to local storage
            displayUpdatedTasks(); // Update display
        }
    }
}


// Sort tasks based on user selection
function sortTasks() {
    const sortOption = document.getElementById('sortTasks').value;

    if (sortOption === 'priority') {
        tasks.sort((a, b) => a.priority.localeCompare(b.priority)); // Sort by priority
    } else if (sortOption === 'deadline') {
        tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // Sort by deadline
    } else if (sortOption === 'recurrence') {
        tasks.sort((a, b) => a.recurrence.localeCompare(b.recurrence)); // Sort by recurrence
    } else if (sortOption === 'status') {
        tasks.sort((a, b) => a.status.localeCompare(b.status)); // Sort by status
    }

    displayTasks(); // Re-display the sorted tasks
}

// Sort updated tasks based on user selection
function sortUpdatedTasks() {
    const sortOption = document.getElementById('sortUpdatedTasks').value;

    if (sortOption === 'priority') {
        updated.sort((a, b) => a.priority.localeCompare(b.priority)); // Sort by priority
    } else if (sortOption === 'deadline') {
        updated.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // Sort by deadline
    } else if (sortOption === 'recurrence') {
        updated.sort((a, b) => a.recurrence.localeCompare(b.recurrence)); // Sort by recurrence
    } else if (sortOption === 'status') {
        updated.sort((a, b) => a.status.localeCompare(b.status)); // Sort by status
    }

    displayUpdatedTasks(); // Re-display the sorted updated tasks
}

// Sort deleted tasks based on user selection
function sortDeletedTasks() {
    const sortOption = document.getElementById('sortDeletedTasks').value;

    if (sortOption === 'priority') {
        deleted.sort((a, b) => a.priority.localeCompare(b.priority)); // Sort by priority
    } else if (sortOption === 'deadline') {
        deleted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); // Sort by deadline
    } else if (sortOption === 'recurrence') {
        deleted.sort((a, b) => a.recurrence.localeCompare(b.recurrence)); // Sort by recurrence
    } else if (sortOption === 'status') {
        deleted.sort((a, b) => a.status.localeCompare(b.status)); // Sort by status
    }

    displayDeletedTasks(); // Re-display the sorted deleted tasks
}




// Function to show the sharing card
function showShareCard(taskId) {
    const shareCard = document.getElementById(`share-card-${taskId}`);
    shareCard.style.display = 'block';
    shareCard.style.animation = 'fadeIn 0.5s'; // CSS animation for card fade-in
}

// Function to close the sharing card
function closeShareCard(taskId) {
    const shareCard = document.getElementById(`share-card-${taskId}`);
    shareCard.style.display = 'none';
}


// Function to share via email
function shareByEmail(taskName, taskStatus, taskPriority, taskDeadline, taskRecurrence) {
    const subject = `Task: ${taskName}`;
    const body = `Details:\nTask: ${taskName}\nStatus: ${taskStatus}\nPriority: ${taskPriority}\nDeadline: ${taskDeadline}\nRecurrence: ${taskRecurrence}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Function to copy a shareable link
function copyShareLink(taskId) {
    const link = `https://yourdomain.com/task/${taskId}`;
    navigator.clipboard.writeText(link);
    alert('Task link copied to clipboard!');
}

/* Task Management Form Section Close */


// Dark Mode 
// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if the user has a stored preference for dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.classList.add('dark-mode');
    darkModeToggle.textContent = "☀️ Disable Dark Mode";
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "☀️ Disable Dark Mode";
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = "🌙 Enable Dark Mode";
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check deadlines every 2 minutes (120,000 milliseconds)
setInterval(checkDeadlines, 120000);

// Function to check deadlines and notify
function checkDeadlines() {
    const now = new Date(); // Get the current date and time
    const upcomingTasks = []; // Store upcoming tasks

    // Loop through tasks in both tasks and updated arrays
    tasks.forEach(task => {
        if (task.status === 'In Progress') {
            const deadline = new Date(task.deadline);
            const timeDiff = deadline - now;

            // Check if the deadline is within the next 24 hours (86,400,000 milliseconds)
            if (timeDiff > 0 && timeDiff <= 86400000) {
                upcomingTasks.push({ task, source: 'tasks' });
            }
        }
    });

    updated.forEach(task => {
        if (task.status === 'In Progress') {
            const deadline = new Date(task.deadline);
            const timeDiff = deadline - now;

            // Check if the deadline is within the next 24 hours
            if (timeDiff > 0 && timeDiff <= 86400000) {
                upcomingTasks.push({ task, source: 'updated' });
            }
        }
    });

    // Display notifications for upcoming tasks
    displayNotifications(upcomingTasks);
}

// Function to display notifications
function displayNotifications(upcomingTasks) {
    const notificationsContainer = document.getElementById('notifications');
    notificationsContainer.innerHTML = ''; // Clear existing notifications

    if (upcomingTasks.length === 0) {
        notificationsContainer.innerHTML = '<p>No upcoming task deadlines.</p>';
        return;
    }

    // Create notification for each upcoming task
    upcomingTasks.forEach(({ task, source }) => {
        const notification = document.createElement('div');
        notification.classList.add('alert', 'alert-warning', 'mt-2');
        notification.style.backgroundColor = task.status === 'Completed' ? '#d4edda' : '#fff3cd'; // Mark background based on task status

        notification.innerHTML = `
            <strong>Reminder:</strong> Task <strong>${task.name}</strong> has a deadline on <strong>${task.deadline}</strong>. 
            Priority: <strong>${task.priority}</strong>.
            <button class="btn btn-sm btn-success" onclick="markTaskAsCompleted(${task.id}, '${source}')">Mark as Completed</button>
        `;

        notificationsContainer.appendChild(notification);
    });
}

// Function to mark task as completed
function markTaskAsCompleted(taskId, source) {
    if (source === 'tasks') {
        const taskIndex = tasks.findIndex(t => t.id === taskId);
        tasks[taskIndex].status = 'Completed';
    } else if (source === 'updated') {
        const taskIndex = updated.findIndex(t => t.id === taskId);
        updated[taskIndex].status = 'Completed';
    }

    saveToLocalStorage();
    displayTasks();
    displayUpdatedTasks();
    checkDeadlines(); // Update the reminders section
}


// Save tasks and updated tasks to local storage (make sure you have this function)
function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('updated', JSON.stringify(updated));
}



// Function to calculate and update the analytics dashboard
function updateAnalytics() {
    const totalTasks = tasks.length + updated.length;
    const completedTasks = tasks.filter(task => task.status === 'Completed').length +
                           updated.filter(task => task.status === 'Completed').length;
    const inProgressTasks = tasks.filter(task => task.status === 'In Progress').length +
                            updated.filter(task => task.status === 'In Progress').length;
    const completionRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    // Update the DOM elements with the calculated values
    document.getElementById('total-tasks').innerText = totalTasks;
    document.getElementById('tasks-completed').innerText = completedTasks;
    document.getElementById('tasks-in-progress').innerText = inProgressTasks;
    document.getElementById('completion-rate').innerText = `${completionRate}%`;

    // Update the category breakdown chart
    updateCategoryChart();
}

// Function to create and update the category chart
function updateCategoryChart() {
    const categories = {};
    
    // Count tasks by category from both tasks and updated arrays
    tasks.forEach(task => {
        categories[task.category] = (categories[task.category] || 0) + 1;
    });
    updated.forEach(task => {
        categories[task.category] = (categories[task.category] || 0) + 1;
    });

    const ctx = document.getElementById('category-chart').getContext('2d');
    
    // Create or update the chart
    if (window.categoryChart) {
        window.categoryChart.data = {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories),
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8'],
            }]
        };
        window.categoryChart.update();
    } else {
        window.categoryChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(categories),
                datasets: [{
                    data: Object.values(categories),
                    backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }
}

// Call this function whenever tasks are added, updated, or deleted
updateAnalytics();

addTask(newTask);
updateAnalytics(); // Call this after the task is added
updateTask(editedTask);
updateAnalytics(); // Call this after the task is updated
deleteTask(taskId);
updateAnalytics(); // Call this after the task is deleted



// Function to get task category breakdown
function getCategoryBreakdown() {
    const categoryCounts = {};

    // Count how many tasks are in each category
    tasks.forEach(task => {
        const category = task.category;
        if (categoryCounts[category]) {
            categoryCounts[category]++;
        } else {
            categoryCounts[category] = 1;
        }
    });

    // Return category names and their counts as arrays
    return {
        categories: Object.keys(categoryCounts),
        counts: Object.values(categoryCounts)
    };
}

// Function to generate and update the pie chart
function generateCategoryChart() {
    const ctx = document.getElementById('category-chart').getContext('2d');
    const categoryData = getCategoryBreakdown();

    // If the chart already exists, destroy it before creating a new one
    if (window.categoryChart) {
        window.categoryChart.destroy();
    }

    // Create the pie chart
    window.categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categoryData.categories, // Categories as labels
            datasets: [{
                label: 'Task Categories',
                data: categoryData.counts,    // Number of tasks in each category
                backgroundColor: [
                    '#4caf50', // Work
                    '#2196f3', // Personal
                    '#ff9800', // Urgent
                    '#f44336', // Others
                    '#9c27b0'  // Additional categories
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            let label = tooltipItem.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += tooltipItem.raw;
                            return label + ' tasks';
                        }
                    }
                }
            }
        }
    });
}

// Call the function after tasks are displayed
displayTasks(); // Your existing function to display tasks
generateCategoryChart(); // Generate the chart after displaying the tasks

// Call this function every time the task list is updated
function updateCharts() {
    displayTasks();       // Re-display tasks
    displayUpdatedTasks(); // Re-display updated tasks
    generateCategoryChart(); // Update the pie chart with the latest data
}
