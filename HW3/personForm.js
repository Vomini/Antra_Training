const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

// const people = JSON.parse(localStorage.getItem("people")) || [];
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

const displayPerson = (person) => {
    const addPeopleDiv = document.getElementById("addPeople");

    const personContainer = document.createElement("div");
    Object.assign(personContainer.style, {
        borderBottom: "1px solid #000",
        marginBottom: "10px",
        padding: "10px 0"
    });

    const idPara = document.createElement("p");
    idPara.textContent = `ID: ${person.id}`;

    const namePara = document.createElement("p");
    namePara.textContent = `Name: ${person.name}`;

    const agePara = document.createElement("p");
    agePara.textContent = `Age: ${person.age}`;

    [idPara, namePara, agePara].forEach(element => personContainer.appendChild(element));
    
    addPeopleDiv.appendChild(personContainer);
}


personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   return;
  const newPerson = {
    id: uuidv4(),
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  people.push(newPerson);

  localStorage.setItem("people", JSON.stringify(people));
  displayPerson(newPerson);

    // Optionally, clear the input fields after submission
    nameInput.value = '';
    ageInput.value = '';
});
