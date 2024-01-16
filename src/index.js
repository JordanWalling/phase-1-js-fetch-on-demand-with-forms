const init = () => {
  formSubmit();
};

function formSubmit() {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("input#searchByID").value;
    console.log(inputValue);
    fetch(`http://localhost:3000/movies/${inputValue}`)
      .then((resp) => resp.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
}

document.addEventListener("DOMContentLoaded", init);
