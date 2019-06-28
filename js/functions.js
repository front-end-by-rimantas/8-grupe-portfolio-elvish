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


// get in touch

function generateContactInfo( data ) {
    var HTML = '',
        infoListHTML = '',
        infoElement;

    for ( var i=0; i<data.length; i++ ) {
        infoListHTML = '';

        for ( var p=0; p<data[i].info.length; p++ ) {
            infoElement = data[i].info[p];

            if ( infoElement.type === 'text' ) {
                infoListHTML += `<p>${infoElement.value}</p>`;
            }

            if ( infoElement.type === 'link' ) {
                infoListHTML += `<a href="mailto:${infoElement.value}">${infoElement.value}</a>`;
            }
        }

        HTML += `<div class="info-box">
                    <i class="fa fa-${data[i].icon}"></i>
                    <h4>${data[i].title}:</h4>
                    <div>${infoListHTML}</div>
                </div>`;
    }

    return HTML;
}

function generateForm( data ) {
    var HTML = '<form>',
        field,
        attrHTML = '',
        attrInfo,
        classNames = '';

    for ( var i=0; i<data.fields.length; i++ ) {
        field = data.fields[i];
        attrHTML = '';
        classNames = '';

        for ( var a=0; a<field.attr.length; a++ ) {
            attrInfo = field.attr[a];
            attrHTML += `${attrInfo.name}="${attrInfo.value}"`;
        }

        classNames = field.className.join(' ');
        
        if ( field.type === 'input' ) {
            HTML += `<div class="${classNames}">
                        <label for="">${attrInfo.value}</label>
                        <input ${attrHTML}>
                    </div>`;
        }
        if ( field.type === 'textarea' ) {
            HTML += `<div class="${classNames}">
                        <label for="">${attrInfo.value}</label>
                        <textarea ${attrHTML}></textarea>
                    </div>`;
        }
    }
    HTML += '<div class="actions">';
        for ( var i=0; i<data.actions.length; i++ ) {
            HTML += `<div class="col-12">
                        <div class="btn btn-${data.actions[i].style}">${data.actions[i].text}</div>
                    </div>`;
        }
    HTML += '</div>';
    
    HTML += '</form>';

    return HTML;
}

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

