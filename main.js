$(document).ready(function () {
    $(".radio-btn").click(function () {
      $(".radio-inner").toggleClass("active"); /*Aca cuando le  hacemos click se pone "activo"*/ 
      $("body").toggleClass("dark");
    });
  });

// /Dise-oWebseg/form.html
if(window.location.pathname === "/form.html" || window.location.pathname === "/Dise-oWebseg/form.html") {
  addEventListener("load", () => {
    const form = document.getElementById('form-inscription');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)
      fetch("https://disenowebfinal.onrender.com/suscribirse", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json"}
      }).then((res) => res.json())
      .then((res) => {
        console.log(res);
        form.reset();
      })
    })
  })
}
