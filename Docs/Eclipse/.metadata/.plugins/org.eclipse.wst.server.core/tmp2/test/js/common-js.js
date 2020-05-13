/**
 * 
 */

let lastWidth = $(window).width();

// ====== /function allows us to reset all form of popup after hiding ======

// ====== animate by minimizing text above input (it's important to mention a value in attribute id in this input to be animated also value 'input-animation' in attribute class of input)======
const minimize_text_ofInput = (this_input) => {
    $(this_input.next('label')).css('color', '#aaa');
    $(this_input).css('border-bottom', '1px solid #aaa');

    $(this_input.next('label')).animate({
        top: '0px',
        fontSize: '14px',
    },0.2);   

    this_input.parents('.nw_section_preview').find('.nw_prefix').css('color','rgba(73, 80, 87, 0.8)');
    this_input.parents('.nw_section_preview').find('.date__input').css('color','transparent');
};
// ====== /animate by minimizing text above input (it's important to mention a value in attribute id in this input to be animated also value 'input-animation' in attribute class of input)======



// ====== animate by maximizing text above input (it's important to mention a value in attribute id in this input to be animated also value 'input-animation' in attribute class of input)======
const maximize_text_ofInput = (this_input) => {
    $(this_input.next('label')).css('color', '#4285F4');
    $(this_input).css('border-bottom', '1px solid #4285F4');

    $(this_input.next('label')).animate({
        top: '-15px',
        fontSize: '12px'
    },0.2);

    this_input.parents('.nw_section_preview').find('.nw_prefix').css('color','#4285F4');
    this_input.parents('.nw_section_preview').find('.date__input').css('color','black');

};
// ====== animate by maximizing text above input (it's important to mention a value in attribute id in this input to be animated also value 'input-animation' in attribute class of input)======



// ====== check if this input is empty or not to apply functions (minimize and maximize text) ======
const check_val_input = () => {
    $('.input_animation').each(function() {
        if($(this).val() == '') {
            minimize_text_ofInput($(this));
        }else {
            maximize_text_ofInput($(this));
        }
    });
};
// setTimeout(function() {
    check_val_input();
// },40);
// ====== /check if this input is empty or not to apply functions (minimize and maximize text) ======



// ====== check if option was selected in form select ======
const check_val_select = () => {
    $('.select_animation').each(function() {
        if($(this).val()) {
            maximize_text_ofInput($(this));
        }else {
            minimize_text_ofInput($(this));
        }
    });
};
check_val_select();
// ====== /check if option was selected in form select ======



// ========== show sidebar navigation ==========
const show_sidebar_navigation = function(value_attribute, button_clicked) {
    $('.form-sidebar-nav').addClass('overlay-sidebar');
    setTimeout(function() {
        $(button_clicked).hide();
    }, 500);
    $(value_attribute).animate({
        opacity: '1',
        width: '250px'
    }, 500);
};
// ========== /show sidebar navigation ==========


// ========== hide sidebar navigation ==========
const hide_sidebar_navigation = function(value_attribute, button_clicked) {
    $('.form-sidebar-nav').removeClass('overlay-sidebar');
    setTimeout(function() {
        $(button_clicked).show();
    }, 400);
    $(value_attribute).animate({
        opacity: '0',
        width: '0px'
    }, 500);
};
// ========== /hide sidebar navigation ==========


// ========== change color access users on click button ==========
const changeColorAccessUsers = (this_button) => {
    if(this_button.hasClass('circle-accessUser-danger')) {
        this_button.removeClass('circle-accessUser-danger fas fa-minus-square');
        this_button.addClass('circle-accessUser-primary fas fa-eye');

    }else if(this_button.hasClass('circle-accessUser-primary')) {
        this_button.removeClass('circle-accessUser-primary fas fa-eye');
        this_button.addClass('circle-accessUser-success fas fa-pen-square');
        
    }else if(this_button.hasClass('circle-accessUser-success')) {
        this_button.removeClass('circle-accessUser-success fas fa-pen-square');
        this_button.addClass('circle-accessUser-danger fas fa-minus-square');
    }
};
// ========== /change color access users on click button ==========



// ========== show and hide sidebar navigation on click button "bars" ==========
{   

    $(document).ready(function() {
        $(document).on('click', '.bars-sidebar-nav', function() {
            show_sidebar_navigation('.sidebar-nav', '.button-collapse-sidebar');
        });
    });

    $(document).ready(function() {
        $(document).on('click', '.bars-sidebar-nav-onShow', function() {
            hide_sidebar_navigation('.sidebar-nav', '.button-collapse-sidebar');
        });
    });
}
// ========== /show and hide sidebar navigation on click button "bars" ==========



