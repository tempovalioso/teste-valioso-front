$(document).ready(function(){$("#mobile-btn").on("click",function(){$("#mobile_menu").toggleClass("active"),$("#mobile-btn").find("i").toggleClass("fa-x")});const a=$("section"),b=$(".nav-item");$(window).on("scroll",function(){const c=$("header"),d=$(window).scrollTop()-c.outerHeight();let e=0;0>=d?c.css("box-shadow","none"):c.css("box-shadow","5px 3px 5px rgba(0, 0, 0, 0.1"),a.each(function(a){const b=$(this),c=b.offset().top-200,f=c+b.outerHeight();if(d>=c&&d<f)return e=a,!1}),b.removeClass("active"),$(b[e]).addClass("active")}),ScrollReveal().reveal("#cta",{origin:"left",duration:1500,distance:"15%"}),ScrollReveal().reveal(".dica",{origin:"right",duration:1500,distance:"15%"}),ScrollReveal().reveal(".feedback",{origin:"left",duration:1500,distance:"15%"}),ScrollReveal().reveal(".social-media-buttons",{origin:"left",duration:1500,distance:"15%"}),ScrollReveal().reveal("#copyright",{origin:"left",duration:1500,distance:"15%"})});function verificarLogin(){const a=localStorage.getItem("login");a?($(".container-hidden").hide(),$(".container").show(),$(".container-mobile").show()):($(".container-hidden").show(),$(".container").hide(),$(".container-mobile").hide())}function toggleMenu(a){var b=document.getElementById(a);b.style.display="block"===b.style.display?"none":"block"}window.onclick=function(a){if(!a.target.closest(".user-btn")&&!a.target.closest(".user-btn-mobile")){var b=document.getElementById("dropdownMenu"),c=document.getElementById("dropdownMenuMobile");"block"===b.style.display&&(b.style.display="none"),"block"===c.style.display&&(c.style.display="none")}};function login(){localStorage.setItem("login","true"),verificarLogin()}function logout(){localStorage.setItem("TotalPontos",""),localStorage.setItem("login",""),verificarLogin()}verificarLogin();

/*Código Comprimido pelo site https://jscompress.com/. Sua versão descomprimida se encontra no seguinte Github https://github.com/brunoohw Muito Obrigado!*/