const form = document.getElementById("transaction-form");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const transactionsDiv = document.getElementById("transactions");
const balanceDisplay = document.getElementById("balance");

let transactions = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const transaction = {
    description: description.value,
    amount: Number(amount.value),
    type: type.value,
  };

  transactions.push(transaction);

  updateUI();

  form.reset();
});

function updateUI() {
  transactionsDiv.innerHTML = "";

  let balance = 0;

  transactions.forEach((transaction) => {
    const item = document.createElement("div");

    item.classList.add("transaction");

    if (transaction.type === "income") {
      balance += transaction.amount;
      item.style.borderLeft = "5px solid green";
    } else {
      balance -= transaction.amount;
      item.style.borderLeft = "5px solid red";
    }

    item.innerHTML = `
            <p>${transaction.description}</p>
            <strong>KES ${transaction.amount}</strong>
        `;

    transactionsDiv.appendChild(item);
  });

  balanceDisplay.textContent = `KES ${balance}`;
}
