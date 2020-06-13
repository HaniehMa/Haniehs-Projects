
$(document).scroll(function(){
    var temp = $(this).scrollTop();
    if(temp == 0){
        $('#head_top>section:nth-of-type(3)>div').css('background-color','rgba(255, 255, 255, .5)') ; 
        $('#head_top>section:nth-of-type(3)>div>a:nth-of-type(1)').css('color','rgba(255, 255, 255, .9)')
        $('#head_top>section:nth-of-type(3)>div>a').css('color','rgba(255, 255, 255, .9)')
        $('#head_top>section:nth-of-type(3)>div').css('box-shadow','none')
    }
    else if(temp >= 10){
    $('#head_top>section:nth-of-type(3)>div').css('background-color','#f0f6f7')
    $('#head_top>section:nth-of-type(3)>div>a').css('color','dimgray')
    $('#head_top>section:nth-of-type(3)>div>a:nth-of-type(1)').css('color','mediumseagreen')
    $('#head_top>section:nth-of-type(3)>div').css('box-shadow','0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)')
         
        
    }
})

$(document).scroll(function(){
    var temp = $(this).scrollTop();
    if(temp >= 180){
        $('#nav_bar').css('opacity','0') ; 
        $('#nav_bar').css('visibility','hidden') ;
    }
    else{
        $('#nav_bar').css('opacity','1') ;  
        $('#nav_bar').css('visibility','visible') ;
        
    }
})