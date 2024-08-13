function GetyourGreeting() {
    const gender = document.getElementById('gender').value;
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('Lastname').value;
    const age = parseInt(document.getElementById('age').value);

    let greeting;

    if (age >= 40) {
        if (gender === 'Weiblich') {
            greeting = `Guten  Tag  Frau,  ${lastName}`;
        } else {
            greeting = `Guten  Tag  Herr,  ${lastName}`;
        }
    } else {
        greeting = `Hallo, ${firstName}`;
    }

    typeEffect(greeting, 'result');
}

function typeEffect(text, elementId) {
    const element = document.getElementById(elementId);
    
    const speed = 200; // typing speed in milliseconds
    let newtext = "";

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    (async () => {
        for (let i = 0; i < text.length; i++) {
            newtext += text.charAt(i);
            element.innerText = newtext;
            await delay(speed);
        }
    })();
}
o

    


document.getElementById('greetButton').addEventListener('click', GetyourGreeting);