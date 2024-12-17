const keypress = new Audio('./keypress.wav');
const inputField = document.getElementById('inputField');
const keys = document.querySelectorAll('.key');
let isShiftActive = false; 

function handleKeyPress(event) {
    const keyId = event.key.toLowerCase();
    const keyElement = document.getElementById(keyId);

    if (keyElement) {
        keypress.play();
        keyElement.style.backgroundColor = 'white';
        keyElement.style.color = 'black';

       
        if (keyId === 'delete') {
            inputField.value = inputField.value.slice(0, -1); 
        } else if (keyId === ' ') {
            inputField.value += ' '; 
        } else if (keyId === 'shift') {
            isShiftActive = !isShiftActive; 
        } else {
            const charToAdd = isShiftActive ? keyId.toUpperCase() : keyId; 
            inputField.value += charToAdd; 
        }
    }
}

function handleKeyRelease(event) {
    const keyId = event.key.toLowerCase();
    const keyElement = document.getElementById(keyId);

    if (keyElement) {
        keyElement.style.backgroundColor = 'black';
        keyElement.style.color = 'white';
    }
}


document.body.addEventListener('keydown', handleKeyPress);
document.body.addEventListener('keyup', handleKeyRelease);


keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        keypress.play();
        key.style.backgroundColor = 'white';
        key.style.color = 'black';
    });

    key.addEventListener('mouseup', () => {
        key.style.backgroundColor = 'black';
        key.style.color = 'white';
    });

    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('id');
        if (keyValue === 'delete') {
            inputField.value = inputField.value.slice(0, -1); 
        } else if (keyValue === 'space') {
            inputField.value += ' '; 
        } else if (keyValue === 'shift') {
            isShiftActive = !isShiftActive; 
        } else {
            const charToAdd = isShiftActive ? keyValue.toUpperCase() : keyValue; 
            inputField.value += charToAdd; 
        }
    });
});

const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
numberKeys.forEach(num => {
    const numElement = document.getElementById(num);
    if (numElement) {
        numElement.addEventListener('mousedown', () => {
            keypress.play();
            numElement.style.backgroundColor = 'white';
            numElement.style.color = 'black';
        });

        numElement.addEventListener('mouseup', () => {
            numElement.style.backgroundColor = 'black';
            numElement.style.color = 'white';
        });

        numElement.addEventListener('click', () => {
            inputField.value += num; 
        });
    }
});


document.body.addEventListener('keydown', (event) => {
    if (numberKeys.includes(event.key)) {
        const keyElement = document.getElementById(event.key);
        if (keyElement) {
            keypress.play();
            keyElement.style.backgroundColor = 'white';
            keyElement.style.color = 'black';
        }
    }
});

document.body.addEventListener('keyup', (event) => {
    if (numberKeys.includes(event.key)) {
        const keyElement = document.getElementById(event.key);
        if (keyElement) {
            keyElement.style.backgroundColor = 'black';
            keyElement.style.color = 'white';
        }
    }
});


document.getElementById('delete').addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1); 
});


document.getElementById('space').addEventListener('click', () => {
    inputField.value += ' '; 
});

document.getElementById('shift').addEventListener('click', () => {
    isShiftActive = !isShiftActive;
});


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        inputField.value = inputField.value.slice(0, -1);
    } else if (event.key === ' ') {
        inputField.value += ' '; 
    } else if (event.key === 'Shift') {
        isShiftActive = true; 
    }
});

document.body.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
        isShiftActive = false; 
    }
});