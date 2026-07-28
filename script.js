//=========================================
// INTRO CINEMATOGRÁFICA
//=========================================

const introItems=document.querySelectorAll(".hidden");

let delay=800;

introItems.forEach(item=>{

    setTimeout(()=>{

        item.classList.add("show");

    },delay);

    delay+=1200;

});



// ==========================================
// INICIO DE EXPERIENCIA Y MÚSICA
// ==========================================

const startButton = document.getElementById("startButton");
const audioPlayer = document.getElementById("music");


if(startButton){

    startButton.addEventListener("click",()=>{

        if(audioPlayer){

            audioPlayer.play();

        }

        startButton.innerHTML="✨ Nuestra historia comienza ✨";

        startButton.style.transform="scale(1.1)";

    });

}



// ==========================================
// REPRODUCTOR PROFESIONAL
// ==========================================

const playButton = document.getElementById("playButton");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const player = document.querySelector(".music-player");


if(audioPlayer && playButton){


    playButton.addEventListener("click",()=>{


        if(audioPlayer.paused){


            audioPlayer.play();

            playButton.textContent="⏸";


            if(player){

                player.classList.add("music-playing");

            }


        }else{


            audioPlayer.pause();

            playButton.textContent="▶";


            if(player){

                player.classList.remove("music-playing");

            }


        }


    });



    audioPlayer.addEventListener("loadedmetadata",()=>{


        if(progress){

            progress.max = audioPlayer.duration;

        }


        if(duration){

            duration.textContent =
            formatTime(audioPlayer.duration);

        }


    });



    audioPlayer.addEventListener("timeupdate",()=>{


        if(progress){

            progress.value =
            audioPlayer.currentTime;

        }


        if(currentTime){

            currentTime.textContent =
            formatTime(audioPlayer.currentTime);

        }


    });



    if(progress){

        progress.addEventListener("input",()=>{


            audioPlayer.currentTime =
            progress.value;


        });

    }


}



function formatTime(seconds){


    let minutes =
    Math.floor(seconds / 60);


    let secondsFinal =
    Math.floor(seconds % 60);



    if(secondsFinal < 10){

        secondsFinal =
        "0" + secondsFinal;

    }


    return minutes + ":" + secondsFinal;


}



// ==========================================
// CARTAS OCULTAS
// ==========================================

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("click",()=>{


        card.classList.toggle("open");


    });


});



// ==========================================
// ANIMACIÓN AL APARECER
// ==========================================

const elements = document.querySelectorAll(
".section, .card, .cover, #letter"
);



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });


},

{
    threshold:.2
}

);



elements.forEach(el=>{


    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition="1s";


    observer.observe(el);


});



// ==========================================
// RAZONES ALEATORIAS
// ==========================================

const reasonButton =
document.getElementById("reasonButton");


const reasonText =
document.getElementById("reasonText");



const reasons=[


"Porque tu forma de ser hace especial cualquier momento ✨",

"Porque tienes una manera única de iluminar los días 🌙",

"Porque cada recuerdo contigo tiene un valor especial 💜",

"Porque hay personas que llegan y dejan una huella bonita ⭐",

"Porque mereces saber lo importante que eres 💫"

];



if(reasonButton){


    reasonButton.addEventListener("click",()=>{


        let random =
        Math.floor(Math.random()*reasons.length);


        reasonText.innerHTML =
        reasons[random];


    });


}



// ==========================================
// ESTRELLAS FLOTANTES
// ==========================================

function createStar(){


    const star =
    document.createElement("span");


    star.className="floating-star";


    star.style.left =
    Math.random()*100+"vw";


    star.style.animationDuration =
    (5+Math.random()*10)+"s";


    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },15000);


}


setInterval(createStar,700);



// ==========================================
// ESTRELLAS FUGACES
// ==========================================

