'use strict'

let loadwrapper = document.querySelector('.load_wrapper')

window.addEventListener("DOMContentLoaded", () => {
  loadwrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
})

window.addEventListener("load", () => {
  setTimeout(() => {
    loadwrapper.style.display = "none";
    document.body.style.overflow = "visible";
  }, 2000);
}) 