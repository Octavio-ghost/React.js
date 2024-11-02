const products = [
    // Impresoras 3D
    {
        id: 1,
        name: "Impresora 3D Creality Ender 3",
        price: 250,
        description: "Impresora 3D de alta precisión con cama caliente y extrusor de fácil manejo.",
        stock: 10,
        category: 'Impresoras 3D',
        img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/IMP3D007/1000x1000-IMP3D007.jpg&w=500&q=100"
    },
    {
        id: 2,
        name: "Impresora 3D Anycubic Photon Mono",
        price: 300,
        description: "Impresora 3D de resina con pantalla monocromática para impresiones detalladas.",
        stock: 5,
        category: 'Impresoras 3D',
        img: "https://d3v0qfrp8436gb.cloudfront.net/wp-content/uploads/2024/08/photon-mono-m7.jpg"
    },
    {
        id: 3,
        name: "Impresora 3D Prusa i3 MK3S",
        price: 750,
        description: "Impresora 3D FDM con características avanzadas, ideal para usuarios avanzados.",
        stock: 3,
        category: 'Impresoras 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJbVKlDDREhiSTM9_aZ70mWRCGiCrUHVOwg&s"
    },
    {
        id: 4,
        name: "Impresora 3D Artillery Sidewinder X1",
        price: 400,
        description: "Impresora 3D silenciosa con gran volumen de construcción y cama caliente.",
        stock: 7,
        category: 'Impresoras 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiuubah7d4gV3RTkDI6yjDlYcK3c7bhf5Yg&s"
    },
    {
        id: 5,
        name: "Impresora 3D Elegoo Mars 2 Pro",
        price: 350,
        description: "Impresora 3D de resina con gran precisión y alta calidad de impresión.",
        stock: 6,
        category: 'Impresoras 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKbVCZttB8gOUI4ysR256_yKXK6KlFNN2sg&s"
    },

    // Filamentos 3D
    {
        id: 6,
        name: "Filamento PLA 1.75mm Rojo",
        price: 25,
        description: "Filamento PLA de 1 kg, color rojo, para impresoras FDM.",
        stock: 20,
        category: 'Filamentos 3D',
        img: "https://printalot.com.ar/cdn-cgi/image/width=1000,height=1000,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/media/2024/04/FPLA17502110.jpg"
    },
    {
        id: 7,
        name: "Filamento PETG 1.75mm Transparente",
        price: 30,
        description: "Filamento PETG resistente al calor, ideal para piezas funcionales.",
        stock: 15,
        category: 'Filamentos 3D',
        img: "https://printalot.com.ar/cdn-cgi/image/width=1000,height=1000,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/media/2024/04/FPET28510301cs.jpg"
    },
    {
        id: 8,
        name: "Filamento ABS 1.75mm Negro",
        price: 28,
        description: "Filamento ABS de alta resistencia mecánica, color negro.",
        stock: 10,
        category: 'Filamentos 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTXw-mWDZ_hKD6yfKasjnUVrYBgYg2yQRKw&s"
    },
    {
        id: 9,
        name: "Filamento TPU 1.75mm Blanco",
        price: 35,
        description: "Filamento flexible TPU para impresiones elásticas, color blanco.",
        stock: 8,
        category: 'Filamentos 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXtG9Z0H0tRZFZnNL2fUvYYrQ1U3W43hUww&s"
    },
    {
        id: 10,
        name: "Filamento PLA+ 1.75mm Verde",
        price: 27,
        description: "Filamento PLA+ mejorado para impresiones más resistentes, color verde.",
        stock: 12,
        category: 'Filamentos 3D',
        img: "https://grilon3.com.ar/wp-content/uploads/2020/09/pla_verde2.jpg"
    },

    // Accesorios 3D
    {
        id: 11,
        name: "Boquilla de Impresión 0.4mm",
        price: 5,
        description: "Boquilla de repuesto para impresoras FDM, diámetro de 0.4mm.",
        stock: 50,
        category: 'Accesorios 3D',
        img: "https://http2.mlstatic.com/D_NQ_NP_835152-MLA76705001235_052024-O.webp"
    },
    {
        id: 12,
        name: "Plataforma de impresión magnética",
        price: 20,
        description: "Placa flexible y magnética para facilitar el despegado de piezas.",
        stock: 25,
        category: 'Accesorios 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJTLfJXNBuwyNwOAZzr60NPHTvnb-LA0nxw&s"
    },
    {
        id: 13,
        name: "Extrusor de metal",
        price: 45,
        description: "Extrusor de alta calidad para una mayor durabilidad y precisión.",
        stock: 10,
        category: 'Accesorios 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBw9zh4Ib0oei8JDIndP0pXhhWM9zzoi_kw&s"
    },
    {
        id: 14,
        name: "Kit de nivelación automática",
        price: 60,
        description: "Sistema de nivelación automática para mejorar la adhesión de las capas.",
        stock: 5,
        category: 'Accesorios 3D',
        img: "https://m.media-amazon.com/images/I/61-3Xpt+4KL._SL1500_.jpg"
    },
    {
        id: 15,
        name: "Cinta Kapton 50mm",
        price: 15,
        description: "Cinta Kapton resistente a altas temperaturas, ideal para la cama de impresión.",
        stock: 30,
        category: 'Accesorios 3D',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW6Fo6BfRn_WZ3sho09DPk1XKGLH9kQUEow&s"
    }
];



export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductsById = (productsId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        },500)
    })
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            resolve(products.filter(prod => prod.category === productsCategory))
        }, 500)
    })
}