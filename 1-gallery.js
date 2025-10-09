import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as o}from"./assets/vendor-CgTBfC_f.js";const m="/goit-js-hw-09/assets/plan-min-C1aHAi29.jpg",r="/goit-js-hw-09/assets/plan@4x-min-3zkv11uP.jpg",g=document.querySelector(".gallery"),p=[{preview:m,original:r,description:"Planning Project"},{preview:"/img/lamp-min.jpg",original:"/img/lamp@4x-min.jpg",description:"A Bulb In Hand"},{preview:"./img/dev-motto-min.jpg",original:"./img/dev-motto@4x-min.jpg",description:"A Motto On The Phone Screen"},{preview:"./img/mettroom-min.jpg",original:"./img/mettroom@4x-min.jpg",description:"Meeting Room"},{preview:"./img/chillroom-min.jpg",original:"./img/chillroom@4x-min.jpg",description:"Leisure Room"},{preview:"./img/office-min.jpg",original:"./img/office@4x-min.jpg",description:"IT Company Office"},{preview:"./img/workspace-min.jpg",original:"./img/workspace@4x-min.jpg",description:"Workspace"},{preview:"./img/work-min.jpg",original:"./img/work@4x-min.jpg",description:"Girl Working At The Computer"},{preview:"./img/meet-min.jpg",original:"./img/meet@4x-min.jpg",description:"Working Meeting"}],a=p.map(({preview:e,original:i,description:n})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${n}"
    />
  </a>
</li>`).join("");g.insertAdjacentHTML("beforeend",a);new o(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
