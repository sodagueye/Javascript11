
// Ces lignes obtiennent des références aux éléments HTML 
// avec les ID recuperation element html avec le dom
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function ajout(){
    if(inputBox.value ===''){
        alert("Ajouter une tache")
    }
    
    else{
        // creer div.
        let divs = document.createElement("div");
        // creation class html dans js
        divs.classList.add('info');
       listContainer.appendChild(divs);
       let li= document.createElement("li");
        // recuper l element ajouter 
        li.innerHTML=inputBox.value;
        // ajouter au dernier 
         divs.appendChild(li);
        
        let spans=document.createElement("span");
         divs.appendChild(spans);
        // creation button1
       let bouton1 = document.createElement("button");
      //  creation class html
        bouton1.classList.add("rouge")
        bouton1.classList.add("btn1")
        bouton1.innerHTML="to do";
         divs.appendChild(bouton1);
        
        //  creation button2
        let bouton2 = document.createElement("button");
         bouton2.classList.add("jaune");
         bouton2.classList.add("btn1")
         bouton2.innerHTML="doing";
         divs.appendChild(bouton2);
        
         
       // creation button3
         bouton2.innerHTML="doing";
         let bouton3 =  document.createElement("button");
         bouton3.classList.add("vert");
         bouton3.classList.add("btn1")
        bouton3.innerHTML="done";
        divs.appendChild(bouton3)
        

    }
    
    // changement de color des boutons 
        //  let btn2 =document.querySelector(".jaune")
        //  btn2.addEventListener('click', function() {
          
 
          // btn2.style.background = "yellow";
          // btn1.style.background = "white";
          // btn3.style.background = "white";
        // })
      // let btn3 = document.querySelector(".vert")
      //    btn3.addEventListener("click" ,function(){
      //    btn3.style.background = "green";
      //     btn1.style.background = "white";
      //     btn2.style.background = "white";

      // })
      // let btn1 =document.querySelector(".rouge")
      //   btn1.addEventListener("click",function(){
      //   btn1.style.background ="red"
      //   btn2.style.background = "white";
      //   btn3.style.background = "white";
      // changement de color

    let groupediv = document.querySelector(".info");
    let lesboutons = document.getElementsByClassName("btn1");
    
    function changerCouleur(classeBouton) {
        switch (classeBouton) {
            case "rouge":
                groupediv.style.backgroundColor = "red";
                break;
    
            case "jaune":
                groupediv.style.backgroundColor = "yellow";
                break;
    
            case "vert":
                groupediv.style.backgroundColor = "green";
                break;
    
            default:
                // Code à exécuter si aucun des cas ne correspond
                break;
        }
    }
    
    for (let i = 0; i < lesboutons.length; i++) {
        lesboutons[i].addEventListener("click", function () {
          console.log(lesboutons)
            let buttonClass = lesboutons[i].className;
            changerCouleur(buttonClass);
        });
    }
    
    inputBox.value="";
  }
          
          // let boutonStyle = getComputedStyle(this);
          // let butonBgColor= boutonStyle["backgroundColor"]
          // let groupediv = document.querySelector(".info");
          // groupediv.style.backgroundColor= butonBgColor;
        

    

      // }
      // 
      //  }

      //  
       
    

