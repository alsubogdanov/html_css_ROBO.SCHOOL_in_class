const tabsData = [
  {
    title: "Web Development",
    text: "We build modern and responsive websites for your business.",
    img: "https://picsum.photos/400/200?random=1",
    link: "https://example.com/web",
  },
  {
    title: "Graphic Design",
    text: "Our team creates stunning visual designs that stand out.",
    img: "https://picsum.photos/400/200?random=2",
    link: "https://example.com/design",
  },
  {
    title: "Marketing",
    text: "Grow your brand with targeted marketing strategies.",
    img: "https://picsum.photos/400/200?random=3",
    link: "https://example.com/marketing",
  },
];

const buttonsContainer = document.getElementById("tabs-buttons");
const contentContainer = document.getElementById("tab-content");

// создание табов
tabsData.forEach((tab, index) => {
  const btn = document.createElement("button"); // <button></button>
  btn.textContent = tab.title; // <button>Graphic Design</button>
  btn.addEventListener("click", () => showTab(index));
  buttonsContainer.appendChild(btn);
});

function showTab(index) {
  const tab = tabsData[index];
  contentContainer.innerHTML = `
    <img src="${tab.img}" alt="${tab.title}">
    <h3>${tab.title}</h3>
    <p>${tab.text}</p>
    <a href="${tab.link}" target="_blank">Show more</a>
  `;

  // обновление стилей табов
  const allButtons = buttonsContainer.querySelectorAll("button");

  allButtons.forEach((btn) => btn.classList.remove("active"));
  allButtons[index].classList.add("active");
}

// первый таб по умолчанию
showTab(2);
