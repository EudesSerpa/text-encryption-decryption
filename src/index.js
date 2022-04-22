const text = document.querySelector("#text");

const encryptButton = document.querySelector(".encrypt");
const decryptButton = document.querySelector(".decrypt");

const displayNotFound = document.querySelector(".display-withoutText");
const displayFound = document.querySelector(".display-withText");

const isDisplayEmpty = () => {
  const data = document.querySelectorAll(".text-result");

  const areEmpty = Array.from(data).every((nodo) => nodo.innerText === "");

  return areEmpty;
};

const showNotFound = () => {
  displayFound.style.display = "none";
  displayNotFound.style.display = "block";
};

const showFound = () => {
  displayFound.style.display = "flex";
  displayNotFound.style.display = "none";
};

const checkText = (text) => {
  if (text === "") {
    alert("Please enter a text");
    return false;
  }

  return true;
};

const renderText = (textToRender, nodo) => {
  if (!checkText(textToRender)) return;

  nodo.innerText = textToRender;
  showFound();

  text.value = "";
};

const encrypt = (text) => {
  // Encrypt logic
};

// First render
if (isDisplayEmpty()) {
  showNotFound();
} else {
  showFound();
}

encryptButton.addEventListener("click", () => {
  const nodoToRenderText = document.querySelector(".encrypt-result");
  const textToEncrypt = text.value;

  const textEncrypted = encrypt(textToEncrypt);

  renderText(textToEncrypt, nodoToRenderText);
});

decryptButton.addEventListener("click", () => {
  const nodoToRenderText = document.querySelector(".decrypt-result");
  const textToDecrypt = text.value;

  renderText(textToDecrypt, nodoToRenderText);
});
