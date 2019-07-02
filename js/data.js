"use strict";

var heroIcons = [
    {
        icon:'facebook',
        link: '#'
    },
    {
        icon: 'linkedin',
        link: '#'
    },
    {
        icon: 'dribbble',
        link: '#'
    },
    {
        icon: 'google-plus',
        link:'#'
    },
    {
        icon: 'twitter',
        link: '#'
    }
];
var footerIcons = [
    {
        icon:'facebook',
        link: '#'
    },
    {
        icon: 'twitter',
        link: '#'
    },
    {
        icon: 'linkedin',
        link: '#'
    },
    {
        icon: 'google-plus',
        link:'#'
    }
];
// Ourblog

var blogItems = [
{ 
    image:'blog1.jpeg',
    heading:'There are many variations',
    topic: 'Lifestyle',
    date: '13 February 2018',
    description:'Vestibulum sit amet libero vel neque dapibus ultrices. Sed sollicitudin est neque, ac dictum ipsum.',
    link:'#',
},
{ 
    image:'blog1.jpeg',
    heading:'There are many variations',
    topic: 'Lifestyle',
    date: '13 February 2018',
    description:'Vestibulum sit amet libero vel neque dapibus ultrices. Sed sollicitudin est neque, ac dictum ipsum.',
    link:'#',
},
{ 
    image:'blog1.jpeg',
    heading:'There are many variations',
    topic: 'Lifestyle',
    date: '13 February 2018',
    description:'Vestibulum sit amet libero vel neque dapibus ultrices. Sed sollicitudin est neque, ac dictum ipsum.',
    link:'#',
}
];
// services

var services = [
    {
        icon: 'file-archive-o',
        title: 'Graphic design',
        description: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: 'file-image-o',
        title: 'Unlimited color',
        description: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: 'paper-plane-o',
        title: 'Media marketing',
        description: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: 'wifi',
        title: 'Unlimited WiFi',
        description: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: 'desktop',
        title: 'Responsive Design',
        description: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    },
    {
        icon: 'file-text-o',
        title: 'Easy to customize',
        description: 'The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.'
    }
];

// completed projects

var facts = [
    {
        icon: 'clock-o',
        counter_value: '654',
        title: 'Working hours.'
    },
    {
        icon: 'gift',
        counter_value: '6400',
        title: 'Completed projects'
    },
    {
        icon: 'user',
        counter_value: '2389',
        title: 'No.of Clients'
    },
    {
        icon: 'users',
        counter_value: '653',
        title: 'Team member'
    }
];

// get in touch

var contactInfo = [
    {
        icon: 'mobile',
        title: 'Call us on',
        info: [
            {
                type: 'text',
                value: '+123 456 789'
            }
        ]
    },
    {
        icon: 'envelope-o',
        title: 'Email us at',
        info: [
            {
                type: 'link',
                value: 'example@gmail.com'
            },
        ]
    },
    {
        icon: 'map-marker',
        title: 'Visit office',
        info: [
            {
                type: 'text',
                value: 'Wallstreet 111, NY, USA'
            },
        ]
    }
];

var contactForm = {
    fields: [
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'text'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Your name..'
                },
                {
                    name: 'label',
                    value: 'Name'
                }
            ],
            className: ['col-6'],
            required: true
        },
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'email'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Your email...'
                },
                {
                    name: 'label',
                    value: 'Email address'
                },
            ],
            className: ['col-6'],
            required: true
        },
        {
            type: 'input',
            attr: [
                {
                    name: 'type',
                    value: 'text'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Your subject...'
                },
                {
                    name: 'label',
                    value: 'Subject'
                }
            ],
            className: ['col-12'],
            required: false
        },
        {
            type: 'textarea',
            attr: [
                {
                    name: 'placeholder',
                    value: 'Your message ...'
                },
                {
                    name: 'label',
                    value: 'Message'
                }
            ],
            value: 'Message',
            className: ['col-12'],
            required: true
        }
    ],
    actions: [
        {
            style: 'black',
            text: 'Send message'
        }
    ]
};

//testimonials- ourClient

var list_Testimonials = [
{
logo: 'img//userlogo.png',
author:'Edwards Evans',
possition:'Google',
text: 'The most well-known dummy text is the \'Lorem Ipsum\', which is said to have originated in the 16th century. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.',
},
{
    logo: 'img//userlogo.png',
    author:'Antonio Hernandez',
    possition:'Google',
    text: ' This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.',
},
    {
        logo: 'img//userlogo.png',
        author:'Kirk McFall',
        possition:'Google',
        text: 'The most well-known dummy text is the \'Lorem Ipsum\', which is said to have originated in the 16th century.',
    }
];



// education and experience

var education = [
    {
        period: '2010 - 2014',
        position: 'Studied at Cambridge University',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        period: '2010 - 2014',
        position: 'Senior Graphic Designer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'    
    },
    {
        period: '2014 - 2016',
        position: 'Master in Computer Science',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'    
    },
    {
        period: '2014 - 2016',
        position: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'    
    },
    {
        period: '2016 - 2018',
        position: 'UI/UX Designer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'    
    },
    {
        period: '2016 - 2018',
        position: 'Freelancer and Themeforest',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'    
    }
];


//OurWork

var gallery_items =[
{
    galleryPhoto:'1.jpg',
    topic:'Category',
    title:'Project title',
    tag:'webdesign work wordpress',
},
{
    galleryPhoto:'2.jpg',
    topic:'Category',
    title:'Project title',
    tag: 'seo webdesign work',
},
{
    galleryPhoto:'3.jpg',
    topic:'Category',
    title:'Project title',
    tag: 'seo wordpress',
},
{
    galleryPhoto:'4.jpg',
    topic:'Category',
    title:'Project title',
    tag:'work wordpress',
},
{
    galleryPhoto:'5.jpg',
    topic:'Category',
    title:'Project title',
    tag: 'seo webdesign',
},
{
    galleryPhoto:'6.jpg',
    topic:'Category',
    title:'Project title',
    tag: 'webdesign',
}
];
