$(function()
{
 
    var $mainMenuItems = $("#main-menu ul").children("li") , totalMainMenuItems = $mainMenuItems.length , openedIndex = 2,
    
    
    init = function() {
        binEvents () ;
        
        if (validIndex(openedIndex))
            animatedItem ($mainMenuItems.eq(openedIndex) ,true,700) ;
            
    } ;
    
    var binEvents = function (){
        $mainMenuItems.children(".image").click(function() {

        var newIndex = $(this).parent().index() ;
        var $items = $mainMenuItems.eq(newIndex) ;
            
            if (openedIndex === newIndex)
                {
                    animatedItem ($items ,false,250) ;
                    openedIndex = -1 ; 
                }
        else {
            
            if (validIndex(newIndex)) {
                animatedItem($mainMenuItems.eq(openedIndex) , false , 250) ; 
                openedIndex = newIndex ; 
                animatedItem ($items ,true,250) ; 
            }
        }
    }) ;   
        
        $(".button").hover(
            function()
            {
               $(this).addClass("hovered") ;
            } , 
            
            function()
            {
                $(this).removeClass("hovered") ; 
            }
        ) ; 
        
        $(".button").click(function()
            {
            var newIndex = $(this).index() ; 
            
            buttonAnimation(newIndex) ; 
        });
    };
    
    
    
    var animatedItem = function($items , toOpen , speed)
    {
        var $colorImage = $items.find(".color") ,
        itemParam = toOpen ? {width: "420px"}: {width:"140px"} , 
        colorImageParam = toOpen ? {left: "0px"} : {left: "140px"} ;
        
        
        $colorImage.animate(colorImageParam , speed) ; 
        $items.animate(itemParam , speed) ; 
    } ;
    
    var validIndex = function (indexToCheck)
        {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems) ; 
        } ; 
    
    var buttonAnimation = function(newIndex)
{
    var $items = $mainMenuItems.eq(newIndex) ;
            
    if (openedIndex === newIndex)
    {
        animatedItem ($items ,false,250) ;
        openedIndex = -1 ; 
    }
    else {
            
        if (validIndex(newIndex)) {
        animatedItem($mainMenuItems.eq(openedIndex) , false , 250) ; 
        openedIndex = newIndex ; 
        animatedItem ($items ,true,250) ; 
            }
                           
        }    
} ;
    
    init() ;  
    
}) ;


