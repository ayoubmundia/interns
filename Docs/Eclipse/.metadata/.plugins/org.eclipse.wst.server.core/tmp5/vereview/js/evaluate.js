function starmarkIN(item){
    var onStar = parseInt($(item).data('value'), 10); // The star currently selected
    var stars = $(item).parent().children('span.star');
    for (i = 0; i < onStar; i++) {
        if(i==0){
            $(stars[i]).addClass('hover1');
            if(stars.data('bool') == false)
                $(".star-text").text("1 star: Bad");
        }else if(i==1){
            $(stars[i-1]).addClass('hover2');
            $(stars[i]).addClass('hover2');
            if(stars.data('bool') == false)
                $(".star-text").text("2 star: Poor")
        }else if(i==2){
            $(stars[i-2]).addClass('hover3');
            $(stars[i-1]).addClass('hover3');
            $(stars[i]).addClass('hover3');
            if(stars.data('bool') == false)
                $(".star-text").text("3 star: Average");
        }else if(i==3){
            $(stars[i-3]).addClass('hover4');
            $(stars[i-2]).addClass('hover4');
            $(stars[i-1]).addClass('hover4');
            $(stars[i]).addClass('hover4');
            if(stars.data('bool') == false)
                $(".star-text").text("4 star: Great");
        }else if(i==4){
            $(stars[i-4]).addClass('hover5');
            $(stars[i-3]).addClass('hover5');
            $(stars[i-2]).addClass('hover5');
            $(stars[i-1]).addClass('hover5');
            $(stars[i]).addClass('hover5');
            if(stars.data('bool') == false)
                $(".star-text").text("5 star: Excellent");
        }
    }
}
function starmarkOUT(item){
    var x = $(item).parent().children('span.star');
    x.removeClass('hover1');
    x.removeClass('hover2');
    x.removeClass('hover3');
    x.removeClass('hover4');
    x.removeClass('hover5');
    if(x.data('bool') == false){
        $(".star-text").text("Roll over stars, then click to rate");
    }   
}

function starmark(item){
    $(".body-review").css("display", "block");  
    var onStar = parseInt($(item).data('value'), 10);
    var stars = $(item).parent().children('span.star');
    stars.data('bool', 'true');
    for (i = 0; i < stars.length; i++) {
        $(stars[i]).css("background-color", "#A0A0A0");
    }
    for (i = 0; i < onStar; i++) {
        if(i==0){
            $(stars[i]).css("background-color", "#ff0000");
            $(".star-text").text("1 star: Bad");
        }else if(i==1){
            $(stars[i-1]).css("background-color", "#ff8000");
            $(stars[i]).css("background-color", "#ff8000");
            $(".star-text").text("2 star: Poor");
        }else if(i==2){
            $(stars[i-2]).css("background-color", "#FFCC36");
            $(stars[i-1]).css("background-color", "#FFCC36");
            $(stars[i]).css("background-color", "#FFCC36");
            $(".star-text").text("3 star: Average");
        }else if(i==3){
            $(stars[i-3]).css("background-color", "#00ff40");
            $(stars[i-2]).css("background-color", "#00ff40");
        $(stars[i-1]).css("background-color", "#00ff40");
            $(stars[i]).css("background-color", "#00ff40");
            $(".star-text").text("4 star: Great");
        }else if(i==4){
            $(stars[i-4]).css("background-color", "#007d00");
            $(stars[i-3]).css("background-color", "#007d00");
            $(stars[i-2]).css("background-color", "#007d00");
            $(stars[i-1]).css("background-color", "#007d00");
            $(stars[i]).css("background-color", "#007d00");
            $(".star-text").text("5 star: Excellent");
        }
    }
} 
function pass(){
    var star = $(".star-text").text();
    var title = $("#title").val();
    var body = $("#body").val();
    var myVar = JSON.stringify({star: star, title: title, body:body})
    console.log("Ilyass");
    $.ajax({
        url: 'evaluate',
        type : 'POST',
        data: 'jsonData=' + myVar,
        dataType: 'json',
        success:function(){
            console.log('l7wa');
        }
    });
}

