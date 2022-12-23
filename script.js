const loginEmail = document.getElementById('email');
const loginSenha = document.getElementById('senha');
const check = document.getElementById('agreement');
const submitBtnForm = document.querySelector('#submit-btn');
const evaluationForm = document.getElementById('evaluation-form');
const newLabel = document.createElement('p');
const listSubject = [];

function login() {
  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
document.getElementById('entrar').addEventListener('click', login);

submitBtnForm.disabled = true;
function enableButton() {
  if (check.checked) {
    submitBtnForm.disabled = false;
  }
}
check.addEventListener('click', enableButton);

function countCharacters() {
  const contador = document.getElementById('counter');
  const textArea = document.getElementById('textarea');
  contador.innerText = `${500 - textArea.value.length}`;
}
document.getElementById('textarea').addEventListener('input', countCharacters);

function verifySubjects() {
  const checkedGrades = document.querySelectorAll('input[class="subject"]:checked');
  for (let index = 0; index < checkedGrades.length; index += 1) {
    listSubject.push(` ${checkedGrades[index].value}`);
  }
  return listSubject;
}

function fillForm() {
  const newObject = {
    nome: document.querySelector('#input-name').value,
    lastName: document.querySelector('#input-lastname').value,
    inputEmail: document.querySelector('#input-email').value,
    house: document.querySelector('#house').value,
    family: document.querySelector('input[name="family"]:checked').value,
    fullListSubject: verifySubjects(),
    rateSelect: document.querySelector('input[name="rate"]:checked').value,
    textArea: document.querySelector('#textarea').value,
  };
  evaluationForm.textContent = ' ';
  newLabel.innerText = `Nome: ${newObject.nome} ${newObject.lastName}Email: ${newObject.inputEmail},
  Casa: ${newObject.house}
  Família: ${newObject.family}
  Matérias: ${newObject.fullListSubject}
  Avaliação: ${newObject.rateSelect}
  Observações: ${newObject.textArea}`;
  evaluationForm.appendChild(newLabel);
}

submitBtnForm.addEventListener('click', fillForm);

function handleButton(event) {
  event.preventDefault();
}
submitBtnForm.addEventListener('click', handleButton);

// Referência https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox
// Habilitar o botão entrar
// Referência https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp

// Função que conta o número de caracteres no textarea
// Referência - Contador de caracteres em uma textarea com JavaScript: https://www.youtube.com/watch?v=X-LVkU95jLU&ab_channel=dcode