// ========== make adaptable changes with the screen ==========
{ 
    
    const adapte_screen = function() {
        if(lastWidth <= 768) {
            // ===== sidebar =====
            $('.hide-element').fadeOut(0);
            $('.button-collapse-sidebar').show();
            // ===== /sidebar =====


        }else {
            // ===== sidebar =====
            $('.form-sidebar-nav').removeClass('overlay-sidebar');
            $('.sidebar-nav').animate({
                opacity: '0',
                width: '0px'
            }, 0);
            $('.hide-element').fadeIn(0);
            $('.button-collapse-sidebar').hide();
            // ===== /sidebar =====
        }

    }
    adapte_screen();

    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            lastWidth = $(window).width();
            adapte_screen();

        }
    })  
    
       
};
// ========== /make adaptable changes with the screen ==========



// ========== show popup to signin or signup ==========
$(document).ready(function() {
    $(document).on('click', '.btn-action-access', function() {
        let data_form = $(this).attr('data-form');
        $('#'+data_form).css('display', 'table');
        $('.hide-options').fadeOut(50);
    });
}); 
// ========== /show popup to signin or signup ==========



// ========== close popup on click button 'close' ==========
$(document).ready(function() {
    $(document).on('click', '.close-sign', function() {
        $(".popup").fadeOut(20);
    });
});
// ========== /close popup on click button 'close' ==========



// ========== close element on click outside element ==========
$(document).mouseup(function(e){
    switch (event.which) {
        case 1: // 1 means if i click on left button mouse

            const popup__content = $(".popup__content");
            const fix__custom__popup = $('.fix__custom__popup');

            // ===== sidebar =====
            const overlay_sidebar = $(".overlay-sidebar");
            const sidebar_nav = $('.sidebar-nav'); 
            // ===== /sidebar =====

            // ===== options of menubar =====
            const options = $('.sidebar-nav');         
            // ===== /options of menubar =====

            // If the target of the click isn't the popup__content
            if((!popup__content.is(e.target) && popup__content.has(e.target).length === 0)&&(fix__custom__popup.is(e.target) && fix__custom__popup.has(e.target).length === 0)){
                $(".popup").fadeOut(20);
            }

            // condition sidebar (*)
            if((!sidebar_nav.is(e.target) && sidebar_nav.has(e.target).length === 0)&&(overlay_sidebar.is(e.target) && overlay_sidebar.has(e.target).length === 0)){
                hide_sidebar_navigation('.sidebar-nav', '.button-collapse-sidebar');
            }

            // condition select (.showOptions)
            if (($(e.target).closest('.hide-options').length === 0) && ($(e.target).closest('body').length === 1)) { 
                $('.hide-options').fadeOut(20);
            }


    }
});
// ========== /close element on click outside element ==========



// ========== check once if i scroll down or up ==========
let checkScroll = false;
let check_scroll_once = function () {
    if ($(this).scrollTop() >= 10 && !checkScroll) { // I add a boolean variable to ensure a single run for each condition
        $('.block-l-menu').removeClass('large').addClass('small');
        checkScroll = true;

    }else if($(this).scrollTop() < 10 && checkScroll) { // also I add a boolean variable to ensure a single run for each condition
        $('.block-l-menu').removeClass('small').addClass('large');
        checkScroll = false;
    }
}
// ========== check once if i scroll down or up ==========



// ========== click on button announcement in header (hide and show content) ==========
{    
    $(document).ready(function(e) {
        $(document).on('click', '.showOptions', function() {

            if(!$(this).find('.hide-options').is(":visible")) {
              $(this).find('.hide-options').fadeIn(50);
            }

        });
    });
}
// ========== /click on button announcement in header (hide and show content) ==========



// ========== click on button announcement in header """sidebar-navigation"""" (hide and show content) ==========
{
    $(document).ready(function() {
        $('.fa-angle-down-animated').css('transform', 'rotate(0deg)');
        $(document).on('click', '.show-sideBar', function() {

            if($(this).parents('.sidebar-menu').find('.sub-menu-animated').hasClass('fadeOut-subMenu') == true) {
                $(this).parents('.sidebar-menu').find('.fa-angle-down-animated').css('transform', 'rotate(180deg)');
                $(this).parents('.sidebar-menu').find('.sub-menu-animated').slideDown(100);
                $(this).parents('.sidebar-menu').find('.sub-menu-animated').removeClass('fadeOut-subMenu');
            }else if($(this).parents('.sidebar-menu').find('.sub-menu-animated').hasClass('fadeOut-subMenu') == false) {
                $(this).parents('.sidebar-menu').find('.fa-angle-down-animated').css('transform', 'rotate(0deg)');
                $(this).parents('.sidebar-menu').find('.sub-menu-animated').slideUp(100);
                $(this).parents('.sidebar-menu').find('.sub-menu-animated').addClass('fadeOut-subMenu');
            }

        });
    });

}
// ========== /click on button announcement in header """sidebar-navigation"""" (hide and show content) ==========