function createShootingStar(){


    const star =
    document.createElement("div");


    star.className="shooting-star";


    star.style.left =
    Math.random()*100+"vw";


    star.style.top =
    Math.random()*40+"vh";


    star.style.animationDuration =
    (2 + Math.random()*3)+"s";


    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },5000);


}


setInterval(createShootingStar,3500);



// ==========================================
// ABRIR CARTA + PARTICULAS
// ==========================================

const letter =
document.getElementById("letter");



if(letter){


    letter.addEventListener("click",()=>{


        letter.classList.add("open");



        for(let i=0;i<25;i++){


            const sparkle =
            document.createElement("span");


            sparkle.className="sparkle";


            sparkle.style.left="50%";

            sparkle.style.top="50%";



            sparkle.style.setProperty(
                "--x",
                (Math.random()*300-150)+"px"
            );


            sparkle.style.setProperty(
                "--y",
                (Math.random()*300-150)+"px"
            );



            letter.appendChild(sparkle);



            setTimeout(()=>{


                sparkle.remove();


            },2000);


        }


    });


}



// ==========================================
// EFECTO DE MOUSE
// ==========================================

document.addEventListener("mousemove",(e)=>{


    document.body.style.setProperty(
        "--x",
        e.clientX+"px"
    );


    document.body.style.setProperty(
        "--y",
        e.clientY+"px"
    );


});

// ==========================================
// JUEGO ATRAPA LAS ESTRELLAS
// ==========================================

const startGame =
document.getElementById("startGame");

const starGame =
document.getElementById("starGame");

const scoreText =
document.getElementById("score");

const gameMessage =
document.getElementById("gameMessage");


let score = 0;


if(startGame){


startGame.addEventListener("click",()=>{


    score = 0;

    scoreText.innerHTML =
    "Estrellas encontradas: 0 ⭐";


    gameMessage.innerHTML =
    "";


    let gameTime = 20;


    const timer =
    setInterval(()=>{


        createGameStar();


    },700);



    setTimeout(()=>{


        clearInterval(timer);


        gameMessage.innerHTML =
"✨ Encontraste " + score + " estrellas... pero ninguna brilla como la persona que inspiró esta historia 🌙💙";


    },20000);



});

}



function createGameStar(){


    const star =
    document.createElement("span");


    star.className="game-star";


    star.innerHTML="⭐";


    star.style.left =
    Math.random()*85+"%";


    star.style.top =
    Math.random()*80+"%";


    starGame.appendChild(star);



    star.addEventListener("click",()=>{


        score++;


        scoreText.innerHTML =
        "Estrellas encontradas: "
        + score +
        " ⭐";


        star.remove();


    });



    setTimeout(()=>{


        star.remove();


    },2000);


}

// ==========================================
// CONSTELACIÓN DE RECUERDOS
// ==========================================

const constellation =
document.getElementById("constellation");


const memoryMessage =
document.getElementById("memoryMessage");


const memories = [

"✨ Hay personas que llegan y hacen especial cualquier momento.",

"🌙 Algunos recuerdos brillan incluso con el paso del tiempo.",

"⭐ Cada estrella guarda una pequeña historia.",

"💙 Lo más bonito no siempre se ve, a veces se siente.",

"🌌 Algunas personas son como estrellas: únicas e imposibles de olvidar."

];


if(constellation){


let discovered = 0;


const totalStars = memories.length;



memories.forEach((memory,index)=>{


    const star =
    document.createElement("span");


    star.className="memory-star";

    star.innerHTML="⭐";


    star.style.left =
    (15 + index*17) + "%";


    star.style.top =
    (20 + Math.random()*50) + "%";



    constellation.appendChild(star);



    star.addEventListener("click",()=>{


        if(star.classList.contains("found")){

            return;

        }


        star.classList.add("found");


        discovered++;


        star.style.opacity=".4";


        memoryMessage.innerHTML =
        memory;



        if(discovered === totalStars){


            setTimeout(()=>{


                memoryMessage.innerHTML =

                "🌌✨ Has descubierto toda la constelación... " +

                "cada estrella guardaba un recuerdo, " +

                "pero la más brillante siempre será la historia que llevas en el corazón ⭐💙";


                constellation.classList.add("complete");


            },800);


        }


    });



});


}

