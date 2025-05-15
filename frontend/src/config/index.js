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
        {id:'weddingSuit',label:'Wedding Suit'},
        {id:'cottonSuit',label:'Cotton Suit'},
        {id:"woollenSuit",label:'Woollen Suit'},
        {id:'readyMateSuit',label:'Ready Mate Suit'},
        {id:'jaipuriSuit',label:'Jaipuri Suit'},
        {id:'chunriSuit',label:'Chunri Suit'},
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
        
    },
    {
        id:'unstitched',
        lable:'UNSTITCHED',

    },
    {
        id:'enquiry',
        lable:'ENQUIRY',
        path:'/shop/enquiry'
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
export const categoryOptionMap = [
    { id: "lehenga", label: "Lehenga", path: "/shop/lehenga" },
    { id: "garara", label: "Garara", path: "/shop/garara" },
    { id: "sharara", label: "Sharara", path: "/shop/sharara" },
    { id: "weddingSuit", label: "Wedding Suit", path: "/shop/wedding-suit" },
    { id: "cottonSuit", label: "Cotton Suit", path: "/shop/cotton-suit" },
    { id: "woollenSuit", label: "Woollen Suit", path: "/shop/woollen-suit" },
    { id: "readymateSuit", label: "Ready Mate Suit", path: "/shop/readymate-suit" },
    { id: "jaipuriSuit", label: "Jaipuri Suit", path: "/shop/jaipuri-suit" },
    { id: "chunriSuit", label: "Chunri Suit", path: "/shop/chunri-suit" }
];

export const categoryunStitchedMap = [
    { id: "cottonFabric", label: "Cotton Fabric", path: "/shop/cotton-fabric" },
    { id: "silkFabric", label: "Silk Fabric", path: "/shop/silk-fabric" },
    { id: "chanderiSilkFabric", label: "Chanderi Silk Fabric", path: "/shop/chanderi-silk-fabric" },
    { id: "organzaFabric", label: "Organza Fabric", path: "/shop/organza-fabric" },
    { id: "net", label: "Net", path: "/shop/net-fabric" },
    { id: "cambricCottonFabric", label: "Cambric Cotton Fabric", path: "/shop/cambric-cotton-fabric" }
];

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
        componentType:"textarea",
        type:"textarea",
    },
]

