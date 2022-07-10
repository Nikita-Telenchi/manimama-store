function onmentr(){
    img = document.getElementById('img')
    img.src = '/img/chat_green.svg'
}

function onmlev(){
    img = document.getElementById('img')
    img.src = '/img/chat_white.svg'
}

function onmenter_card(element) {
    array_icon = document.querySelectorAll('.b_head_card_country')

    switch(element.id){
        case '0': 
        array_icon[0].style.borderBottomColor = "white"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '1': 
        array_icon[1].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '2': 
        array_icon[2].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '3': 
        array_icon[3].style.borderBottomColor = "white"
        element.style.backgroundColor = "#226679"
        element.style.color = "white" 
        break
        case '4': 
        array_icon[4].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '5': 
        array_icon[5].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '6': 
        array_icon[6].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '7': 
        array_icon[7].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '8': 
        array_icon[8].style.borderBottomColor = "white"
        element.style.backgroundColor = "#226679"
        element.style.color = "white" 
        break
        case '9':
        array_icon[9].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
        case '10': 
        array_icon[10].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        break
    }

}

function onmleave_card(element){
    array_icon = document.querySelectorAll('.b_head_card_country')
    array_dones = document.querySelectorAll('.img_done__card_country')

    switch(element.id){
        case '0': 
        array_icon[0].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[0].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
       
        break
        case '1': array_icon[1].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[1].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '2': array_icon[2].style.borderBottomColor = "rgba(0, 0, 0, 0.1)"
        if(array_dones[2].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '3': array_icon[3].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[3].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '4': array_icon[4].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[4].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '5': array_icon[5].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[5].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '6': array_icon[6].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[6].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '7': array_icon[7].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[7].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '8': array_icon[8].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[8].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '9': array_icon[9].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[9].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
        case '10': array_icon[10].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        if(array_dones[10].style.visibility == "hidden"){
            element.style.backgroundColor = "white"
            element.style.color = "black"
        }
        break
    }
        
   
}



function onclick_card(element){
    array_dones = document.querySelectorAll('.img_done__card_country')
    array_icon = document.querySelectorAll('.b_head_card_country')
    array_cards = document.querySelectorAll('.card_country')

   for( i = 0; i < array_cards.length; i++){
    console.log("WORKING...")
   }

    switch(element.id){
        case '0': 
            array_dones.forEach(elem => {
                elem.style.visibility = "hidden"
            });
            array_cards.forEach(e => {
                e.style.backgroundColor = "white"
                e.style.color = "black"
            })
            array_dones[0].style.visibility = "visible"
            element.style.backgroundColor = "#226679"
            element.style.color = "white"
            array_icon[0].style.borderBottomColor = "white"  
        
        // else {
        //     array_dones[0].style.visibility = "hidden"
        //     element.style.backgroundColor = "white"
        //     element.style.color = "black"
        //     array_icon[0].style.borderBottomColor = "rgba(0, 0, 0, 0.1)"  
        // }
      
        break
        case '1':   array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });   array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        })
         array_dones[1].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[1].style.borderBottomColor = "white"  
        break
        case '2':   array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });    array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        })
         array_dones[2].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[2].style.borderBottomColor = "white"  
        break
        case '3':  array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        }) 
         array_dones[3].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[3].style.borderBottomColor = "white"  
        break 
        case '4':   array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        })
        array_dones[4].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[4].style.borderBottomColor = "white"  
        break 
        case '5':  array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        })
        array_dones[5].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[5].style.borderBottomColor = "white"  
        break 
        case '6':  array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        })
        array_dones[6].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[6].style.borderBottomColor = "white"   
        break 
        case '7':
            array_dones.forEach(elem => {
                elem.style.visibility = "hidden"
            });
            array_cards.forEach(e => {
                e.style.backgroundColor = "white"
                e.style.color = "black"
            })    
        array_dones[7].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[7].style.borderBottomColor = "white"   
        break 
        case '8':
        array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        }); 
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        }) 
        array_dones[8].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[8].style.borderBottomColor = "white"   
        break
        case '9': 
         array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        }); 
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        }) 
        array_dones[9].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[9].style.borderBottomColor = "white"  
        break
        case '10':  
        array_dones.forEach(elem => {
            elem.style.visibility = "hidden"
        });
        array_cards.forEach(e => {
            e.style.backgroundColor = "white"
            e.style.color = "black"
        }) 
        array_dones[10].style.visibility = "visible"
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
        array_icon[10].style.borderBottomColor = "white"  
        break
    }



}




