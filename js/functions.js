"use strict";

function generateIcons( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ){
        HTML+= '<a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a>';
    }
    return HTML;
}

function generateBlog( data ){
    var HTML = '';

for ( var i=0; i< data.length; i++){
    HTML=HTML+ `<div class="Blog">
    <div class="img" style="background-image: url(../img/${data[i].photo});"></div>
    <h3>${data[i].heading}</h3>
    <h6>${data[i].topic}</h6>
    <h6>${data[i].block}</h6>
    <p>${data[i].description}...</p>
    <a href="${data[i].link}" class="button">Read more</a>
    </div>`;
}
    return HTML;
}