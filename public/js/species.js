document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/species")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("species-container");
      container.innerHTML = data.map(species => `
        <div class="bg-white shadow-lg border rounded-xl p-4 hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-bold text-green-700 mb-1">${species.name}</h3>
          <p><span class="font-semibold">Habitat:</span> ${species.habitat}</p>
          <p><span class="font-semibold">Status:</span> <span class="text-red-600">${species.status}</span></p>
        </div>
      `).join('');
    })
    .catch(err => {
      document.getElementById("species-container").innerHTML = `<p class="text-red-600">Failed to load species data.</p>`;
    });
});
