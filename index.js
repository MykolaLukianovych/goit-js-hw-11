import{S as p,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(o){const r="https://pixabay.com/api/",s="47394920-a4032b33a38ab12c89a369f6a",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`
        <a class="gallery-item" href="${s}">
        <div class="all-gallery">
        <img src="${r}" alt="${i}">
        <div class="discription">
        <p class="discr-text">Likes <span>${e}</span></p>
        <p class="discr-text">Views <span>${t}</span></p>
        <p class="discr-text">Comments <span>${a}</span></p>
        <p class="discr-text">Downloads <span>${u}</span></p>
        </div>
        </div>
        </a>
    
    `).join("")}const d=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new p(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});d.addEventListener("submit",h);function h(o){o.preventDefault(),l.innerHTML="",c.style.display="block";const r=o.target.elements.query.value.trim();if(r===""){n.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none";return}f(r).then(s=>{if(s.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=m(s.hits);l.innerHTML=i,y.refresh()}).catch(s=>{n.error({title:"Error",message:"Something went wrong. Please try again later",position:"topRight"})}).finally(()=>{c.style.display="none",o.target.reset()})}
//# sourceMappingURL=index.js.map
