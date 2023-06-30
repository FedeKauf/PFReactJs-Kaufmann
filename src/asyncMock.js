
const products = [
    {
        id:'1',
        name: 'Etios',
        price: 5000000,
        img: 'https://www.amiun.com.ar/img/nuevos/t_31.jpg',
        stock: 10,
        category: 'Automóviles',
        description: 'Motor 1.5 103CV, nafta, caja manual de 6 velocidades ó automática de 4 velocidades'
    },
    {
        id:'2',
        name: 'Yaris',
        price: 6000000,
        img: 'https://www.amiun.com.ar/img/nuevos/t_20.jpg',
        stock: 10,
        category: 'Automóviles',
        description: 'Motor 1.5 107CV, nafta, caja manual de 6 velocidades ó automática de 7 velocidades'
    },
    {
        id:'3',
        name: 'Corolla',
        price: 7000000,
        img: 'https://www.amiun.com.ar/img/nuevos/t_24.jpg',
        stock: 10,
        category: 'Automóviles',
        description: 'Motor 2.0 170CV, nafta, caja manual de 6 velocidades ó automática de 10 velocidades'
    },
    {
        id:'4',
        name: 'Hilux',
        price: 8000000,
        img: 'https://www.amiun.com.ar/img/nuevos/t_7.jpg',
        stock: 10,
        category: 'Pick-Ups',
        description: 'Motor 2.8 204CV, diesel, caja manual de 6 velocidades ó automática de 6 velocidades'
    },
    {
        id:'5',
        name: 'SW4',
        price: 15000000,
        img: 'https://www.amiun.com.ar/img/nuevos/t_10.jpg',
        stock: 10,
        category: 'Pick-Ups',
        description: 'Motor 2.8 204CV, diesel, caja manual de 6 velocidades ó automática de 6 velocidades'
    },
    {
        id:'6',
        name: 'Land Cruiser Prado',
        price: 25000000,
        img: 'https://www.amiun.com.ar/img/nuevos/t_15.jpg',
        stock: 10,
        category: 'Pick-Ups',
        description: 'Motor 4.0 275CV, nafta, caja manual de 6 velocidades ó automática de 5 velocidades'
    },
]
export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};
export const getProductsByCategory = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productId))
        }, 500)
    })
};
