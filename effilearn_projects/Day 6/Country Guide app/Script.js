const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const countryName = document.getElementById("input").value;

  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalUrl)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies).name]);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );
      result.innerHTML = `
        <div class="d-flex justify-content-center mt-5">
    <img src="${data[0].flags.svg}" class="w-25">
</div>

<div class="mt-4 text-center justify-content-center">
    <h1 class="fw-semibold display-6">${data[0].name.common}</h1>
</div>

<div class="mt-4 d-flex align-items-center justify-content-center gap-2">
    <h1 class="fw-semibold h6 mb-0">Capital:</h1>
    <span class="fw-medium text-dark">${data[0].capital[0]}</span>
</div>

<div class="mt-4 d-flex align-items-center justify-content-center gap-2">
    <h1 class="fw-semibold h6 mb-0">Continents:</h1>
    <span class="fw-medium text-dark">${data[0].continents[0]}</span>
</div>

<div class="mt-4 d-flex align-items-center justify-content-center gap-2">
    <h1 class="fw-semibold h6 mb-0">Population:</h1>
    <span class="fw-medium text-dark">${data[0].population}</span>
</div>

<div class="mt-4 d-flex align-items-center justify-content-center gap-2">
    <h1 class="fw-semibold h6 mb-0">Currency:</h1>
    <span class="fw-medium text-dark">${
      Object.keys(data[0].currencies)[0]
    }</span>
</div>

<div class="mt-4 d-flex align-items-center justify-content-center gap-2">
    <h1 class="fw-semibold h6 mb-0">Common Languages:</h1>
    <span class="fw-medium text-dark">
        ${Object.values(data[0].languages).join(", ")}
    </span>
</div>

        `


    });
});
