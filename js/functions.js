"use strict";

function generateIcons( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ){
        HTML+= '<a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a>';
    }
    return HTML;
}

// Ourblog

function generateBlog (data) {
var HTML ='';
for ( var i=0; i<data.length; i++ ) {
    HTML=HTML+ `<div class="blog">
    <div class="img" style="background-image: url(img/${data[i].image});"></div>
    <h4>${data[i].heading}</h4>
    <h5>${data[i].topic}</h5>
    <span> ${data[i].date} <b>By Envato</b> </span>
    <p>${data[i].description}</p>
    <a href="${data[i].link}">Read more...</a>
</div>`;

HTML
}
return HTML;
}
// services

function generateServices( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        HTML += '<div class="service">\
                    <i class="fa fa-'+data[i].icon+'"></i>\
                    <h3>'+data[i].title+'</h3>\
                    <p>'+data[i].description+'</p>\
                </div>';
    }
    return HTML;
}

// completed projects

// education and experience

function generateEducation( data ) {
    var HTML = '';

    data.forEach( (education) => {
        HTML += `<div class="edu">
                        <div class="period">${education.period}</div>
                        <div class="about">
                            <h4>${education.position}</h4>
                            <span>${education.description}</span>
                        </div>
                </div>`;
    });
        return HTML;
}
//ourWork
function generateGallery (data) {
    var HTML ='',
    work;
    
    data.forEach(( work,i) => {
console.log( (i +1) + ')' + work.tag);
        // work=data[1] gavo duomenys ir eina per kiekviena elementa, data i pakeicia i work'a,
        HTML += `<div class="galleryBlock">
        <div class= "absolute">
            <div class="galleryPhoto" style= "background-image: url(img//${work.galleryPhoto});"> 
            </div>
            <div class= "blackside">
                <h6> ${data[i].topic} </h6>
                <span> ${data[i].title} </span>
                </div>
            </div>
        </div>`;
    });

// for(var i=0;  i<data.length; i++){
// work = data[i];
// console.log( (i +1) + ')' + work.tag);//TAS PATS KAIP SU FOREACH

return HTML;
}
    

//ourClient
function generateTestimonials( data ) {
var HTML = '<div class="list">';
for ( var i=0; i<data.length; i++ ) {
    HTML += `<div class="allTestimonials ${i === 0 ? 'active' : ''}" data-index="${i}">
    <img src="${data[i].logo}" alt="logotip" >
    <h5>${data[i].author}</h5>
    <h6>${data[i].possition}</h6>
    <p>${data[i].text}</p>
    </div>`;
}
HTML+='</div>';
HTML+= '<div class="dotsBlock">';
for ( var i=0; i<data.length; i++){
    HTML+= `<div id="${i}" class="dots" ></div>`;
}
return HTML;
}

function showTestimonials0 (value) {
    console.log(value);
    document.querySelector('.allTestimonials.active').classList.remove('active');
    document.querySelector('.allTestimonials[data-index="'+0+'"]').classList.add('active');
}

function showTestimonials1 (value) {
    document.querySelector('.allTestimonials.active').classList.remove('active');
    document.querySelector('.allTestimonials[data-index="'+1+'"]').classList.add('active');
}

function showTestimonials2 (value) {
    document.querySelector('.allTestimonials.active').classList.remove('active');
    document.querySelector('.allTestimonials[data-index="'+2+'"]').classList.add('active');
}
