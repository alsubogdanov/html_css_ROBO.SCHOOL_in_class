const body = document.querySelector("body");
const myModal = document.getElementById("myModal");
function openModal(index) {
  console.log(index);
  myModal.style.display = "flex";
  body.classList.add("noscroll");
}

function closeModal() {
  console.log(event);

  if (
    event.target === myModal ||
    event.target === document.getElementById("closeModalBtn")
  ) {
    myModal.style.display = "none";
    body.classList.remove("noscroll");
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

//carousel
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let cards = Array.from(carousel.children);
const visibleCount = 3; //сколько карточек видно одновременно
// const cardWidth = 130; // 120px + margin (2*5)
const cardWidth = carousel.querySelector(".coache").offsetWidth + 20; // +margin

let currentIndex = visibleCount; //текущая позиция (мы сразу сдвигаемся на visibleCount, т.к. в начале будут клоны)

function cloneCards() {
  const first = cards.slice(0, visibleCount).map((el) => el.cloneNode(true));
  console.log("first");
  console.log(first);

  const last = cards.slice(-visibleCount).map((el) => el.cloneNode(true));
  console.log("last");
  console.log(last);

  first.forEach((el) => carousel.appendChild(el));
  last
    .reverse()
    .forEach((el) => carousel.insertBefore(el, carousel.firstChild));

  cards = Array.from(carousel.children);
}

function updatePosition(animated = true) {
  console.log(currentIndex);
  if (!animated) carousel.style.transition = "none";
  else carousel.style.transition = "transform 0.3s ease";

  const offset = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${offset}px)`;

  const maxIndex = cards.length - 2 * visibleCount;
  const relativeIndex = currentIndex - visibleCount;
  const progressPercent = (relativeIndex / (maxIndex - 1)) * 100;

  document.querySelector(".progress-fill").style.width = `${progressPercent}%`;
}

function setup() {
  cloneCards();
  updatePosition(false); //Мгновенно "перепрыгнуть" к нужной позиции (в центр карусели, после клонов)
}

setup();
nextBtn.addEventListener("click", () => {
  console.log(currentIndex); // 1. Вывод текущего индекса
  currentIndex++; // 2. Сдвигаемся вправо на 1 карточку
  updatePosition(); // 3. Применяем анимацию прокрутки

  if (currentIndex === cards.length - visibleCount) {
    // 4. Если дошли до клонированных карточек в конце (край)
    setTimeout(() => {
      currentIndex = visibleCount; // 5. Мгновенно возвращаемся в начало
      updatePosition(false); //    ...без анимации
    }, 300); // 6. Ждём, пока закончится анимация (в CSS — 0.3s)
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  updatePosition();

  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = cards.length - 2 * visibleCount;
      updatePosition(false);
    }, 300);
  }
});

//20.07 Form

const formBtn = document.getElementById("FormBtn");

const userTel = document.getElementById("tel");
const userEmail = document.getElementById("email");
const userName = document.getElementById("name");
const formResult = document.querySelector(".form_result");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userCheckboxes = document.querySelectorAll(
    'fieldset input[type="checkbox"]:checked'
  );
  const selectedLanguages = Array.from(userCheckboxes).map((item) => item.id);

  const userExperiance = document
    .querySelector('input[name="experiance"]:checked')
    .getAttribute("data-val");

  const userTopic = document.querySelector("#topic");
  const selectedUserTopic = userTopic.value;
  const userNameVal = userName.value.trim();
  const userEmailVal = userEmail.value.trim();
  const userTelVal = userTel.value.trim();

  console.log(userTelVal);
  if (
    validation(
      userNameVal,
      userTelVal,
      userEmailVal,
      selectedUserTopic,
      selectedLanguages,
      userExperiance
    )
  ) {
    console.log("data was send");
  }
});

function validation(name, tel, email, topic, lng, exp) {
  if (!name || !tel || !email || !topic || !lng) {
    formResult.textContent = "Пожалуйста, заполните все обязательные поля";
    formResult.style.color = "#d5a412";
    setTimeout(() => {
      formResult.textContent = "";
    }, 2000);
    return;
  }

  return true;
}
///
//mobile
const headerWrap = document.querySelector(".header__wrap");
const closeBurgerBtn = document.querySelector(".close_btn");
const burgerBtn = document.querySelector(".burger_btn");
burgerBtn.addEventListener("click", () => {
  headerWrap.classList.add("open");
  body.classList.add("noscroll");
});
closeBurgerBtn.addEventListener("click", () => {
  headerWrap.classList.remove("open");
  body.classList.remove("noscroll");
});
