// Header js 
const navSlider = () => {
    const n = document.querySelector(".burger"),
        e = document.querySelector(".nav-links"),
        t = document.querySelectorAll(".nav-links li"),
        o = document.getElementsByTagName("nav");
    n.addEventListener("click", () => {
        e.classList.toggle("nav-active"),
            t.forEach((n, e) => {
                n.style.animation ? (n.style.animation = "") : (n.style.animation = "navlinkFade 0.5s ease forwards");
            }),
            n.classList.toggle("toggle"),
            o[0].classList.toggle("nav_bg_cng");
    });
};
navSlider();


// jquery structure
$(document).ready(function() {
    // header background cng on scroll
    $(window).on("scroll", function() {
        $(window).scrollTop() ? $("nav").css("background-color", "black") : $("nav").css("background-color", "transparent");
    });
    // AOS install
    AOS.init({
        duration: 1000
    });
    // circle progress bar animation jquery plugin....
    $('svg.radial-progress').each(function(index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });
    $(window).scroll(function() {
        $('svg.radial-progress').each(function(index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
            }
        });
    }).trigger('scroll');
    // line progress bar.......
    function DemoProgressbars() {
        $('#html5').LineProgressbar({
            percentage: 90,
            fillBackgroundColor: '#ff7171',
            height: '1rem',
            duration: 2000,
            radius: '15px'
        });
        $('#css3').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#3498db',
            height: '1rem',
            duration: 2200,
            radius: '15px'

        });
        $('#jquery').LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#ffc93c',
            height: '1rem',
            duration: 2300,
            radius: '15px'
        });
        $('#bootstrap').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#ffaa71',
            height: '1rem',
            duration: 2600,
            radius: '15px'
        });
        $('#react').LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#005086',
            height: '1rem',
            duration: 2700,
            radius: '15px'
        });
        $('#photoshop').LineProgressbar({
            percentage: 80,
            fillBackgroundColor: '#89c9b8',
            height: '1rem',
            duration: 2800,
            radius: '15px'
        });

    }
    $('.skill-colmn').waypoint(function() {
        DemoProgressbars();
    }, {
        offset: '100%',
        triggerOnce: true
    });

});