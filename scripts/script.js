const email_list = document.getElementById("lista-email");

const emails = [];



for(let i = 0; i < 10; i++){
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(response => {
      const email = response.data.response;
      emails[i] = email;
    })
}

console.log(emails);






