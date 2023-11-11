function addNewUserView() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    appDiv.innerHTML += /*html*/ `
        <form id="addUserForm" onsubmit="addUser(event)">
            <label for="newUsername">Username:</label>
            <input type="text" id="newUsername" required>
            <label for="newAge">Age:</label>
            <input type="text" id="newAge" required>
            <label for="newMail">Mail:</label>
            <input type="text" id="newMail" required>
            <button type="submit">Ny bruker</button>
        </form>
        <button onclick="backBtn()">Tilbake</button>`;
}
