 Shery.imageEffect("#back", {style: 5, config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7560975609756098},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.49,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":14.5,"range":[0,100]}}, gooey: true})

document.querySelector("#main")
.addEventListener("click", function(){
    
})

const texts = [
   {
      text1: "David Chang",
      text2: "Gives Zero",
      text3: "Funks."
    }, 
    {
      text1: "Serena Williams",
      text2: "Plays Without",
      text3: "Any Limits."
    },
    {
      text1: "Gordon Ramsay",
      text2: "Cooks Without",
      text3: "Any Restraints."
    },
    {
      text1: "Beyoncé Knowlesy",
      text2: "Performs Beyond",
      text3: "All Expectations."

    },
    {
      text1: "Harry Potter",
      text2: "Wears Magical",
      text3: "Round Glasses."
    }


  ];
  
  const text1 = document.querySelector("#heroleft .elem h1:nth-child(1)");
const text2 = document.querySelector("#heroleft .elem h1:nth-child(2)");
const text3 = document.querySelector("#heroleft .elem h1:nth-child(3)");
let currentIndex = 0;

function updateText() {
    const currentText = texts[currentIndex];
  
    gsap.timeline()
      .to([text1, text2, text3], { y: -50, opacity: 0, duration: 0.3 })
      .call(() => {
        text1.textContent = currentText.text1;
        text2.textContent = currentText.text2;
        text3.textContent = currentText.text3;
      })
      .to([text1, text2, text3], { y: 0, opacity: 1, duration: 0.3 });
  
    currentIndex = (currentIndex + 1) % texts.length;
  }

  document.querySelector("#main").addEventListener("click", updateText);