const copyToClipboard = (ev) => {
  const resultInput = document.querySelector("#result");
  const copyToClipboard = ev.currentTarget;
  if (copyToClipboard.innerText === "Copy") {
    copyToClipboard.innerText = " Copied";
    copyToClipboard.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    copyToClipboard.innerText = "Copy";
    copyToClipboard.classList.remove("success");
  }
};

export { copyToClipboard };
