window.addEventListener('scroll',function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY > 0);
});

function visitPage(){
        var win = window.open('https://www.facebook.com/profile.php?id=100011718574265', '_blank');
  		win.focus();
    }

function visitPage1(){
        var win = window.open('https://www.instagram.com/cosmin_bolota/', '_blank');
  		win.focus();
    }
function visitPage2(){
        var win = window.open('https://ro.linkedin.com/in/constantin-cosmin-bolota-b078141b9?trk=people-guest_people_search-card&challengeId=AQGaqKVHVfKQ0wAAAXbPGQfKQZzk6hpUtg-FDimgZZFzD5krIFgU3LnkccMHPc-Y0F5fOxiSLSqQUk7dhJF6sRvO5SBwCQJuTg&submissionId=1733c5a3-8f21-5716-8687-df86f75af167', '_blank');
  		win.focus();
    }
function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}