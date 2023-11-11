const addUser = document.getElementById('app');
    profile.innerHTML = /*html*/`
    <form id="addUserForm" onsubmit="addUser(event)">
    <label for="newUsername">Username:</label>
    <input type="text" id="newUsername" name="newUsername" required>
    <label for="newAge">Age:</label>
    <input type="text" id="newAge" name="newAge" required>
    <label for="newMail">Mail:</label>
    <input type="text" id="newMail" name="newMail" required>
    <button type="submit">Add User</button>
</form>
    
    `