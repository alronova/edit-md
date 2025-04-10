let edit = document.getElementById("editor");
let preview = document.getElementById("previewer");
window.onload = () => {
    let markedData = marked.parse(edit.value);
    preview.innerHTML = markedData;
}
edit.addEventListener("input", () => {
    let markedData = marked.parse(edit.value);
    preview.innerHTML = markedData;
    console.log(markedData);
});