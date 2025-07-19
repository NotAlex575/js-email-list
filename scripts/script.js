const email_list = document.getElementById("lista-email");

const emails = [];

//ESECUZIONE RENDER CARD LIST
const renderCards = () =>{
  for(let i = 0; i < emails.length; i++){
    let card = generateCard(emails[i]);
    email_list.innerHTML += card;
  }
}

const generateCard = (email) => {
  return `<li class="list-group-item">${email}</li>`;
}

//CREAZIONE EMAIL E CARD LIST

let counter_email = 0;

for(let i = 0; i < 10; i++){
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(response => {
        const email = response.data.response;
        emails[i] = email;
        counter_email++;
        if(counter_email == 10){
            renderCards();
        }
    })
}












