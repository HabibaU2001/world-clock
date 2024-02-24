function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    lostAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let hongKongElement = document.querySelector("#hong-kong");
  if (hongKongElement) {
    let hongKongDateElement = hongKongElement.querySelector(".date");
    let hongKongTimeElement = hongKongElement.querySelector(".time");
    let hongKongTime = moment().tz("Asia/Hong_Kong");

    hongKongDateElement.innerHTML = hongKongTime.format("MMMM	Do YYYY");
    hongKongTimeElement.innerHTML = hongKongTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let qatarElement = document.querySelector("#qatar");
  if (qatarElement) {
    let qatarDateElement = qatarElement.querySelector(".date");
    let qatarTimeElement = qatarElement.querySelector(".time");
    let qatarTime = moment().tz("Asia/Qatar");

    qatarDateElement.innerHTML = qatarTime.format("MMMM	Do YYYY");
    qatarTimeElement.innerHTML = qatarTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/"> All Cities </a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
