const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

const USD = 4.87
const EUR = 5.32
const GBP = 6.08

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break

    case "EUR":
      convertCurrency(amount.value, EUR, "EUR")
      break

    case "GBP":
      convertCurrency(amount.value, GBP, "GBP")
      break
  }
}

const convertCurrency = (amount, price, symbol) => {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price

    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    result.textContent = `${formatCurrencyBRL(total)}`

    footer.classList.add("show-result")
  } catch(error) {
    console.log(error)

    // Remove a classe que exibe o resultado
    footer.classList.remove("show-result")
    alert("Ocorreu um erro, tente mais tarde")
  }
}

const formatCurrencyBRL = (value) => {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}