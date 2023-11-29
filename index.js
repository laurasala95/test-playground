$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').css('background-color','rgba(0,0,0,1)');
        } else {
            $('.navbar').css('background-color','rgba(0,0,0,0.1)');
        }
    });

    if(! localStorage.getItem("cookieBar")) {
        $('#cookieBar').css('display','flex');
    } else {
        $('#cookieBar').css('display','none');
    }

    $('#defaultOpen').click();
});

function openMenuMobile() {
    $('#navbarLinkContainer').css('left','0');
}
function closeMenuMobile() {
    $('#navbarLinkContainer').css('left','-100%');
}

function changeTabContent(el, num) {

    $("#tabContentTitle").html('');
    $("#tabContentText").html('');
    $('#loading').show();

    $.ajax({
        url: "assets/ajax/tab"+num+".json", 
        success: function(result){
            //simulate delay to show loader
            setTimeout(()=>{
                $('#loading').hide();
                $("#tabContentTitle").html(result.item.title);
                $("#tabContentText").html(result.item.content);
            }, 500);
        },
        error: function(e) {
            console.log(e);
        }
    });

    $('.tab-link').removeClass('active');
    $(el).parent().addClass('active');

    $('.tab-link').children().children().removeClass('fa-angle-down');
    $('.tab-link').children().children().addClass('fa-angle-up');
    $(el).children().removeClass('fa-angle-up');
    $(el).children().addClass('fa-angle-down');
    
}

function hideCookieBar() {
    $('#cookieBar').css('display','none');
    localStorage.setItem("cookieBar", "hidden");
}

function validateForm() {
    let x = document.getElementById('email');
    let y = document.getElementById('message');
    if(x.value.length == 0 || y.value.length == 0) {
        if (x.value.length == 0 ) {
            x.style.border = "1px solid red";
            x.setAttribute("placeholder", "email must be filled");
        } else {
            x.style.border = "1px solid #fff";
        }
        if (y.value.length == 0) {
            y.style.border = "1px solid red";
            y.setAttribute("placeholder", "message must be filled");
        } else {
            y.style.border = "1px solid #fff";
        }
        return false;
    }
    
  }