import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as m}from"./assets/vendor-CgTBfC_f.js";const n=document.querySelector(".gallery"),g=[{preview:"/goit-js-hw-09/img/plan-min.jpg",original:"/goit-js-hw-09/img/plan@4x-min.jpg",description:"Planning Project"},{preview:"/img/lamp-min.jpg",original:"/img/lamp@4x-min.jpg",description:"A Bulb In Hand"},{preview:"./img/dev-motto-min.jpg",original:"./img/dev-motto@4x-min.jpg",description:"A Motto On The Phone Screen"},{preview:"./img/mettroom-min.jpg",original:"./img/mettroom@4x-min.jpg",description:"Meeting Room"},{preview:"./img/chillroom-min.jpg",original:"./img/chillroom@4x-min.jpg",description:"Leisure Room"},{preview:"./img/office-min.jpg",original:"./img/office@4x-min.jpg",description:"IT Company Office"},{preview:"./img/workspace-min.jpg",original:"./img/workspace@4x-min.jpg",description:"Workspace"},{preview:"./img/work-min.jpg",original:"./img/work@4x-min.jpg",description:"Girl Working At The Computer"},{preview:"./img/meet-min.jpg",original:"./img/meet@4x-min.jpg",description:"Working Meeting"}],r=g.map(({preview:e,original:i,description:o})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${o}"
    />
  </a>
</li>`).join("");n.insertAdjacentHTML("beforeend",r);new m(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
