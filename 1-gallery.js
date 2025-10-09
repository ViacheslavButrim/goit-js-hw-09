import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as n}from"./assets/vendor-CgTBfC_f.js";new n(".gallery a",{captionsData:"alt",captionDelay:250});const t=document.querySelector(".gallery"),r=[{preview:"/goit-js-hw-09/plan-min.jpg",original:"/goit-js-hw-09/plan@4x-min.jpg",description:"Planning Project"},{preview:"/goit-js-hw-09/lamp-min.jpg",original:"/goit-js-hw-09/lamp@4x-min.jpg",description:"A Bulb In Hand"},{preview:"/goit-js-hw-09/dev-motto-min.jpg",original:"/goit-js-hw-09/dev-motto@4x-min.jpg",description:"A Motto On The Phone Screen"},{preview:"/goit-js-hw-09/mettroom-min.jpg",original:"/goit-js-hw-09/mettroom@4x-min.jpg",description:"Meeting Room"},{preview:"/goit-js-hw-09/chillroom-min.jpg",original:"/goit-js-hw-09/chillroom@4x-min.jpg",description:"Leisure Room"},{preview:"/goit-js-hw-09/office-min.jpg",original:"/goit-js-hw-09/office@4x-min.jpg",description:"IT Company Office"},{preview:"/goit-js-hw-09/workspace-min.jpg",original:"/goit-js-hw-09/workspace@4x-min.jpg",description:"Workspace"},{preview:"/goit-js-hw-09/work-min.jpg",original:"/goit-js-hw-09/work@4x-min.jpg",description:"Girl Working At The Computer"},{preview:"/goit-js-hw-09/meet-min.jpg",original:"/goit-js-hw-09/meet@4x-min.jpg",description:"Working Meeting"}],g=r.map(({preview:o,original:i,description:e})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${o}"
      data-source="${i}"
      alt="${e}"
    />
  </a>
</li>`).join("");t.insertAdjacentHTML("beforeend",g);
//# sourceMappingURL=1-gallery.js.map
