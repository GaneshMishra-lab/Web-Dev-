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
       <div style="display: flex; justify-content: center; margin-top: 1.25rem;">
    <img src="${data[0].flags.svg}" style="width: 250px;">
</div>

<div style="margin-top: 1rem; text-align: center;">
    <h1 style="font-weight: 600; font-size: 2rem;">${data[0].name.common}</h1>
</div>

<div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <h1 style="font-weight: 600; font-size: 1rem; margin-bottom: 0;">Capital:</h1>
    <span style="font-weight: 500; color: #1f2937;">${data[0].capital[0]}</span>
</div>

<div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <h1 style="font-weight: 600; font-size: 1rem; margin-bottom: 0;">Continents:</h1>
    <span style="font-weight: 500; color: #1f2937;">${data[0].continents[0]}</span>
</div>

<div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <h1 style="font-weight: 600; font-size: 1rem; margin-bottom: 0;">Population:</h1>
    <span style="font-weight: 500; color: #1f2937;">${data[0].population}</span>
</div>

<div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <h1 style="font-weight: 600; font-size: 1rem; margin-bottom: 0;">Currency:</h1>
    <span style="font-weight: 500; color: #1f2937;">${Object.keys(data[0].currencies)[0]}</span>
</div>

<div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
    <h1 style="font-weight: 600; font-size: 1rem; margin-bottom: 0;">Common Languages:</h1>
    <span style="font-weight: 500; color: #1f2937;">
        ${Object.values(data[0].languages).join(", ")}
    </span>
</div>`


    });
});
