document.querySelector('#btnСlear').addEventListener('click', function () {
    document.querySelector('#fullName').innerText = "";
    document.querySelector('#genderOutput').innerText = "";
    document.querySelector('#birthYearOutput').innerText = "";
    document.querySelector('#professionOutput').innerText = "";
    
})
document.querySelector('#btnGen').addEventListener('click', function () {
    let initPerson = personGenerator.getPerson();
    document.querySelector('#fullName').innerText = (`${initPerson.lastName} ${initPerson.firstName} ${initPerson.middleName}`);
    document.querySelector('#genderOutput').innerText = `${initPerson.gender}`;
    document.querySelector('#birthYearOutput').innerText = initPerson.year;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
     
})
