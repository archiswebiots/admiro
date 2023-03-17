    (function () {
        const body = document.querySelector('body');
        const wrapper = document.querySelector(".page-wrapper");

        // active menu js
        let slideUp = (target, duration = 500) => {
            if (target) {
                target.style.transitionProperty = 'height, padding';
                target.style.transitionDuration = duration + 'ms';
                target.style.boxSizing = 'border-box';
                target.style.height = target.offsetHeight + 'px';
                target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0;
                target.style.paddingTop = 0;
                window.setTimeout(() => {
                    target.style.display = 'none';
                    target.style.removeProperty('height');
                    target.style.removeProperty('padding-top');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                }, duration);
            }
        }

        let slideDown = (target, duration = 500) => {
            console.log(target,'target');
            if (target) {               
                target.style.removeProperty('display');
                let display = window.getComputedStyle(target).display;

                if (display === 'none')
                    display = 'flex';

                target.style.display = display;
                let height = target.offsetHeight;
                target.style.overflow = 'hidden';
                target.style.height = 0;
                target.style.paddingTop = 0;
                target.offsetHeight;
                target.style.boxSizing = 'border-box';
                target.style.transitionProperty = "height, padding";
                target.style.transitionDuration = duration + 'ms';
                target.style.height = height + 'px';
                target.style.removeProperty('padding-top');
                window.setTimeout(() => {
                    target.style.removeProperty('height');
                    target.style.removeProperty('overflow');
                    target.style.removeProperty('transition-duration');
                    target.style.removeProperty('transition-property');
                }, duration);
            }
        }

        var url = window.location.href
        const allList = document.querySelectorAll('.sidebar-list');
        const submenuLinks = document.querySelectorAll('.sidebar-menu a');

        submenuLinks.forEach(el => {
            var linkHref = el.href;
            if (url === linkHref) {
                el.classList.add("active");
                el.closest(".sidebar-list").classList.add("active");
                slideDown(el.closest(".sidebar-submenu"));
            }
        });
        allList.forEach(el => {
            el.addEventListener("click", function () {
                allList.forEach(item => {
                    if (item !== el) {
                        if (item.classList.contains('active')) {
                            slideUp(item.querySelector(".sidebar-submenu"));
                        }
                        item.classList.remove('active');
                    }
                })
                el.classList.toggle("active")
                if (el.classList.contains('active')) {
                    slideDown(el.querySelector(".sidebar-submenu"));
                } else {
                    slideUp(el.querySelector(".sidebar-submenu"));
                }
            })
        })

        // Click of all sub-menus
        const submenus = document.getElementsByClassName('sidebar-submenu')
        console.log("SUBMENU", submenus);



        // for overlay
        const sidebarScreen = window.matchMedia("(max-width: 991px)");
        const temp = window.innerWidth
        const Overlay = document.querySelector(".overlay");
        const overlayShow =()=> {
            if (sidebarScreen.matches && true) {
                Overlay.classList.add("active");

            } else {
                Overlay.classList.remove("active");
            }
        }
        overlayShow()
        addEventListener('resize', (event) => {
            overlayShow()
        });
        if (Overlay.classList.contains("active")) {
        Overlay.addEventListener("click", function () {
            wrapper.classList.remove('sidebar-open');
            this.classList.remove("active");
        })
        }

        // sidebar close js
        const sidebarClose = document.querySelector(".sidebar-close");
        // if (sidebarClose) {
            sidebarClose.addEventListener("click", function () {
                console.log('done');
                wrapper.classList.remove('sidebar-open');
                Overlay.classList.remove("active");
            })
        // }
        let temp1
        const responsiveSidebar = () => {
            if (sidebarScreen.matches) {
                wrapper.classList.remove('sidebar-open');
                Overlay.classList.remove("active");
            } else {
                wrapper.classList.add('sidebar-open');
            }
        }
        responsiveSidebar()
        addEventListener("resize", (event) => {
            responsiveSidebar()
        });

        // sidebar toggle js
        const sidebarToggle = document.querySelector(".toggle-sidebar");
        sidebarToggle.addEventListener("click", function () {
            wrapper.classList.toggle('sidebar-open');
            const wrapperClose = wrapper.classList.contains("sidebar-open");
            console.log("temp1temp1", temp1);
            if (sidebarScreen.matches && wrapperClose) {
                Overlay.classList.add("active");
            }
        })

    })();