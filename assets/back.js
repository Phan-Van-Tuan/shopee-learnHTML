// like
const likes = document.querySelectorAll('.home-product-item__like')

for(var i = 0; i < likes.length; i++) {
    likes[i].onclick = function(e) {
        e.srcElement.parentElement.classList.toggle('home-product-item__like--liked');
    }
}

//sắp xếp theo trên pc
const buttonPrimary = document.querySelectorAll('.home-filter__btn')

for(var i = 0; i < buttonPrimary.length; i++) {
    buttonPrimary[i].onclick = function(e) {
        for(var i = 0; i < buttonPrimary.length; i++) {
           buttonPrimary[i].classList.remove('btn--primary')
        }
        e.target.classList.add('btn--primary');
    }
}

// danh mục pc
const buttonSPrimary = document.querySelectorAll('.category-item__link')

for(var i = 0; i < buttonSPrimary.length; i++) {
    buttonSPrimary[i].onclick = function(e) {
        console.log(e.target)
        for(var j = 0; j < buttonSPrimary.length; j++) {
            console.log(j)
           buttonSPrimary[j].classList.remove('category-item--active')
        }
        e.target.classList.add('category-item--active');
    }
}

// trong shop ngoai shop
const checkShop = document.querySelectorAll('.header__search-option-item')

for(var i = 0; i < checkShop.length; i++) {
    checkShop[i].onclick = function(e) {
        for(var i = 0; i < checkShop.length; i++) {
           checkShop[i].classList.remove('header__search-option-item--active')
        }
        e.target.classList.add('header__search-option-item--active');
        var gettext = document.querySelector('.header__search-option-item--active')
        var text1 = gettext.textContent
        document.querySelector('.header__search-select-label').textContent = text1;
    }
}

// test
const testled = document.querySelector('.header__search-btn')
setInterval(
    a = function() {
        testled.style.backgroudColor = 'red'
        console.log(1)
    }
,3000)