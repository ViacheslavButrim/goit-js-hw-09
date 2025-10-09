import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as p}from"./assets/vendor-CgTBfC_f.js";const n=document.querySelector(".gallery"),r=[{preview:"/goit-js-hw-09/plan-min.jpg",original:"/goit-js-hw-09/plan@4x-min.jpg",description:"Planning Project"},{preview:"/goit-js-hw-09/lamp-min.jpg",original:"/goit-js-hw-09/lamp@4x-min.jpg",description:"A Bulb In Hand"},{preview:"./public/dev-motto-min.jpg",original:"./public/dev-motto@4x-min.jpg",description:"A Motto On The Phone Screen"},{preview:"./public/mettroom-min.jpg",original:"./public/mettroom@4x-min.jpg",description:"Meeting Room"},{preview:"./public/chillroom-min.jpg",original:"./public/chillroom@4x-min.jpg",description:"Leisure Room"},{preview:"./public/office-min.jpg",original:"./public/office@4x-min.jpg",description:"IT Company Office"},{preview:"./public/workspace-min.jpg",original:"./public/workspace@4x-min.jpg",description:"Workspace"},{preview:"./public/work-min.jpg",original:"./public/work@4x-min.jpg",description:"Girl Working At The Computer"},{preview:"./public/meet-min.jpg",original:"./public/meet@4x-min.jpg",description:"Working Meeting"}],l=r.map(({preview:e,original:i,description:o})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${o}"
    />
  </a>
</li>`).join("");n.insertAdjacentHTML("beforeend",l);new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
