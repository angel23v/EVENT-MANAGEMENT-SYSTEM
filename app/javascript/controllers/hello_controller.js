import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="hello"
export default class extends Controller {
  connect() {
    alert("OK");
    console.log("CONECTADO");
  }
}
