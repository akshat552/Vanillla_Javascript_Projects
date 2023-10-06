const btn= document.querySelectorAll('.buttons')
const body = document.querySelector("body")


btn.forEach(function( button) {
    button.addEventListener('click', (e)=>{
        if(e.target.id==="orange"){
            body.style.backgroundColor="orange";
        }
    
        if(e.target.id==="pink"){
            body.style.backgroundColor=e.target.id;
        }
    
        if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id;
        }
    
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id;
        }
    
        
    
    })
});