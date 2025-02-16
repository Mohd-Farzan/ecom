export const registerFormControls=[
    {
        name:'email',
        label:"email",
        placeholder:"enter your email ",
        componentType:"input",
        type:"email",
        unique:true
    },
    {
        name:'userName',
        label:"user Name",
        placeholder:"enter your name ",
        componentType:"input",
        type:"text",
        unique:true
    },
    {
        name:'age',
        label:"age",
        placeholder:"enter your age ",
        componentType:"input",
        type:"number",
    },
    {
        name:'password',
        label:"password",
        placeholder:"enter your password ",
        componentType:"input",
        type:"password",
    }
];

export const loginFormControls=[
    {
        name:'email',
        label:"email",
        placeholder:"enter your email ",
        componentType:"input",
        type:"email",
    },
    {
        name:'password',
        label:"password",
        placeholder:"enter your password ",
        componentType:"input",
        type:"password",
    }
];
export const addProductFromElement=[
    {
    label:'Title',
    name:'title',
    componentType:'input',
    type:'text',
    placeholder:'Enter Product Title'
    },
    {
    label:'Description',
    name:'description',
    componentType:'input',
    type:'text',
    placeholder:'Enter Product description'
    },
    {
    label:'Category',
    name:'category',
    componentType:'select',
    options:[
        {id:"lehenga",label:'Lehenga'},
        {id:'garara',label:'garara'},
        {id:'sharara',label:'Sharara'},
        {id:'wedding suit',label:'Wedding Suit'},
        {id:'cotton suit',label:'Cotton Suit'},
        {id:"woollen suit",label:'Woollen Suit'},
        {id:'ready mate suit',label:'Ready Mate Suit'},
        {id:'jaipuri suit',label:'Jaipuri Suit'},
        {id:'chunri suit',label:'Chunri Suit'},
        ],
    },
    {
    label:'Price',
    name:'price',
    id:'price',
    componentType:'input',
    type:'number',
    placeholder:'Enter Product price'
    },
    {
    label:'sale Price',
    name:'salePrice',
    componentType:'input',
    type:'number',
    placeholder:'Enter Product Sale Price'
    },
    {
    label:'Stock',
    name:'stock',
    componentType:'input',
    type:'number',
    placeholder:'Enter Total Stock'
    },

];
export const shopingHeaderMenuItems=[
    {id:'home',
    lable:'HOME',
    path:'/shop/home'
    },
    {
        id:'stitched',
        lable:'STITCHED',
        path:'/shop/list'
    },
    {
        id:'unstitched',
        lable:'UNSTITCHED',
        path:'/shop/list'
    },
    {
        id:'enquiry',
        lable:'ENQUIRY',
        path:'/shop/enquiry'
    },
    {
        id:'contactus',
        lable:'CONTACT US',
        path:'/shop/contactUs'
    },
];
export const filterOptions={
    category:[
        {
            id:'lehenga',
            label:'Lehenga'

        },
        {
            id:'garara',
            label:'Garara'
        },
        {
            id:'sharara',
            label:'Sharara'
        },
        {
            id:'weddingSuit',
            label:'Wedding Suit'
        },
        {
            id:"cottonSuit",
            label:"Cotton Suit",
        },
        {
           id:"woollenSuit",
           label:"Woollen Suit",
        },
        {
            id:"readymateSuit",
            label:"Ready Mate Suit",
        },
        {
            id:"jaipuriSuit",
            label:"Jaipuri Suit",
        },
        {
            id:"chunriSuit",
            label:"Chunri Suit",
        },

        {
            id:'cottonFabric',
            label:'Cotton Fabric'
        },
        {
            id:"silkFabric",
            label:"Silk Fabric",
        },
        {
           id:"chanderiSilkFabric",
           label:"Chanderi Silk Fabric",
        },
        {
            id:"organzaFabric",
            label:"Organza Fabric",
        },
        {
            id:"net",
            label:"Net",
        },
        {
            id:"cambricCottonFabric",
            label:"Cambric Cotton Fabric",
        }
    ]
}
export const sortOptions=[
    {id:"price-lowtohigh",lable:"price low to high"},
    {id:"price-hightolow",lable:"price high to low"},
    {id:"title-atoz",lable:"title A to Z"},
    {id:"title-ztoa",lable:"title Z to A"},
];
export const categoryOptionMap={
    "lehenga":"Lehenga",
    "garara":"Garara",
    "sharara":"Sharara",
    "weddingSuit":"Wedding Suit",
    "cottonSuit":"Cotton Suit",
    "woollenSuit":"Woollen Suit",
    "readymateSuit":"Ready Mate Suit",
    "jaipuriSuit":"Jaipuri Suit",
    "chunriSuit":"Chunri Suit"
}
export const categoryunStitchedMap={
    "cottonFabric":"Cotton Fabric",
    "silkFabric":"Silk Fabric",
    "chanderiSilkFabric":"ChanderiSilkFabric",
    "organzaFabric":"Organza Fabric",
    "net":"Net",
    "cambricCottonFabric":"Cambric Cotton Fabric",
}
export const addressFormControls=[
    {
        label:'Address',
        name:'address',
        componentType:'input',
        type:'text',
        placeholder:'enter your address'
    },
    {
        label:'Pincode',
        name:'pincode',
        componentType:'input',
        type:'Number',
        placeholder:'enter pincode'
    },
    {
        label:'Phone',
        name:'phone',
        componentType:'input',
        type:'Number',
        placeholder:'enter your Phone Number'
    },
    {
        label:'City',
        name:'city',
        componentType:'input',
        type:'text',
        placeholder:'enter your destination'
    },
   
]
export const enquiryForm=[
    {
        name:'email',
        label:"Email",
        placeholder:"enter your email ",
        componentType:"input",
        type:"email",
    },
    {
        name:'userName',
        label:"User Name",
        placeholder:"enter your name ",
        componentType:"input",
        type:"text",
    },
    {
        name:'phone',
        label:"Phone Number",
        placeholder:"enter your Phone Number",
        componentType:"input",
        type:"number",
    },
    {
        name:'message',
        label:"Message",
        placeholder:"What is in your mind? ",
        componentType:"input",
        type:"textarea",
    },
]

