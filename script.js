function GetyourGreeting() {
    const gender = document.getElementById('gender').value;
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('Lastname').value;
    const age = parseInt(document.getElementById('age').value);

    let greeting;

    if (age >= 40) {
        if (gender === 'Weiblich') {
            greeting = `Guten Tag Frau  ${lastName}`;
        } else {
            greeting = `Guten Tag Herr  ${lastName}`;
        }
    } else {
        greeting = `Hallo ${firstName} ${lastName}`;
    }

    document.getElementById('result').innerText = greeting;
}