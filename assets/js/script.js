 /*-----------------------------------------------------------------------------------

 Template Name: Admiro
 Template URI: themes.pixelstrap.com/Admiro
 Description: This is Admin Template
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01. Loader js
// 02. Tap to top js
// 03. Header DropDown Toggle js
// 04. Full screen js
// 05. Header search js
 (function () {
    const body = document.querySelector('body');    

    /*=====================
        03 Header DropDown Toggle
    ==========================*/
    body.addEventListener('click', function (event) {
        const headerDropdownMenu = document.querySelectorAll('.custom-menu');
        const dropdownEl = event.target.closest('.custom-dropdown');
        const visible = dropdownEl?.querySelector('.custom-menu').classList.contains('show');
        const dropdownMenuElement = event.target.closest('.custom-menu');
        if (!dropdownMenuElement) {
            headerDropdownMenu.forEach((item) => {
            item.classList.remove('show');
           
        });
        }
        if (!dropdownEl) return;
        const dropdownMenu = dropdownEl.querySelector('.custom-menu');
        if (!visible) dropdownMenu.classList.add('show');
    });

      /*=====================
        04 Full screen js
    ==========================*/
    const fullScreen = document.querySelector('.full-screen');
    fullScreen.addEventListener('click', function (event) {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    });

    /*=====================
     05. Header search js
   ==========================*/
    // const groupInputMain = document.querySelector('.group-input');
    // body.addEventListener('click', function (event) {
    //     const searchIcon = event.target.closest('.search-icon');
    //     const showInput = document.querySelector('.group-input').classList.contains('show');
    //     const groupElement = event.target.closest('.group-input');
    //     if (!groupElement) {
    //         groupInputMain.classList.remove('show');
    //     }
    //     if (!searchIcon) return;
    //     if (!showInput) groupInputMain.classList.add('show');
    // });
    
    // dark mode js
    // const darkMode = document.querySelector(".dark-mode");
    // darkMode.addEventListener('click', function () {
    //     let theme = localStorage.getItem('data-theme');
    //     if (theme ==='dark'){
    //          document.documentElement.setAttribute("data-theme", "light")
    //             localStorage.setItem("data-theme", 'light')
    //     }else{
    //         document.documentElement.setAttribute("data-theme", "dark")
    //         localStorage.setItem("data-theme", "dark")
    //     }   
    // });


  })();

  