const navigationItems = document.querySelectorAll(
  ".main-content__right__wrapper-images__navigation__item"
);

const wrapperImages = document.querySelectorAll(
  ".main-content__right__wrapper-images__image"
);

const wrapper = document.querySelector("#wrapper");

// const navItemName = {
//     0: navigationItems[1]
// }

for (let navItem of navigationItems) {
  navItem.addEventListener("click", ({ target }) => {
    const navItemActive = document.querySelector(
      ".main-content__right__wrapper-images__navigation__item.active"
    );

    const targetName = Number(target.getAttribute("name"));

    if (target.innerHTML !== navItemActive) {
      navItemActive.classList.remove("active");
      target.classList.add("active");
    }
    if (targetName === 2) {
      //   wrapperImages[1].style.transform = "translateX(-100%)";
      wrapper.style.transform = "translateX(-100%)";
    }
    // if (targetName === 3) {
    //   wrapperImages[2].style.transform = "translateX(-100%)";
    // }
    // console.log(targetName);
  });
}
