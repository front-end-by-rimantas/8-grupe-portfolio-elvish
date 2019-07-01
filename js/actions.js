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


// get in touch 

document.querySelector('#contact .address_info').innerHTML = generateContactInfo( contactInfo );
document.querySelector('#contact .form').innerHTML = generateForm( contactForm );



var testimonialsData0 = document.getElementById('0');
var testimonialsData1 = document.getElementById('1');
var testimonialsData2 = document.getElementById('2');

testimonialsData0.addEventListener( 'click', showTestimonials0);
testimonialsData1.addEventListener( 'click', showTestimonials1);
testimonialsData2.addEventListener( 'click', showTestimonials2);
// Education and experience

// portfolio
document.getElementById('education_list').innerHTML = generateEducation( education );

//ourwork

document.getElementById('gallery_list').innerHTML = generateGallery( gallery_items);