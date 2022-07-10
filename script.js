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

    if( element.style.backgroundColor = "white" ){
    array_icon[element.id].style.borderBottomColor = "white" 
    element.style.backgroundColor = "#226679"
    element.style.color = "white"
    }

}




function onmleave_card(element){
    array_icon = document.querySelectorAll('.b_head_card_country')
    array_dones = document.querySelectorAll('.img_done__card_country')
 
    if(array_dones[element.id].style.visibility == "hidden"){

        array_icon[element.id].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        element.style.backgroundColor = "white"
        element.style.color = "black"
       
    }else if(array_dones[element.id].style.visibility == "visible"){

        array_icon[element.id].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
    }   
   
}




function onclick_card(element){
    array_dones = document.querySelectorAll('.img_done__card_country')
    array_icon = document.querySelectorAll('.b_head_card_country')
    array_cards = document.querySelectorAll('.card_country')

    // if(array_dones[element.id].style.visibility == "visible"){
    //     array_dones.forEach(elem => {
    //         elem.style.visibility = "hidden"
    //     });
    //     array_icon[element.id].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
    //     element.style.backgroundColor = "white"
    //     element.style.color = "black"
       
    // }else 

 
    
    if( array_dones[element.id].style.visibility == "visible"){
        array_dones[element.id].style.visibility = "hidden"
        array_icon[element.id].style.borderBottomColor = "rgba(0, 0, 0, 0.1)" 
        element.style.backgroundColor = "white"
        element.style.color = "black"
    }else{
        array_dones[element.id].style.visibility = "visible"
        array_icon[element.id].style.borderBottomColor = "white" 
        element.style.backgroundColor = "#226679"
        element.style.color = "white"
    }

    // if(array_dones[element.id].style.visibility == "hidden"){
    //     // array_dones.forEach(elem => {
    //     //     elem.style.visibility = "hidden"
    //     // });
    //     array_dones[element.id].style.visibility = "visible"
    //     array_icon[element.id].style.borderBottomColor = "white" 
    //     element.style.backgroundColor = "#226679"
    //     element.style.color = "white"
    // }
    

}




