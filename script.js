let theme = localStorage.getItem("theme");
let edit = document.getElementById("editor");
let preview = document.getElementById("previewer");
window.onload = () => {
  let data = localStorage.getItem("mkd-data");
  edit.value = data;
  let markedData = marked.parse(data);
  preview.innerHTML = markedData;

  if (theme === "dark") {
    t_img.src = "res/sun.png";
    d_img.src = "res/download-dark.png";
  } else if (theme === "light") {
    t_img.src = "res/moon.png";
    d_img.src = "res/download-light.png";
  }
};
edit.addEventListener("input", () => {
  let markedData = marked.parse(edit.value);
  preview.innerHTML = markedData;
  console.log(markedData);
  localStorage.setItem("mkd-data", edit.value);
});

if (theme) {
  document.body.setAttribute("data-theme", theme);
}

let switcher = document.getElementById("theme-switch");
let t_img = document.getElementById("theme-img");
let d_img = document.getElementById("download-img");
switcher.addEventListener("click", switchTheme);

function switchTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    t_img.src = "res/sun.png";
    d_img.src = "res/download-dark.png";
  } else if (newTheme === "light") {
    t_img.src = "res/moon.png";
    d_img.src = "res/download-light.png";
  }
}

let download = document.getElementById("download");
download.addEventListener("click", downloadFile);

function downloadFile() {
  let data = localStorage.getItem("mkd-data");
  let blob = new Blob([data], { type: "text/markdown" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = "edit.md";
  a.click();
}
