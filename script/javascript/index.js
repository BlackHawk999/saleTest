const menuItems = [
  { title: "Скидки", link: "/" },
  { title: "Акции", link: "/" },
  { title: "Промокоды", link: "/" },
  { title: "Кешбэк", link: "/" },
];

const menu = document.getElementById("header__menu");

menuItems.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = item.title;
  a.href = item.link;
  li.appendChild(a);
  menu.appendChild(li);
});

const tabs = document.getElementsByClassName("main__body-tab");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("touchstart", function (event) {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("main__body-tab--active");
    }
    event.target.classList.add("main__body-tab--active");
  });
}

document
  .getElementById("toggleButton")
  .addEventListener("touchstart", function () {
    var text = document.querySelector(".main__articles-paragraph");
    if (text.classList.contains("main__articles-paragraph--collapsed")) {
      text.classList.remove("main__articles-paragraph--collapsed");
      text.classList.add("main__articles-paragraph--expanded");
      this.textContent = "Свернуть текст";
    } else {
      text.classList.remove("main__articles-paragraph--expanded");
      text.classList.add("main__articles-paragraph--collapsed");
      this.textContent = "Развернуть текст";
    }
  });

document.querySelectorAll(".main__accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".icon");

    button.classList.toggle("active");
    icon.classList.toggle("rotate");

    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.getElementById("sidebarBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");

  sidebarToggle.addEventListener("click", () => {
      sidebar.style.transform = "translateX(0)";
  });

  closeBtn.addEventListener("click", () => {
      sidebar.style.transform = "translateX(-100%)";
  });
});