// ==========================================
// EL CIELO RESPONDE
// ==========================================


const responseStars = 
document.querySelectorAll(".response-star");


const skyMessage =
document.getElementById("skyMessage");


const finalStar =
document.getElementById("finalStar");



let starsFound = 0;



responseStars.forEach(star => {


    star.addEventListener("click",()=>{


        // Evitar tocar la misma estrella varias veces

        if(star.classList.contains("found")){

            return;

        }



        star.classList.add("found");

        star.classList.add("active");

        createSparkles(star);

        starsFound++;



        skyMessage.innerHTML = 
        star.dataset.message;



        setTimeout(()=>{

            star.classList.remove("active");

        },800);




        // Cuando todas las estrellas fueron descubiertas

        if(starsFound === responseStars.length){



            setTimeout(()=>{


                skyMessage.innerHTML =

                "✨ Has escuchado todos los mensajes del cielo... ahora una última estrella tiene algo que decirte 🌌";



                finalStar.style.display="block";



            },1500);



        }



    });



});




// La estrella final ahora solo es decorativa

if(finalStar){

    finalStar.addEventListener("click",()=>{

        skyMessage.innerHTML =
        "✨ El universo todavía guarda una sorpresa para el final del viaje.";

        finalStar.style.transform =
        "translate(-50%,-50%) scale(1.4)";

    });

}

// ==========================================
// PARTICULAS AL TOCAR ESTRELLAS
// ==========================================


function createSparkles(star){


    for(let i = 0; i < 15; i++){


        const sparkle =
        document.createElement("span");


        sparkle.className =
        "sparkle-particle";


        const x =
        (Math.random()*120-60)+"px";


        const y =
        (Math.random()*120-60)+"px";



        sparkle.style.setProperty(
            "--x",
            x
        );


        sparkle.style.setProperty(
            "--y",
            y
        );



        sparkle.style.left =
        star.offsetLeft + "px";


        sparkle.style.top =
        star.offsetTop + "px";



        document
        .getElementById("skyBox")
        .appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },1500);


    }

}

/*==================================================
      HERO CINEMATOGRÁFICO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const photo = document.getElementById("heroPhoto");
    const glow = document.getElementById("photoGlow");

    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");

    const line = document.getElementById("line");

    const title = document.getElementById("title");
    const name = document.getElementById("name");

    const button = document.getElementById("startJourney");

    const hero = document.getElementById("hero");

    const starsLayer = document.getElementById("starsLayer");


    /*=============================
        CREAR ESTRELLAS
    =============================*/

    function createStars(){

        for(let i=0;i<180;i++){

            const star=document.createElement("div");

            star.className="star";

            star.style.left=Math.random()*100+"%";

            star.style.top=Math.random()*100+"%";

            star.style.animationDelay=Math.random()*3+"s";

            star.style.opacity=Math.random();

            star.style.transform=`scale(${Math.random()+0.3})`;

            starsLayer.appendChild(star);

        }

    }

    createStars();


    /*=============================
        EFECTO MÁQUINA
    =============================*/

    function typeWriter(element,text,speed){

        return new Promise(resolve=>{

            let i=0;

            element.innerHTML="";

            element.classList.add("show");

            const interval=setInterval(()=>{

                element.innerHTML+=text.charAt(i);

                i++;

                if(i>=text.length){

                    clearInterval(interval);

                    resolve();

                }

            },speed);

        });

    }


    /*=============================
        PELÍCULA
    =============================*/

    async function intro(){


        /* Espera inicial */

        await new Promise(r=>setTimeout(r,1200));


        /* Halo */

        glow.classList.add("show");


        /* Foto */

        photo.classList.add("show");


        /* Espera a que termine de enfocarse */

        await new Promise(r=>setTimeout(r,4200));


        await typeWriter(

            text1,

            "Hay personas que llegan para quedarse en el corazón...",

            45

        );


        await new Promise(r=>setTimeout(r,800));


        await typeWriter(

            text2,

            "Hoy quiero celebrar a una de ellas.",

            45

        );


        await new Promise(r=>setTimeout(r,700));


        line.classList.add("show");


        await new Promise(r=>setTimeout(r,600));


        title.classList.add("show");


        await new Promise(r=>setTimeout(r,700));


        name.classList.add("show");


        await new Promise(r=>setTimeout(r,700));


        button.classList.add("show");

    }

    intro();



    /*=============================
        COMENZAR VIAJE
    =============================*/

    button.addEventListener("click",()=>{


        hero.style.transition="2s";

        hero.style.transform="scale(1.15)";

        hero.style.opacity="0";


        /* Música */

        const music=document.getElementById("backgroundMusic");

        if(music){

            music.play().catch(()=>{});

        }


        setTimeout(()=>{

            hero.style.display="none";

        },2000);

    });

});

