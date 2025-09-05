const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");
const modalLogin = document.querySelector("#modal-login");
const modalRegister = document.querySelector("#modal-register");
const btnCancelLogin = document.querySelector("#btn-cancel-login");
const btnCancelRegister = document.querySelector("#btn-cancel-register");
const btnLoginOpen = document.querySelector("#btn-login-open");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const resultado = document.querySelector("#resultado")

const pegar_valor = (valor) => {
  resultado.innerHTML = `
      <div class="valor">
        <h1>${valor}</h1>      
      </div>
  `;
};

const calcular = (valor01, valor02) => {
  const soma = Number (valor01) + Number(valor02);
  const subtrair = valor01 - valor02;
  const multiplicar = valor01 * valor02;
  const dividir = valor01 / valor02;

  console.log(typeof valor01);

  return resultado.innerHTML = `
    <div class="calcular">
      <div class="soma">${soma}</div>
      <div class="subtrair">${subtrair}</div>
      <div class="multiplicar">${multiplicar}</div>
      <div class="dividir">${dividir}</div>
    </div>  
  `
};

function soma(num01, num02) {
    const somar = num01 + num02
    console.log(somar)
}

soma(8, 6)

// arrow function
const multiplicar = (num01, num02) => {
    return num01 * num02
}

console.log(multiplicar(6,10));

const subtrair = (num01, num02) => {
    return num01 - num02
}

console.log(subtrair(10,6));

const dividir = (num01, num02) => {
    return num01 / num02
}

console.log(dividir(2,2));


//Escuta o evento de click
//Executa a função dele
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modalLogin.classList.remove("hide-modal");
  modalLogin.classList.add("show-modal");
})

btnRegister.addEventListener("click", (e) => {
  modalRegister.classList.remove("hide-modal");
  modalRegister.classList.add("show-modal");
})

btnCancelLogin.addEventListener("click", (e) => {
  modalLogin.classList.remove("show-modal");
  modalLogin.classList.add("hide-modal");
  inputEmail.value = "";
  resultado.innerHTML = ""
  inputEmail.style.borderBottom = "0.5rem solid rgb(28, 95, 153)"
  inputSenha.style.borderBottom = "0.5rem solid rgb(28, 95, 153)"
})

btnCancelRegister.addEventListener("click", (e) => {
  e.preventDefault();
  modalRegister.classList.remove("show-modal");
  modalRegister.classList.add("hide-modal");
})

// inputEmail.addEventListener("input", () => {
//   resultado.innerHTML = inputEmail.value
// })

inputEmail.addEventListener("focus", () => {
  inputEmail.style.borderBottom = "0.5rem solid rgb(255, 0, 0)"
})

inputSenha.addEventListener("focus", () => {
  inputSenha.style.borderBottom = "0.5rem solid rgb(255, 0, 0)"
})


btnLoginOpen.addEventListener("click", (e) => {
  e.preventDefault();
  const email = inputEmail.value;
  const senha = inputSenha.value;
  resultado.classList.add("resultado_calcular");
  calcular (email, senha);
});

inputEmail.addEventListener("focusout", () =>{
  inputEmail.style.borderBottom = "0.5rem solid rgb(28, 95, 153)"
})

inputSenha.addEventListener("focusout", () =>{
  inputSenha.style.borderBottom = "0.5rem solid rgb(28, 95, 153)"
})