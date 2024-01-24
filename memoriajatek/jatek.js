var kepekurl = [
    "1.jpg","2.jpg","3.jpg","IMG_20220528_115507.jpg","IMG_20220528_121029.jpg","IMG_20220528_121415.jpg"
]

function init()
{
    //console.log("hao");
    kepkirakas();
}

function kepkirakas()
{
    let asztal=document.getElementById("asztal");
    for(let i = 0; i < kepekurl.length(); i++)
    {
        let uj=document.createElement("img");
        uj.src="kepek/" + kepekurl[0];
        uj.width="180";
        uj.height="180";
        asztal.appendChild(uj);
    }
  
}