/*==================================
UNIVERSO INTERACTIVO
==================================*/

const universeMessages = {

    interstellar:{
        title:"🌌 Interstellar",
        text:"Esta película me recordó a ti porque habla del tiempo, de las personas importantes y de cómo algunas conexiones trascienden cualquier distancia."
    },

    aot:{
        title:"⚔️ Attack on Titan",
        text:"Cada vez que veía algo relacionado con este anime me acordaba de que era uno de tus favoritos."
    },

    nature:{
        title:"🌿 Naturaleza",
        text:"Sé que disfrutas los lugares tranquilos, los árboles y esos momentos donde todo parece estar en paz."
    },

    travel:{
        title:"✈️ Viajar",
        text:"Ojalá puedas conocer todos los lugares que sueñas y vivir aventuras increíbles."
    },

    music:{
        title:"🎵 Música",
        text:"Siempre hay canciones que terminan guardando recuerdos especiales."
    },

    photo:{
        title:"📷 Fotografía",
        text:"Cada fotografía captura un instante... y algunos instantes merecen quedarse para siempre."
    },

    flowers:{
        title:"🌹 Rosas",
        text:"Porque las rosas me recuerdan la delicadeza y la belleza."
    },

    clash:{
        title:"👑 Clash Royale",
        text:"No podía faltar uno de los juegos que sé que te gusta."
    },

    survivor:{
        title:"🎮 Survivor.io",
        text:"Otro pequeño detalle que fui conociendo sobre ti."
    }

};

/*=========================
CONFIGURACIÓN
=========================*/

let universeFound = 0;
const totalUniverseItems = 9;

const heart = document.querySelector(".center-heart");
const items = document.querySelectorAll(".planet-item[data-id]");

if(heart){
    heart.classList.add("heart-locked");
}

/*=========================
CLICK EN LOS PLANETAS
=========================*/

items.forEach(item=>{

    item.addEventListener("click",()=>{

        const info = universeMessages[item.dataset.id];

        openUniverseModal(info.title,info.text);

        // Marcar como visitado
        if(!item.classList.contains("visited")){

            item.classList.add("visited");

            universeFound++;

            if(universeFound===totalUniverseItems){

                unlockHeart();

            }

        }

    });

});

/*=========================
DESBLOQUEAR CORAZÓN
=========================*/

function unlockHeart(){

    heart.classList.remove("heart-locked");

    heart.classList.add("heart-unlocked");

}

/*=========================
CLICK EN EL CORAZÓN
=========================*/

