
function toggleBtn(){
    $(".fnToggleBtn").click(function(){
        $(this).toggleClass('active').siblings(".fnToggleCon").toggle()
    })
}

function timeTosPop(el, msg, th = this){
    let html = '';
    html = `<div class="tossPop"><span>${msg}</span></div>`;
    console.log(this)
    console.log(this.clientInformation.appCodeName)
    console.log(th)
    $(el).after(html);
    $(el).siblings('.tossPop').fadeIn(1000);
    setTimeout(function(){
        $(el).siblings('.tossPop').fadeOut(1000, function(){
            $(el).siblings('.tossPop').remove() 
        });
	}, 2500);
}

function rollingFun(){
    var mainBanner = new Swiper('.mainBanner .swiper-container', {
        slidesPerView: 'auto',
        pagination: {
          el: '.mainBanner .swiper-pagination',
          type: 'fraction',
        },
      });
    var rollingSection = new Swiper('.rollingSection .swiper-container', {
        slidesPerView: 1.25,
        freeMode: true,
        centeredSlides: false,
        spaceBetween: 7,
        initialSlide:0,
    });
}

function rollingTabMenu(){
    var idx = $('.pageTabMenu li.active').index()
    var tabMenu = new Swiper('.pageTabMenu.swiper-container', {
          slidesPerView: 'auto',
          centeredSlides: true,
          centeredSlidesBounds: true,
          loop: false,
          initialSlide: idx
      });
    $('.pageTabMenu li').click(function(){
        $('.pageTabMenu li').removeClass('active')
        $(this).addClass('active')
        var itemIndex = $( this ).index();
        tabMenu.slideTo(itemIndex);
    })
}


$(document).ready(function(){
    toggleBtn()
    rollingFun()
    rollingTabMenu()
})