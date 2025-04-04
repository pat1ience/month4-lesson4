const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

phoneButton.onclick = () => {
  const resExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

  if (resExp.test(phoneInput.value)) {
    phoneResult.innerText = 'OK'
    phoneResult.style.color = 'green'
  } else { 
    phoneResult.innerText = 'ERROR'
    phoneResult.style.color = 'red'
  }
};