if(heart){

    heart.addEventListener("click",()=>{

        if(!heart.classList.contains("heart-unlocked")){

            alert("💖 Primero descubre todos los pequeños detalles del universo.");

            return;

        }

        openUniverseModal(

            "❤️ El centro de todo este universo",

`Todo este pequeño universo fue construido con las cosas que fui descubriendo sobre ti.

Cada película...
Cada canción...
Cada juego...
Cada viaje...
Cada pequeño detalle...

Todos terminaron formando este universo.

Pero si tuviera que escoger la estrella más bonita...

te escogería a ti.

✨ Feliz cumpleaños, Katling. ❤️`

        );

    });

}

/*=========================
VENTANA
=========================*/

function openUniverseModal(title,text){

    const modal=document.createElement("div");

    modal.className="memoryModal";

    modal.innerHTML=`

        <div class="memoryBox">

            <h2>${title}</h2>

            <p>${text}</p>

            <button>Cerrar</button>

        </div>

    `;

    document.body.appendChild(modal);

    modal.querySelector("button").onclick=()=>{

        modal.remove();

    };

    modal.onclick=(e)=>{

        if(e.target===modal){

            modal.remove();

        }

    };

}

function unlockHeart(){

    heart.classList.remove("heart-locked");

    heart.classList.add("heart-unlocked");

}

/*==========================
REPRODUCTOR FINAL
==========================*/

const giftAudio=document.getElementById("giftAudio");
const giftPlay=document.getElementById("giftPlay");
const giftProgress=document.getElementById("giftProgress");
const giftCurrent=document.getElementById("giftCurrent");
const giftDuration=document.getElementById("giftDuration");

const giftAudio2=document.getElementById("giftAudio2");
const giftPlay2=document.getElementById("giftPlay2");
const giftProgress2=document.getElementById("giftProgress2");
const giftCurrent2=document.getElementById("giftCurrent2");
const giftDuration2=document.getElementById("giftDuration2");

function setupPlayer(audio,play,progress,current,duration,cover){

    if(!audio) return;

    audio.addEventListener("loadedmetadata",()=>{

        progress.max=audio.duration;
        duration.textContent=formatTime(audio.duration);

    });

    audio.addEventListener("timeupdate",()=>{

        progress.value=audio.currentTime;

        const porcentaje=(audio.currentTime/audio.duration)*100;

        progress.style.setProperty("--progress",porcentaje+"%");

        current.textContent=formatTime(audio.currentTime);

    });

    progress.addEventListener("input",()=>{

        audio.currentTime=progress.value;

    });

    play.addEventListener("click",()=>{

        if(audio.paused){

            audio.play();
            play.innerHTML="⏸";

            if(cover) cover.classList.add("playing");

        }else{

            audio.pause();
            play.innerHTML="▶";

            if(cover) cover.classList.remove("playing");

        }

    });

}

setupPlayer(
    giftAudio,
    giftPlay,
    giftProgress,
    giftCurrent,
    giftDuration,
    document.querySelector(".giftCover")
);

setupPlayer(
    giftAudio2,
    giftPlay2,
    giftProgress2,
    giftCurrent2,
    giftDuration2,
    document.querySelector(".secondCover")
);

giftAudio.addEventListener("ended",()=>{

    giftPlay.innerHTML="▶";

    document
        .querySelector(".giftCover")
        ?.classList.remove("playing");

    const second=document.getElementById("secondSong");

    second.style.display="block";

    second.scrollIntoView({

        behavior:"smooth"

    });

});

/*=========================================
ÚLTIMA ESTRELLA
=========================================*/

const lastStar=document.getElementById("lastStar");

if(lastStar){

lastStar.addEventListener("click",()=>{

lastStar.style.transform="scale(35)";

lastStar.style.opacity="0";

document.body.style.transition="2s";

document.body.style.background="#fff";

setTimeout(()=>{

document.body.style.background="#000";

playEnding();

},1800);

});

}

/*=========================================
MOTOR DEL FINAL
=========================================*/

