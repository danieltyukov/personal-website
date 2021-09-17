const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const contactMe = document.querySelector("#contact-me");
const aboutMe = document.querySelector("#about-me");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    modal: true,
    width: "500px",
    height: "500px",
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
    mount: aboutMe,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Conact Me",
    width: "500",
    height: "500",
    top: 150,
    left: 250,
    right: 50,
    bottom: 50,
    mount: contactMe,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
