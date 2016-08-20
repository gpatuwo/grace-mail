// console.log('its working');
document.addEventListener("DOMContentLoaded", () => {
  let lis = document.querySelectorAll(".sidebar-nav li");
  [].forEach.call(lis, function(li) {
    li.addEventListener("click", (e)=> {
      let newLoc = li.innerText.toLowerCase();
      window.location.hash = newLoc;
    });
  });
});
