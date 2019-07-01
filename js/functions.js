"use strict";

function generateIcons( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ){
        HTML+= '<a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a>';
    }
    return HTML;
}

// header

function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),
        links = document.querySelectorAll('header nav > a'),
        headerLinkCount = links.length,
        top = document.getElementById('education').offsetTop,
        sectionID = '',
        activeSectionIndex = 0,
        clname = '';

    // searching for section index user is looking at
    for ( var i=0; i<headerLinkCount; i++ ) {
        sectionID = links[i].getAttribute('href');
        if ( sectionID === '#' ) {
            sections.push(0);
            continue;
        }
        top = document.querySelector(sectionID).offsetTop;
        sections.push(top);
        if ( top <= scroll ) {
            activeSectionIndex = i;
        } else {
            break;
        }
    }

    // remove class "active" from all links
    for ( var i=0; i<links.length; i++ ) {
        clname = ' ' + links[i].className + ' ';
        clname = clname.replace(" active ", " ");
        links[i].className = clname;
    }
    // add class "active" to particular link
    links[activeSectionIndex].className += ' active';
    
}

function headerStyle() {
    var scroll = window.scrollY,
        limit = 30,
        element = document.getElementById('header'),
        clname = '';
    if ( scroll > limit ) {
        clname = ' ' + element.className + ' ';
        clname = clname.replace(" transparent ", " ");
        element.className = clname;
    } else {
        element.className += ' transparent';
    }
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

//ourClient
function generateTestimonials( data ) {
var HTML = '<div class="list">';
for ( var i=0; i<data.length; i++ ) {
    HTML += `<div class="allTestimonials ${i === 0 ? 'active' : ''}" data-index="${i}">
    <img src="${data[i].logo}" alt="" >
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
