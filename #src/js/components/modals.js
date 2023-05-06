// let resizeObserver = null;

// const CLASS_LIST = {
//   MODAL: "modal",
//   MODAL_ACTIVE: "modal--active",
//   MODAL_HAS_SCROLL: "modal--has-scroll",
//   MODAL_DIALOG_BODY: "modal__dialog-body",
//   TRIGGER_OPEN: "js-modal-open",
//   TRIGGER_CLOSE: "js-modal-close"
// };

// document.addEventListener("click", (event) => {
//   //  open
//   if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
//     event.preventDefault();

//     const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
//     const modalID = target.getAttribute("href").replace("#", "");
//     const modal = document.getElementById(modalID);

//     document.body.style.paddingRight = `${getScrollbarWidth()}px`;
//     document.body.style.overflow = "hidden";

//     modal.classList.add(CLASS_LIST.MODAL_ACTIVE);

//     bindResizeObserver(modal);
//   }

//   // close
//   if (
//     event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
//     event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
//   ) {
//     event.preventDefault();

//     const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);

//     modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);

//     unbindResizeObserver(modal);

//     document.body.style.overflow = "auto";
//     document.body.style.paddingRight = "0px";
//   }
// });

// // Получаем ширину сколлбара

// const getScrollbarWidth = () => {
//   const item = document.createElement("div");

//   item.style.position = "absolute";
//   item.style.top = "-9999px";
//   item.style.width = "50px";
//   item.style.height = "50px";
//   item.style.overflow = "scroll";
//   item.style.visibility = "hidden";

//   document.body.appendChild(item);

//   // Вычисляем ширину скрола
//   const scrollBarWidth = item.offsetWidth - item.clientWidth;

//   document.body.removeChild(item);

//   return scrollBarWidth;
// };