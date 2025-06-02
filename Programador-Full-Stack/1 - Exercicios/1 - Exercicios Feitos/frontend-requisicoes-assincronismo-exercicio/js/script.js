let cards = document.querySelectorAll(".card")
let h1s = document.querySelectorAll("h1")
let spans = document.querySelectorAll("span")
let strong = document.querySelectorAll("strong")

async function showCard() {
  try {
    const response = await api.get('/users');
    for (let i = 0; i < cards.length; i++) {
      h1s[i].textContent = response.data[i].name;
      spans[i].textContent = response.data[i].email;
      strong[i].textContent = response.data[i].phone;
    }
  } catch (error) {
    console.log(error.response.data)
  }
}
showCard();


