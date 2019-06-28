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
]
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
]
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