//Write a JavaScript program to copy a string to the clipboard.
function copyTextClipboard(char) {
  const textarea = document.createElement("textarea");
  textarea.value = char;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  const select =
    document.getSelection().rangeCount > 0
      ? document.getSelection.getRangeAt(0)
      : false;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  if (select) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(select);
  }
}
