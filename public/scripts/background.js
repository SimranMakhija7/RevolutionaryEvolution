var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1523820843652-f6b30d535239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
        "url(https://images.unsplash.com/photo-1535231540604-72e8fbaf8cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)",
        "url(https://images.unsplash.com/photo-1534078362425-387ae9668c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)",
        
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 2000);