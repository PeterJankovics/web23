var kepekurl = [
    "1.jpg","2.jpg","3.jpg","IMG_20220528_115507.jpg","IMG_20220528_121029.jpg","IMG_20220528_121415.jpg"
]
var pardb=6;
var kattintas=0;
function init()
{
    //console.log("hao");
    kepkirakas();
}

function kepkirakas()
{

    let asztal=document.getElementById("asztal");
    let kartyak = [];
    for (let k = 0; k < 2; k++)
    {
        for(let i = 0; i < pardb; i++)
        {
        let uj=document.createElement("div");   //<div></div>
        uj.className="kartya";                     //<div class="kartya"></div>
        uj.onclick=function(){
          // csak ketto kartya fent
          if (kattintas < 2)
          {
            uj.style.backgroundImage="url(kepek/" + kepekurl[i]+ ")";
            uj.dataset.felforditva="true";
          } 
          kattintas++;
          if (kattintas === 2)
          {
            setTimeout(visszafordit, 2000)
          }

        };
        kartyak.push(uj);

        asztal.appendChild(uj);
        }
    }   
    kartyak=kever(kartyak)
    
    for (let i = 0; i < kartyak.length; i++)
    {
      asztal.appendChild(kartyak[i]);     
    }
}
function visszafordit()
{
  const lapok= document.getElementById("asztal").children;
  //console.log(lapok);
  const aktiv = [];
  for (let i = 0; i < lapok.length; i++)
  {
    if (lapok[i].dataset.felforditva === "true")
    {
      aktiv.push(lapok[i]);
    }
  }

//console.log(aktiv);
  if (aktiv[0].style.backgroundImage !== aktiv[1].style.backgroundImage)
  {
    aktiv[0].style.backgroundImage ="";
    aktiv[1].style.backgroundImage ="";
    
  }
  else
  {
    //part talaltunk
    aktiv[0].onclick="";
    aktiv[0].onclick="";
    if(!vanemeg())
    {
      nyertel();
    }
  }
  aktiv[0].dataset.felforditva="";
  aktiv[1].dataset.felforditva="";
  kattintas = 0;
}
function vanemeg()
{
  const lapok= document.getElementById("asztal").children;
  //console.log(lapok);
  let darab = 0;
  for (let i = 0; i < lapok.length; i++)
  {
    if (lapok[i].style.backgroundImage === "")
    {
      darab++;
    }
  }
  return darab > 0;
}

function nyertel()
{
  let uj=document.createElement("div");
  uj.innerHTML="Game Over";
  
}
//const points = [40, 100, 1, 5, 25, 10];  

function kever(points) {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  return points;
}