export class Card{init(e){console.log("Card init"),document.querySelectorAll("article").forEach(e=>{e.classList.contains("main-article")===!1&&(e.parentElement.classList.contains("article-list--tile")===!1&&e.parentElement.classList.contains("article-list")===!1?e.parentElement.classList.add("card"):e.classList.add("card"))}),document.querySelectorAll(".card").forEach(t=>{t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),c=n.clientX-i.left,l=n.clientY-i.top,a=c/i.width,r=l/i.height,d=(a-.5)*2*e,u=(.5-r)*2*e,s=(a-.5)*32,o=(r-.5)*32,h=[`${1/6*-s}px ${1/6*-o}px 3px rgba(0,0,0,0.051)`,`${2/6*-s}px ${2/6*-o}px 7.2px rgba(0,0,0,0.073)`,`${3/6*-s}px ${3/6*-o}px 13.6px rgba(0,0,0,0.09)`,`${4/6*-s}px ${4/6*-o}px 24.3px rgba(0,0,0,0.107)`,`${5/6*-s}px ${5/6*-o}px 45.5px rgba(0,0,0,0.129)`,`${-s}px ${-o}px 109px rgba(0,0,0,0.18)`];t.style.cssText=`
                    transform: perspective(1000px) rotateX(${u}deg) rotateY(${d}deg);
                    box-shadow: ${h.join(", ")};
                    transition: none;
                `}),t.addEventListener("mouseleave",()=>{t.style.cssText=`
                    transform: perspective(1000px) rotateX(0) rotateY(0);
                    box-shadow: 0 0 3px rgba(0,0,0,0.051), 
                                0 0 7.2px rgba(0,0,0,0.073), 
                                0 0 13.6px rgba(0,0,0,0.09), 
                                0 0 24.3px rgba(0,0,0,0.107), 
                                0 0 45.5px rgba(0,0,0,0.129), 
                                0 0 109px rgba(0,0,0,0.18);
                    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
                 `})})}}