const universe=document.getElementById("universeEnding");
const intro=document.getElementById("introEnding");
const canvas=document.getElementById("universeCanvas");
const ctx=canvas.getContext("2d");

// Canvas oculto para generar las letras
const textCanvas=document.createElement("canvas");
const textCtx=textCanvas.getContext("2d");

textCanvas.width=1600;
textCanvas.height=900;
let stars=[];
let animationId;

function resizeUniverse(){

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

}

window.addEventListener("resize",resizeUniverse);

resizeUniverse();

function createUniverse(){

    stars=[];

    for(let i=0;i<2500;i++){

        stars.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            tx:Math.random()*canvas.width,
            ty:Math.random()*canvas.height,

            size:Math.random()*2+0.5,

            alpha:Math.random()*0.8+0.2

        });

    }

    if(animationId){

        cancelAnimationFrame(animationId);

    }

    loopUniverse();

setTimeout(()=>{

    cinematicSequence();

},2500);

}

function loopUniverse(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    for(const star of stars){

        star.x+=(star.tx-star.x)*0.05;
        star.y+=(star.ty-star.y)*0.05;

        ctx.globalAlpha=star.alpha;

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.size,0,Math.PI*2);

        ctx.fill();

    }

    animationId=requestAnimationFrame(loopUniverse);

}

async function playEnding(){

    universe.style.display="flex";

    requestAnimationFrame(()=>{

        universe.classList.add("show");

    });

    await sleep(1200);

    await write("Durante toda esta página...");

    await sleep(1800);

    await write("Intenté hablarte yo.");

    await sleep(1800);

    await write("Pero ahora...");

    await sleep(1800);

    await write("Quiero que hable el universo.");

    await sleep(2500);

    intro.style.transition="2s";

    intro.style.opacity="0";

    await sleep(2000);

    intro.style.display="none";

    createUniverse();

}

function sleep(ms){

    return new Promise(r=>setTimeout(r,ms));

}

function write(text){

    return new Promise(resolve=>{

        intro.innerHTML="";

        intro.style.opacity="1";

        let i=0;

        const timer=setInterval(()=>{

            intro.innerHTML+=text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(timer);

                resolve();

            }

        },45);

    });

}

const messages=[

"Cada estrella...",
"Es un recuerdo.",
"Cada luz...",
"Es un momento.",
"Y entre millones...",
"Siempre encontré la tuya."

];

let currentMessage=0;

function showMessage(i){

    if(i>=messages.length){

    cinematicSequence();

    return;

}

    endingText.style.opacity="0";

    setTimeout(()=>{

        endingText.innerHTML=messages[i];

        endingText.style.opacity="1";

    },500);

    setTimeout(()=>{

        showMessage(i+1);

    },3200);

}

/*=========================================
FORMAR PALABRAS CON ESTRELLAS
=========================================*/

function starsToText(text){

    textCtx.clearRect(0,0,textCanvas.width,textCanvas.height);

    textCtx.fillStyle="white";
    textCtx.textAlign="center";
    textCtx.textBaseline="middle";
    textCtx.font="bold 80px Poppins";

    textCtx.fillText(
        text,
        textCanvas.width/2,
        textCanvas.height/2
    );

    const data=textCtx.getImageData(
        0,
        0,
        textCanvas.width,
        textCanvas.height
    ).data;

    const points=[];

    for(let y=0;y<textCanvas.height;y+=6){

        for(let x=0;x<textCanvas.width;x+=6){

            const index=(y*textCanvas.width+x)*4;

            if(data[index+3]>100){

                points.push({
                    x,
                    y
                });

            }

        }

    }

    return points;

}

/*=========================================
MOVER ESTRELLAS
=========================================*/

