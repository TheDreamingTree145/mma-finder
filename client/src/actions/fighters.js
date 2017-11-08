export function fetchFighters() {
  fetch('/api/fighters')
    .then(response => respons.json())
    .then(fighters => console.log(fighters))
}
