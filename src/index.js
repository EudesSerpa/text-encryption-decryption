const text = document.querySelector("#text");

const encryptButton = document.querySelector(".encrypt");
const decryptButton = document.querySelector(".decrypt");

const displayNotFound = document.querySelector(".display-withoutText");
const displayFound = document.querySelector(".display-withText");

const copyButton = document.querySelector(".btn-copy");

const validations = {
  noSpecialCharacters: {
    regex: /\W+/g,
    message: "No special characters",
  },
};

const encryptionKeys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

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

  if (validations.noSpecialCharacters.regex.test(text)) {
    alert(validations.noSpecialCharacters.message);
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
  const arrToRender = text.split("");
  const textEncrypted = arrToRender
    .map((char) => encryptionKeys[char] || char)
    .join("");

  return textEncrypted;
};

const decrypt = (text) => {
  let textDecrypted = text;

  Object.entries(encryptionKeys).forEach(([key, value]) => {
    if (text.includes(value)) {
      const regex = new RegExp(value, "g");
      textDecrypted = textDecrypted.replace(regex, key);
    }
  });

  return textDecrypted;
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

  renderText(textEncrypted, nodoToRenderText);
});

decryptButton.addEventListener("click", () => {
  const nodoToRenderText = document.querySelector(".decrypt-result");
  const textToDecrypt = text.value;

  const textDecrypted = decrypt(textToDecrypt);

  renderText(textDecrypted, nodoToRenderText);
});

copyButton.addEventListener("click", (e) => {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      const textToCopy = window.getSelection().toString();

      if (!textToCopy) {
        alert("Please select some text to copy");
        return;
      }

      navigator.clipboard.writeText(textToCopy).then(
        () => {
          e.target.innerText = "Copied!";
          e.target.disabled = true;

          setTimeout(() => {
            e.target.innerText = "Copy";
            e.target.disabled = false;
          }, 1500);
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  });
});
