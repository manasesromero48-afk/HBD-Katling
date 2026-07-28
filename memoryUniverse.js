document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("globalMemories");

    if (!container) return;

    const memoryImages = [
        { src: "img/katling1.jpg", type: "katling" },
        { src: "img/katling2.jpg", type: "katling" },
        { src: "img/katling3.jpg", type: "katling" },
        { src: "img/katling4.jpg", type: "katling" },
        { src: "img/katling5.jpg", type: "katling" },
        { src: "img/katling6.jpg", type: "katling" },
        { src: "img/katling7.jpg", type: "katling" },
        { src: "img/katling8.jpg", type: "katling" },

        { src: "img/lorena1.jpg", type: "lorena" },
        { src: "img/lorena2.jpg", type: "lorena" },
        { src: "img/lorena3.jpg", type: "lorena" }
    ];

    let queue = [];
    let index = 0;

    function shuffle(){

        queue=[...memoryImages];

        for(let i=queue.length-1;i>0;i--){

            const j=Math.floor(Math.random()*(i+1));

            [queue[i],queue[j]]=[queue[j],queue[i]];

        }

        index=0;

    }

    shuffle();

    function nextPhoto(){

        if(index>=queue.length){

            shuffle();

        }

        return queue[index++];

    }

    /*==========================
      EXPLOSIÓN DE PARTÍCULAS
    ==========================*/

    function createStarExplosion(x,y){

        for(let i=0;i<20;i++){

            const particle=document.createElement("span");

            particle.className="starParticle";

            particle.style.left=x+"px";

            particle.style.top=y+"px";

            const angle=Math.random()*Math.PI*2;

            const distance=40+Math.random()*60;

            particle.style.setProperty("--dx",
                Math.cos(angle)*distance+"px");

            particle.style.setProperty("--dy",
                Math.sin(angle)*distance+"px");

            container.appendChild(particle);

            particle.addEventListener("animationend",()=>{

                particle.remove();

            });

        }

    }

    /*==========================
      SECUENCIA COMPLETA
    ==========================*/

    function createMemorySequence(){

        const photo=nextPhoto();

        const x=Math.random()*(window.innerWidth-180)+90;

        const y=Math.random()*(window.innerHeight-220)+90;

        /* Estrella */

        const star=document.createElement("div");

        star.className="memoryStar";

        star.innerHTML="✦";

        star.style.left=x+"px";

        star.style.top=y+"px";

        container.appendChild(star);

        /* Explosión */

        setTimeout(()=>{

            createStarExplosion(x,y);

            star.classList.add("explode");

        },2000);

        /* Foto */

        setTimeout(()=>{

            star.remove();

            const img=document.createElement("img");

            img.src=photo.src;

            img.className="floatingMemory "+photo.type;

            img.style.left=x+"px";

            img.style.top=y+"px";

            container.appendChild(img);

            img.addEventListener("animationend",()=>{

                img.remove();

            });

        },2700);

    }

    createMemorySequence();

    setInterval(()=>{

        if(document.querySelectorAll(".floatingMemory").length<4){

            createMemorySequence();

        }

    },5000);

});