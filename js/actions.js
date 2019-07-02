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

// OurClient
document.getElementById('listOfTestimonials').innerHTML = generateTestimonials( list_Testimonials );

var testimonials = document.querySelectorAll('.dotsBlock > .dots').forEach( item => {
    item.addEventListener('click', showTestimonial);
});


// testimonialsData0.addEventListener( 'click', showTestimonials0);

// get in touch 

document.querySelector('#contact .address_info').innerHTML = generateContactInfo( contactInfo );
document.querySelector('#contact .form').innerHTML = generateForm( contactForm );



// Education and experience

// portfolio
document.getElementById('education_list').innerHTML = generateEducation( education );

//ourwork

document.getElementById('gallery_list').innerHTML = generateGallery( gallery_items);
