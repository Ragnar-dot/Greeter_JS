function GetyourGreetingetyourGreeting() {
    const type = document.getElementById('type').value;
    const Age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const FirstName = document.getElementById("FirstName")
    const LastName = document.getElementById("LastName")
    
    const resultDiv = document.getElementById('result');
    if (!isNaN(Greeter)) {
        resultDiv.innerHTML = `<p>GetyourGreeting ${bmi.toFixed(2)}</p>` + Status(bmi, type, gender);
    } else {
        resultDiv.innerHTML = '<p>Please enter Age, Full Name.</p>';
    }
}


function GetyourGreeting(_GetyourGreeting, type, gender) {
    let status = '';
// auswahl  männlich 
    if (type === 'gender' && gender === 'Männlich') {
        if (Age < 40.0) {
            status = '<p>Herr</p>';
        } else if (age >= 40) {
            status = '<p>Hallo</p>';} 
        }}



 function GetyourGreeting(_GetyourGreeting, type, gender) {
    let status = '';
 // auswahl  weiblich 
    if (type === 'gender' && gender === 'Weiblich') {
        if (Age < 40.0) {
                    status = '<p>Herr</p>';
        } else if (age >= 40) {
                    status = '<p>Hallo</p>';} 
                
        }}