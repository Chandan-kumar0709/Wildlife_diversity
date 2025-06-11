document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("response-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const feedback = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    try {
      const res = await fetch("/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback)
      });

      if (res.ok) {
        msg.classList.remove("hidden");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Server error.");
    }
  });
});
