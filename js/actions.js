"use strict";

// general_header

window.addEventListener("scroll", function(){
    headerScrollDetector();
    headerStyle();
});

// hero icons, footer icons, blog items

document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );
document.getElementById('footer_icons').innerHTML = generateIcons( footerIcons );
document.getElementById('blog_items').innerHTML = generateBlog ( blogItems );

// services

document.getElementById('services-list').innerHTML = generateServices( services );

// Completed projects

document.getElementById('facts_list').innerHTML  = generateFacts (facts);
for ( var i = 0; i < facts.length; i++){
    animatedCounter( facts[i].icon, facts[i].counter_value );
}

// OurClient
document.getElementById('listOfTestimonials').innerHTML = generateTestimonials( list_Testimonials );

var testimonials = document.querySelectorAll('.dotsBlock > .dots').forEach( item => {
    item.addEventListener('click', showTestimonial);
});


// get in touch 

document.querySelector('#contact .address_info').innerHTML = generateContactInfo( contactInfo );
document.querySelector('#contact .form').innerHTML = generateForm( contactForm );



// Education and experience


document.getElementById('education_list').innerHTML = generateEducation( education );


// portfolio

//ourwork

document.getElementById('gallery_list').innerHTML = generateGallery( gallery_items);

document.querySelectorAll('#gallery_list .filter > div').forEach (filter =>{
    filter.addEventListener('click', filterWork)
});


var leftBtn = document.querySelector('#blog_items .blog .imgLeft'),
 rightBtn = document.querySelector('#blog_items .blog .imgRight');

 leftBtn.addEventListener('click', showImg);
 rightBtn.addEventListener('click', showImg);
