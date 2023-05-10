const userDataList = [];

function renderUserDataList() {
    const userDataListElement = document.getElementById('user-data-list');
    userDataListElement.innerHTML = '';

    userDataList.forEach((userData, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('user-data-item');

        const content = document.createElement('div');
        content.innerHTML = `
            <span contenteditable="true">${userData.name}</span>
            <span contenteditable="true">${userData.address}</span>
            <span contenteditable="true">${userData.age}</span>
            <span contenteditable="true">${userData.sex}</span>
        `;

        listItem.appendChild(content);

        userDataListElement.appendChild(listItem);
    });
}

function addNewEntry() {
    const newEntry = {
        name: "Click to edit",
        address: "Click to edit",
        age: "Click to edit",
        sex: "Click to edit"
    };

    userDataList.push(newEntry);
    renderUserDataList();
}

const newEntryButton = document.getElementById('new-entry');
newEntryButton.addEventListener('click', addNewEntry);

renderUserDataList();