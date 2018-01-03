//var thems=document.getElementById('theme').value; 

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/html");

function themchng() {
  var thems = document.getElementById('theme').value;
  editor.setTheme("ace/theme/" + thems);

}

function run() {

  var x = editor.getValue();
  document.getElementById('myframe').srcdoc = x;

}

function downld() {
  //var textToWrite = document.getElementById("content").value;
  var textToWrite = editor.getValue();
  var textFileAsBlob = new Blob([textToWrite], {
    type: 'text/plain'
  });
  var fileNameToSaveAs = "myNewFile.html";
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "My Hidden Link";
  window.URL = window.URL || window.webkitURL;
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}
