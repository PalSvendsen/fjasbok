function updateView() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    for (let i = 0; i < model.users.length; i++) {
        appDiv.innerHTML += /*html*/`
        <div><strong>Name:</strong> ${model.users[i].name}</div>
        <div><strong>Age:</strong> ${model.users[i].age}</div>
        <div><strong>Mail:</strong> ${model.users[i].mail}</div>
        <input type="text" id="friendNameInput${i}" placeholder="Legg til venn...">
        <button onclick="add(${i})">Legg til venn</button>
        <button onclick="viewProfile(${i})">Vis profil</button>
        <br>
        
        `;
    }
}

function add(index) {
    const friendNameInput = document.getElementById(`friendNameInput${index}`);
    const friendName = friendNameInput.value;
    

    if (friendName !== '') {
        model.users[index].friends.push(friendName);
        friendNameInput.value = ''; 
        updateView(); 
    }
}

updateView();

