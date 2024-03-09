import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="map"
export default class extends Controller {
  connect() {
    let apiKey = "";

    fetch("/key/show")
      .then((response) => response.json())
      .then((data) => {
        apiKey = data.api_key;
      })
      .catch((error) => console.error("Error fetching API_KEY:", error));

    let latitud = document.querySelector(".latitud");
    let longitud = document.querySelector(".longitud");
    let ubicacion = document.querySelector(".ubicacion");

    let coordenadas =
      latitud.value && longitud.value
        ? [[latitud.value, longitud.value], 18]
        : [[19.24997, -103.72714], 13];

    let map = L.map("map").setView(...coordenadas);
    let popup = L.popup();

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.Control.geocoder({
      position: "topright",
      apiKey: apiKey,
      placeholder: "Buscar dirección o lugar",
    }).addTo(map);

    function onMapClick(e) {
      popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
    }

    map.on("click", function (e) {
      latitud.value = e.latlng.lat;
      longitud.value = e.latlng.lng;

      fetch(
        `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${latitud.value}&lon=${longitud.value}&format=json`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          ubicacion.value = `Nombre del lugar: ${data.display_name
            .split(",")
            .slice(0, 3)
            .join(", ")}.
          Codigo Postal: ${data.address.postcode}.
          Ciudad: ${data.address.city}.
          Pais: ${data.address.country}`;
        })
        .catch((error) => {
          console.error("Hubo un problema con la solicitud:", error);
        });
    });

    map.on("click", onMapClick);
  }
}