function moveStarsTo(points){

    if(points.length===0)return;

    let minX=Infinity;
    let maxX=-Infinity;
    let minY=Infinity;
    let maxY=-Infinity;

    for(const p of points){

        if(p.x<minX)minX=p.x;
        if(p.x>maxX)maxX=p.x;
        if(p.y<minY)minY=p.y;
        if(p.y>maxY)maxY=p.y;

    }

    const textWidth=maxX-minX;
    const textHeight=maxY-minY;

    const offsetX=(canvas.width-textWidth)/2-minX;
    const offsetY=(canvas.height-textHeight)/2-minY;

    for(let i=0;i<stars.length;i++){

        if(i<points.length){

            stars[i].tx=points[i].x+offsetX;
            stars[i].ty=points[i].y+offsetY;

            stars[i].size=2.6;
            stars[i].alpha=1;

        }else{

            stars[i].tx=Math.random()*canvas.width;
            stars[i].ty=Math.random()*canvas.height;

            stars[i].size=.35;
            stars[i].alpha=.15;

        }

    }

}

/*=========================================
MENSAJES
=========================================*/

const cinematicTexts=[

"El universo guarda historias...",

"Algunas duran segundos.",

"Otras permanecen para siempre.",

"Esta...",

"Es una de las que vale la pena recordar."

];

async function typeFinalMessage(element){

    element.innerHTML="";

    const line1=document.createElement("div");
    const line2=document.createElement("div");

    line2.className="name";

    element.appendChild(line1);
    element.appendChild(line2);

    const text1="Con cariño...";
    const text2="Manases";

    for(let i=0;i<=text1.length;i++){

        line1.textContent=text1.substring(0,i);

        await sleep(55);

    }

    await sleep(400);

    for(let i=0;i<=text2.length;i++){

        line2.innerHTML=
            text2.substring(0,i) +
            '<span class="heart"> ❤️</span>';

        await sleep(70);

    }

}

/*=========================================
CORAZÓN
=========================================*/

async function heartSequence(){

    const points=[];

    const scale=Math.min(canvas.width,canvas.height)/38;

    for(let t=0;t<Math.PI*2;t+=0.025){

        const x=16*Math.pow(Math.sin(t),3);

        const y=
            13*Math.cos(t)
            -5*Math.cos(2*t)
            -2*Math.cos(3*t)
            -Math.cos(4*t);

        points.push({
            x:canvas.width/2+x*scale,
            y:canvas.height/2-y*scale
        });

    }

    // Formar corazón
    moveStarsTo(points);

    await sleep(3500);

    // Crear mensaje
    const msg=document.createElement("div");

msg.id="finalMessage";

universe.appendChild(msg);

requestAnimationFrame(()=>{
    msg.style.opacity="1";
});

await sleep(500);

await typeFinalMessage(msg);

    // Mantener el final unos segundos
    await sleep(10000);

    // Desvanecer mensaje
    msg.style.opacity="0";

    // Desvanecer estrellas poco a poco
    for(let i=0;i<40;i++){

        for(const star of stars){

            star.alpha*=0.95;

        }

        await sleep(60);

    }

    await sleep(1000);

    // Fundido a negro
    universe.style.transition="3s";
    universe.style.opacity="0";
}

/*=========================================
SECUENCIA CINEMÁTICA
=========================================*/

async function cinematicSequence(){

    // Frases del universo

    for(const text of cinematicTexts){

        moveStarsTo(starsToText(text));

        await sleep(4200);

    }

    // Dispersar estrellas

    for(const star of stars){

        star.tx=Math.random()*canvas.width;
        star.ty=Math.random()*canvas.height;

        star.alpha=.25;
        star.size=.5;

    }

    await sleep(2200);

    // Feliz cumpleaños

    moveStarsTo(
        starsToText("✨ Feliz Cumpleaños ✨")
    );

    await sleep(4500);

    // Nombre

    moveStarsTo(
        starsToText("✨ KATLING ✨")
    );

    await sleep(4500);

    // Corazón

    await heartSequence();

}

/*==================================
      UNIVERSO DE RECUERDOS
==================================*/

