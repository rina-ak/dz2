document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const page = body.getAttribute("data-page");

  if (page === "projects") {
    renderProjectCards();
  }
});

const projectItems = [
  {
    title: "Браслет участника шоукейса",
    type: "Мерч",
    description:
      "Силиконовый браслет «K-POP Campus Showcase» для всех, кто участвует в выступлениях.",
    price: "200 ₽",
    image: "../img/braclet.jpg",
  },
  {
    title: "Худи K-POP Campus «Practice Mode»",
    type: "Мерч",
    description:
      "Оверсайз худи в тренировочном стиле как у айдолов. Логотип кампуса, розовые акценты и принт «Practice Mode On».",
    price: "3 200 ₽",
    image: "../img/hoodi.jpg",
  },
  {
    title: "Розовый tote-bag K-POP Campus",
    type: "Мерч",
    description:
      "Хлопковая сумка с принтом кампуса. Помещает сменку для танцев и бутылку для тренировки.",
    price: "950 ₽",
    image: "../img/bag.webp",
  },
  {
    title: "Набор стикеров «K-POP Campus Mood»",
    type: "Мерч",
    description:
      "Стикеры для ноутбуков и телефонов: «кавер-тим», «центр сегодня я», «камбэк через дедлайн», «random play dance survivor».",
    price: "300 ₽",
    image: "../img/stickers.jpg",
  },
  {
    title: "Наклейки на телефон «K-POP Edit Mood»",
    type: "Мерч",
    description:
      "Лист мини-наклеек под эстетику едитов: сердечки, треки, значки камеры, подписи и розовые элементы.",
    price: "220 ₽",
    image: "../img/phone-stickers.jpg",
  },
  {
    title: "Эко-бутылка K-POP Campus «Pink Flow»",
    type: "Мерч",
    description:
      "Полупрозрачная розовая бутылка с логотипом кампуса, идеально для тренировок и съемочных дней.",
    price: "850 ₽",
    image: "../img/bottle.webp",
  },
  {
    title: "Фотокарточки студентов-айдолов",
    type: "Мерч",
    description:
      "Набор photocards в стиле айдольных коллекций: тренировочные фото, concept ver, backstage ver.",
    price: "450 ₽",
    image: "../img/photocards.webp",
  },
  {
    title: "Тематический плакат кавер-группы",
    type: "Мерч",
    description:
      "Постер с розовым неоном и именем команды в стиле промо айдольских камбэков.",
    price: "500 ₽",
    image: "../img/poster.jpeg",
  },
  {
    title: "Мини-фотобук команды",
    type: "Мерч",
    description:
      "Небольшой фотобук с кадрами из тренировок, съёмок фанкэмов и концептуальных фото.",
    price: "1 200 ₽",
    image: "../img/photobook.webp",
  },
  {
    title: "Аксессуар для танцев: розовая резинка на волосы",
    type: "Мерч",
    description:
      "Эластичная розовая резинка с логотипом кампуса, как у танцевальных стаффов на тренировках.",
    price: "150 ₽",
    image: "../img/rez.webp",
  },
  {
    title: "Лайтстик K-POP Campus",
    type: "Мерч",
    description:
      "Фирменный лайтстик кампуса с розовым свечением. Используется на шоукейсе и тренировочных выступлениях.",
    price: "2 400 ₽",
    image: "../img/lightstick.webp",
  },
  {
    title: "Бейджи ролей айдола",
    type: "Мерч",
    description:
      "Набор металлических бейджей: «Main Dancer», «Visual», «Center», «Leader». Можно крепить на рюкзак или худи.",
    price: "350 ₽",
    image: "../img/bage.webp",
  },
];

function renderProjectCards() {
  const container = document.getElementById("cardsRow");
  if (!container) return;

  projectItems.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-4";

    col.innerHTML = `
            <div class="card h-100 project-card shadow-sm">
                <img src="${item.image}"
                     class="card-img-top"
                     alt="${item.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text flex-grow-1">${item.description}</p>
                    <p class="fw-semibold mb-2">${item.price}</p>
                    <a href="request.html" class="btn mt-auto">
                        Купить
                    </a>
                </div>
            </div>
        `;
    container.appendChild(col);
  });
}
