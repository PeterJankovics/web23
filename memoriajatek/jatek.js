var kepekurl = [
    "1.jpg","2.jpg","3.jpg","IMG_20220528_115507.jpg","IMG_20220528_121029.jpg","IMG_20220528_121415.jpg"
]
var pardb=6;

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
        uj.className="kartya";                     //<div cass="kartya"></div>
        uj.onclick=function(){
          uj.style.backgroundImage="url(kepek/" + kepekurl[i]+ ")"
          
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

const points = [40, 100, 1, 5, 25, 10];  

function kever(points) {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  return points;
}