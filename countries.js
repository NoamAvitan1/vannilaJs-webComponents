let countries = [];
const divWrapContainer = document.createElement("div");
divWrapContainer.className = "wrapCountriesContainer";
document.body.appendChild(divWrapContainer);

const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  countries = data;
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  await getCountries();

  const input = document.createElement("input");
  input.placeholder = "search by name";
  input.className = "searchCountriesInput";
  input.style.padding = "10px";
  input.style.borderRadius = "5px";
  input.style.outline = "none";
  input.style.border = "2px solid black";

  const countriesContainer = document.createElement("div");
  countriesContainer.className = "countriesContainer";

  const header = document.createElement("header");
  const select = document.createElement("select");
  const option = document.createElement("option");
  const optionTwo = document.createElement("option");
  const optionThree = document.createElement("option");
  const optionFour = document.createElement("option");
  option.textContent = "America";
  option.value = "America";
  optionTwo.textContent = "Europe";
  optionTwo.value = "Europe";
  optionThree.textContent = "Asia";
  optionThree.value = "Asia";
  optionFour.textContent = "All";
  optionFour.value = "All";
  select.style.width = "150px";
  select.style.padding = "10px";
  select.appendChild(option);
  select.appendChild(optionTwo);
  select.appendChild(optionThree);
  select.appendChild(optionFour);
  header.appendChild(input);
  header.appendChild(select);
  header.style.width = "80%";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  divWrapContainer.appendChild(header);
  divWrapContainer.appendChild(countriesContainer);

  renderCountries(countries, countriesContainer);

  select.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "America") {
      renderCountries(
        countries.filter((country) => country.region === "Americas"),
        countriesContainer
      );
    } else if (selectedValue === "Europe") {
      renderCountries(
        countries.filter((country) => country.region === "Europe"),
        countriesContainer
      );
    } else if (selectedValue === "Asia") {
      renderCountries(
        countries.filter((country) => country.region === "Asia"),
        countriesContainer
      );
    }
    if (selectedValue === "All") {
      renderCountries(countries, countriesContainer);
    }
  });

  input.addEventListener("input", async (event) => {
    const query = event.target.value.toLowerCase().trim();
    if (query.length > 0) {
      const filteredCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(query);
      });
      renderCountries(filteredCountries, countriesContainer);
    } else {
      renderCountries(countries, countriesContainer);
    }
  });
});

function renderCountries(countriesList, container) {
  container.innerHTML = "";
  countriesList.forEach((country) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const name = document.createElement("h3");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const wrapDataCountry = document.createElement("div");
    wrapDataCountry.className = "wrapData";

    img.src = country.flags.png;
    img.className = "countryImage";
    figure.className = "country";
    name.innerHTML = `${country.name.common}`;
    population.textContent = `population : ${country.population}`;
    population.style.fontWeight = "bold";
    region.style.fontWeight = "bold";
    region.textContent = `region : ${country.region}`;

    wrapDataCountry.appendChild(name);
    wrapDataCountry.appendChild(population);
    wrapDataCountry.appendChild(region);
    figure.appendChild(wrapDataCountry);
    figure.appendChild(img);
    container.appendChild(figure);
  });
}
