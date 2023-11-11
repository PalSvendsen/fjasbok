function updateView() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    if (model.loggedInUser) {
        const loggedInUserIndex = model.users.findIndex(user => user.name === model.loggedInUser);
        appDiv.innerHTML += /*html*/`
            <p><strong>Logged In User:</strong> ${model.loggedInUser}</p>
            <button onclick="viewProfile(${loggedInUserIndex})">Vis Profil</button>
            <button onclick="logout()">Logg ut</button>
        `;
    } else {
        appDiv.innerHTML += /*html*/`
            <button onclick="login()">Logg inn</button>
        `;
    }

    const filteredUsers = model.users.filter(user => user.name !== model.loggedInUser);

    for (let i = 0; i < filteredUsers.length; i++) {
        appDiv.innerHTML += /*html*/`
            <div><strong>Name:</strong> ${filteredUsers[i].name}</div>
            <div><strong>Age:</strong> ${filteredUsers[i].age}</div>
            <div><strong>Mail:</strong> ${filteredUsers[i].mail}</div>
            <button onclick="viewProfile(${model.users.indexOf(filteredUsers[i])})">Vis profil</button>
            ${model.loggedInUser ? `<button onclick="addFriend(${model.users.indexOf(filteredUsers[i])})">Legg til venn</button>` : ''}
            <br>
        `;

    }
}

function showRegistrationForm() {
    // Hide the login form
    const loginForm = document.getElementById('app');
    loginForm.style.display = 'none';

    // Show the registration form
    const registrationForm = document.getElementById('addUserForm');
    registrationForm.style.display = 'block';
}



function viewLoggedInProfile() {
    const loggedInUserIndex = model.users.findIndex(user => user.name === model.loggedInUser);
    viewProfile(loggedInUserIndex);
}


function addFriend(index) {
    const friendName = model.users[index].name;

    if (!model.users.find(user => user.name === model.loggedInUser).friends.includes(friendName)) {
        model.users.find(user => user.name === model.loggedInUser).friends.push(friendName);
        updateView();
    }
}

function addUser(event) {
    event.preventDefault();
    const newUsernameInput = document.getElementById('newUsername');
    const newAgeInput = document.getElementById('newAge');
    const newMailInput = document.getElementById('newMail');

    const newUsername = newUsernameInput.value;
    const newAge = newAgeInput.value;
    const newMail = newMailInput.value;

    if (newUsername.trim() !== '' && !model.users.find(user => user.name === newUsername)) {
        // Add the new user to the model
        model.users.push({
            name: newUsername,
            age: newAge,
            mail: newMail,
            friends: [],
        });

        // Clear the input fields
        newUsernameInput.value = '';
        newAgeInput.value = '';
        newMailInput.value = '';

        // Update the view
        updateView();
    } else {
        alert('Invalid username. Please enter a unique username.');
    }
}


function login() {
    const username = prompt('Enter your username:');
    const validUsernames = model.users.map(user => user.name);

    if (username && validUsernames.includes(username)) {
        model.loggedInUser = username;
        updateView();
    } else {
        alert('Feil brukernavn!');
    }
}


function logout() {
    model.loggedInUser = '';
    updateView();
}

updateView();

