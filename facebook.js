

const sidebarNavItems = [
    {
        icon: "group",
        title: "Bạn bè",
    },
    {
        icon: "group",
        title: "Bạn bè",
    },
    {
        icon: "group",
        title: "Bạn bè",
    },
    {
        icon: "group",
        title: "Bạn bè",
    },
];

function eventSidebarNavClick() {
    const sidebarNavExpand = document.querySelector("#sidebar__navigate__expand");
    const content = document.querySelector("#sidebar__navigate__content");
    sidebarNavItems.map((item) => {
        const childItem = document.createElement("a");
        childItem.setAttribute('class', 'child__expand')
        childItem.innerHTML = `
        <div class="wrapper__sidebar__item">
          <div class="wrapper__sidebar__item__icon">
            <span class="material-icons"> ${item.icon} </span>
          </div>
          <div class="wrapper__sidebar__item__title">${item.title}</div>
        </div>`;
        content.append(childItem);
    });

    sidebarNavExpand.remove();
    const sideBarCollapse = document.createElement("a");
    sideBarCollapse.innerHTML = `<div class="wrapper__sidebar__item">
        <div class="wrapper__sidebar__item__icon item__more">
        <span class="material-icons"> expand_less </span>
        </div>
        <div class="wrapper__sidebar__item__title">Ẩn bớt</div>
    </div>`;
    sideBarCollapse.addEventListener("click", () => {
        const listItemRemove = document.querySelectorAll(
            "#sidebar__navigate__content .child__expand"
        );
        listItemRemove.forEach((x) => x.remove());
        sideBarCollapse.remove();
        const sidebarExpand = document.createElement("a");
        sidebarExpand.setAttribute("id", "sidebar__navigate__expand");
        sidebarExpand.innerHTML = `<div class="wrapper__sidebar__item">
        <div class="wrapper__sidebar__item__icon item__more">
          <span class="material-icons"> expand_more </span>
        </div>
        <div class="wrapper__sidebar__item__title">Xem thêm</div>
      </div>`;
        sidebarExpand.addEventListener("click", () => {
            eventSidebarNavClick();
        });
        content.append(sidebarExpand);
    });
    content.append(sideBarCollapse);
}
document
    .querySelector("#sidebar__navigate__expand")
    .addEventListener("click", eventSidebarNavClick);


const sidebarShortcutItems = [
    {
        image: "./assets/images/crazy_ball.png",
        title: "Bạn bè",
    },
    {
        image: "./assets/images/crazy_ball.png",
        title: "Bạn bè",
    },

];

function eventSidebarShortcutClick() {
    const sidebarNavExpand = document.querySelector("#shortcut__expand");
    const content = document.querySelector("#sidebar__shortcut");
    sidebarShortcutItems.map((item) => {
        const childItem = document.createElement("a");
        childItem.setAttribute('class', 'child__expand')
        childItem.innerHTML = `<div class="wrapper__sidebar__item">
        <div class="wrapper__sidebar__item__icon">
          <div class="shortcut">
            <img src="${item.image}" alt="" />
          </div>
        </div>
        <div class="wrapper__sidebar__item__title">
          ${item.title}
        </div>
      </div>`;
        content.append(childItem);
    });

    sidebarNavExpand.remove();
    const sideBarCollapse = document.createElement("a");
    sideBarCollapse.innerHTML = `<div class="wrapper__sidebar__item">
        <div class="wrapper__sidebar__item__icon item__more">
        <span class="material-icons"> expand_less </span>
        </div>
        <div class="wrapper__sidebar__item__title">Ẩn bớt</div>
    </div>`;
    sideBarCollapse.addEventListener("click", () => {
        const listItemRemove = document.querySelectorAll(
            "#sidebar__shortcut .child__expand"
        );
        listItemRemove.forEach((x) => x.remove());
        sideBarCollapse.remove();
        const sidebarExpand = document.createElement("a");
        sidebarExpand.setAttribute("id", "shortcut__expand");
        sidebarExpand.innerHTML = `<div class="wrapper__sidebar__item">
        <div class="wrapper__sidebar__item__icon item__more">
          <span class="material-icons"> expand_more </span>
        </div>
        <div class="wrapper__sidebar__item__title">Xem thêm</div>
      </div>`;
        sidebarExpand.addEventListener("click", () => {
            eventSidebarShortcutClick();
        });
        content.append(sidebarExpand);
    });
    content.append(sideBarCollapse);
}
document.querySelector("#shortcut__expand").addEventListener('click', eventSidebarShortcutClick)


document.querySelectorAll(".header__center__item").forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll(".header__center__item").forEach(ele => {
            ele.setAttribute('class', 'header__center__item')
        })
        item.setAttribute('class', 'header__center__item active')
    })
})

const toggleHeader = document.querySelector(".header__toggle")
let toggleHeaderState = false
toggleHeader.addEventListener('click', () => {
    const sidebar = document.querySelector('.wrapper__sidebar')
    if (!toggleHeaderState) {
        sidebar.style.display = "flex"
        toggleHeader.setAttribute('class', 'header__toggle active')
    }
    else {
        sidebar.style.display = "none"
        toggleHeader.setAttribute('class', 'header__toggle')
    }
    toggleHeaderState = !toggleHeaderState
})

