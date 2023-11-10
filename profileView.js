function viewProfile(index) {
    const user = model.users[index];
    const friendList = user.friends.join(', ');
    
    const profile = document.getElementById('app');
    profile.innerHTML = /*html*/`
        <h2>User Profile</h2>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        <p><strong>Mail:</strong> ${user.mail}</p>
        <p><strong>Friends:</strong> ${friendList}</p>
        <button onclick="goBack()">Tilbake</button>
    `;
}

function goBack() {
    updateView(); // This function updates the main user list view
}



