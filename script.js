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


}

// function onment_card_p_j(){
//   let labeles =  document.querySelectorAll('.label__card')
//   labeles.forEach(element => {
//     element.style.backgroundColor = "rgba(0, 0, 0, 0)"
//   })

// } 
// function onmlea_card_p_j(){
//     let labeles =  document.querySelectorAll('.label__card')
//     labeles.forEach(element => {
//       element.style.backgroundColor = "rgba(0, 0, 0, 0)"
//     })
//  }

function onclick_label(element){

    let inputs = document.querySelectorAll('.input_card')
    let labeles = document.querySelectorAll('.label__card')
    let fake_inputs = document.querySelectorAll('.fake_input__card')

    console.log(element.id)

   

    labeles.forEach(e => {
        if(element == e){
            e.style.backgroundColor =  "#FACC15" 
        }else{
            e.style.backgroundColor =  "rgba(0, 0, 0, 0)"
        }

    })

    inputs.forEach(e => {
        if(element.id == e.id){
            e.style.display =  "none" 
        }else{
            e.style.display =  "none"
        }

    })

  
    // switch(element.id){
    //     case 'label__card1':
    //         value_click_label(element)
    //         break
    //     case 'label__card2':
    //         value_click_label(element)
    //         break
    //     case 'label__card3':
    //         value_click_label(element)
    //         break
    // }

    function value_click_label2(){
        switch(element.id){
            case 'label__card1':
                return 'fi-1'
                break
            case 'label__card2':
                return 'fi-2'
                break
            case 'label__card3':
                return 'fi-3'
                break
        }
    }

    function value_click_label(){
        switch(element.id){
            case 'label__card1':
                return 'fi-1'
                break
            case 'label__card2':
                return 'fi-2'
                break
            case 'label__card3':
                return 'fi-3'
                break
        }
    }
    
}


function onclick_toggle_pill(elem){
    let text_block_sharehoder = document.getElementById('text__how_it_works')
    let text_block_sharehoder2 = document.getElementById('text__how_it_works2')

    if(elem.checked){
        text_block_sharehoder.style.display = "none"
        text_block_sharehoder2.style.display = "block"
    }else{
        text_block_sharehoder2.style.display = "none"
        text_block_sharehoder.style.display = "block"
    }
}

