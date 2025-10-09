import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as o}from"./assets/vendor-CgTBfC_f.js";const n=document.querySelector(".gallery"),l=[{preview:"../public/plan-min.jpg",original:"../public/plan@4x-min.jpg",description:"Planning Project"},{preview:"./goit-js-hw-09/public/lamp-min.jpg",original:"./goit-js-hw-09/public/lamp@4x-min.jpg",description:"A Bulb In Hand"},{preview:"./public/dev-motto-min.jpg",original:"./public/dev-motto@4x-min.jpg",description:"A Motto On The Phone Screen"},{preview:"./public/mettroom-min.jpg",original:"./public/mettroom@4x-min.jpg",description:"Meeting Room"},{preview:"./public/chillroom-min.jpg",original:"./public/chillroom@4x-min.jpg",description:"Leisure Room"},{preview:"./public/office-min.jpg",original:"./public/office@4x-min.jpg",description:"IT Company Office"},{preview:"./public/workspace-min.jpg",original:"./public/workspace@4x-min.jpg",description:"Workspace"},{preview:"./public/work-min.jpg",original:"./public/work@4x-min.jpg",description:"Girl Working At The Computer"},{preview:"./public/meet-min.jpg",original:"./public/meet@4x-min.jpg",description:"Working Meeting"}],r=l.map(({preview:e,original:i,description:p})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${p}"
    />
  </a>
</li>`).join("");n.insertAdjacentHTML("beforeend",r);new o(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
