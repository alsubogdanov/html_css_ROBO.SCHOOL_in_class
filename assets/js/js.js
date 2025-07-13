const myModal = document.getElementById("myModal");
function openModal(index) {
  console.log(index);
  myModal.style.display = "flex";
}

function closeModal() {
  console.log(event);

  if (
    event.target === myModal ||
    event.target === document.getElementById("closeModalBtn")
  ) {
    myModal.style.display = "none";
  }
  // document.getElementById('myModal').style.display = 'none';
}

//tabs
const tabsData = [
  {
    sections: [
      {
        heading: "Что такое JavaScript?",
        text: "JavaScript — это язык программирования, используемый для создания интерактивных элементов на веб-страницах.",
      },
      {
        heading: "Зачем он нужен?",
        text: "С его помощью можно обрабатывать события, изменять HTML и CSS, работать с сервером и многое другое.",
      },
    ],
  },
  {
    sections: [
      {
        heading: "Функции в JavaScript",
        text: "Функции позволяют организовать код в переиспользуемые блоки.",
      },
      {
        heading: "Типы функций",
        text: "Существуют обычные, стрелочные и анонимные функции, каждая из которых имеет свои особенности.",
      },
    ],
  },
  {
    sections: [
      {
        heading: "Работа с массивами",
        text: "Массивы позволяют хранить упорядоченные коллекции данных.",
      },
      {
        heading: "Методы массивов",
        text: "Методы, такие как forEach, map и filter, помогают работать с массивами эффективно и читаемо.",
      },
      {
        heading: "Методы массивов2",
        text: "Методы, такие как forEach, map и filter, помогают работать с массивами эффективно и читаемо.",
      },
    ],
  },
];

const buttonsContainer = document.querySelector(".modal__tabs");
const contentContainer = document.querySelector(".modal__bottom-content");
const allButtons = buttonsContainer.querySelectorAll("button");

buttonsContainer.addEventListener("click", (e) => {
  // if (e.target) console.log(e.target.tagName);
  if (e.target && e.target.tagName === "BUTTON") {
    const ind = e.target.getAttribute("data-ind");
    // console.log(ind);
    showTab(ind);
  }
});

function showTab(index) {
  let data = "";
  tabsData[index].sections.forEach((item) => {
    data += `
            <h3>${item.heading}</h3>
            <p>${item.text}</p>
        `;
  });
  // console.log(data);

  contentContainer.innerHTML = data;

  // обновление стилей табов
  allButtons.forEach((btn) => btn.classList.remove("active"));
  allButtons[index].classList.add("active");
}

// первый таб по умолчанию
showTab(0);

//coache open modal
const coaches = document.getElementById("carousel");
coaches.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "BUTTON") {
    openModal(e.target.getAttribute("data-ind"));
  }
});