// ========== remove and add right margin from second information ==========
const remove_add_rightMargin = (width_window) => {
    if(lastWidth < width_window) {
        $('.adapt_mrg_r').removeClass('mrg-r1');
        $('.adapt_mrg_l').removeClass('mrg-l1');
    }else {
        $('.adapt_mrg_r').addClass('mrg-r1');
        $('.adapt_mrg_l').addClass('mrg-l1');
    }
};
remove_add_rightMargin(992);
// ========== /remove right margin from second information ==========



{
    // ======== change language icon on focus tag a ========
    const onchange_language = (this_value) => {

        const last_chosen_language = $('.chosen_language').find('img').attr('src');
        const new_chosen_language = this_value.find('img').attr('src');

        $('.chosen_language').find('img').attr('src', new_chosen_language);
        this_value.find('img').attr('src', last_chosen_language);

        $('.hide-options').fadeOut(50);
    };
    // ======== /change language icon on focus tag a ========


    $(document).ready(function() {
        $(document).on('click', '.language', function() {
            onchange_language($(this));
        });
    });

}


// ========== function allows us to make an animation on click button filter ==========
$(document).ready(function() {
    $(document).on('click', '.close-alert', function() {
        $(".alert-container").fadeOut(800);
    });
}); 
// ========== /function allows us to make an animation on click button filter ==========



// ====== close alert ======
$(document).ready(function() {
    $(document).on('click', '.filt_stock', function() {
        $('.filt_stock').removeClass('active-filt-stock');
        $(this).addClass('active-filt-stock');
    });
}); 
// ====== /close alert ======



// ====== get content when link is clicked ======
$(document).ready(function() {
    $(document).on('click', '.gsk', function() {
        const getAttrHref = $(this).attr('href').substr(1);
        $('.block__content__first__page').addClass('d-none');
        $(`#${getAttrHref}`).removeClass('d-none');
        $('.hide-options').fadeOut(20);
    });
});
// ====== /get content when link is clicked ======

// ====== on click button change color access users ======
$(document).ready(function() {
    $(document).on('click', '#_changeColorAccessUser', function() {
        changeColorAccessUsers($(this));
    });
});
// ====== /on click button change color access users ======

$(window).scroll(function() {

    check_scroll_once();

});



$(window).resize(function() {
    
    lastWidth = $(window).width();

    remove_add_rightMargin(992);

});


// ======= if user focus cursor out input, this function will be executed =======
$(document).ready(function() {
    $(document).on('focusout','.input_animation',function () {
        check_val_input();
    });
});

// ======= if user focus cursor in input, this function will be executed =======
$(document).ready(function() {
    $(document).on('focusin', '.input_animation', function() {
        maximize_text_ofInput($(this));
    });
});
$( ".input_animation" ).change(function() {
    check_val_input();
});

// ======= if user focus cursor out select, this function will be executed =======
$(document).ready(function() {
    $(document).on('focusout','.select_animation',function () {
        check_val_select();
    });
});

// ======= if user focus cursor in select, this function will be executed =======
$(document).ready(function() {
    $(document).on('focusin', '.select_animation', function() {
        maximize_text_ofInput($(this));
    });
});
// ======= /if user focus cursor in input this function will be executed =======

// ======= remove main loading after load pages =======
const stopLoading = () => document.getElementById("load").classList.remove('main-loading');
const startLoading = () => document.getElementById("load").classList.add('main-loading');
// ======= /remove main loading after load pages =======
    

$(window).on('load',function() {   

});

$(document).ready(function() {
    stopLoading();
});

$(document).ready(function() {
    $(document).on('click', '.nw-carousel-control-next', function() {
        // if($(window).width() > 767) {
        //     if(!($(this).parents('.nw-carousel').find('.carousel-item').slice(-3)).eq(0).hasClass('active')) {
        //         $(this).parents('.nw-carousel').find('.active').removeClass('active').next().addClass('active');
        //     }
        // }else {
            if(!$(this).parents('.nw-carousel').find('.carousel-item').last().hasClass('active')) {
                $(this).parents('.nw-carousel').find('.active').removeClass('active').next().addClass('active');
            }       
        // }
    });
});

$(document).ready(function() {
    $(document).on('click', '.nw-carousel-control-prev', function() {
        if(!$(this).parents('.nw-carousel').find('.carousel-item').first().hasClass('active')) {
            $(this).parents('.nw-carousel').find('.active').removeClass('active').prev().addClass('active');
        }
    });
});

$(document).ready(function() {
    $(document).on('click', '.phone', function() {
        window.open("/reviews", "", "width=414, height=736");
    });
});
$(document).ready(function() {
    $(document).on('click', '.tablet', function() {
        window.open("/reviews", "", "width=968, height=1024");
    });
});