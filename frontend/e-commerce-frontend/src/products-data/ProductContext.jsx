import { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const initialProducts = [
        {
            name: "SoundPEATS T3 Pro True Wireless with Dual Mic AI Call Noise Reduction",
            oldPrice: 399000,
            price: 190000,
            count: 0,
            store: "SOUNDPEATS OFFICIAL",
            location: "Jakarta Utara",
            category: "Electronics",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/11/12/f0e9d55f-d8de-4391-8d51-faa365094f08.png",
        },
        {
            name: "[FS] Logitech Wireless Mouse M191 - Mid Grey",
            oldPrice: 299000,
            price: 138000,
            count: 0,
            store: "Logitech Official Store",
            location: "Jakarta Timur",
            category: "Electronics",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/28/ba26278d-9e3c-4e9c-94e2-7e3c44c8bca8.jpg",
        },
        {
            name: "IDEALIFE Oven Listrik Low Watt Kapasitas 35 Liter IL-335 - Cream",
            oldPrice: 1280000,
            price: 1280000,
            count: 0,
            store: "Multi Electronic",
            location: "Jakarta Pusat",
            category: "Electronics",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/7/20/3635b3b6-7eca-4ac2-8de3-5db0bd95b15c.jpg",
        },
        {
            name: "ACER Predator Helios Neo 16 72DN RTX4060 i7 13700HX 16/1TB WQXGA 165Hz - LAPTOP, 16/1TB SSD",
            oldPrice: 2829900,
            price: 20499000,
            count: 0,
            store: "Acer Authorized Store Jakarta",
            location: "Tangerang",
            category: "Electronics",
            ratings: 5.0,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/10/22/40c427b7-1c09-47db-8637-56192ef432cc.jpg",
        },
        {
            name: "KREMLIN T-shirt Oversized - PROWLER - EVOS x Tokopedia - XL",
            oldPrice: 360000,
            price: 99900,
            count: 0,
            store: "Kremlin Official",
            location: "Bandung",
            category: "Fashion",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/23/0c2fb1e0-471a-48e7-b8f6-61f1544fd537.jpg",
        },
        {
            name: "Kaos hitam t shirt polos houseofcuff motif Snake READY HINGGA 4XL - Hitam, S",
            oldPrice: 179000,
            price:  85000,
            count: 0,
            store: "House of Cuff",
            location: "Jakarta Barat",
            category: "Fashion",
            ratings: 4.8,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/26/590bd534-68fd-4cb9-a7d4-1ce5b3270dc2.jpg",
        },
        {
            name: "COTTONINK - Atasan Blouse Wanita Navy Wish Baiba #CottoninkXAlvinxki - S",
            oldPrice: 290000,
            price: 290000,
            count: 0,
            store: "Cottonink",
            location: "Depok",
            category: "Fashion",
            ratings: 4.8,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/1/978d3228-625b-4f33-ab03-952d36798ece.jpg",
        },
        {
            name: "Yuri Top SONIA / Kemeja katun polos / Kemeja kantor premium wanita - Pink, XL",
            oldPrice: 200000,
            price: 169000,
            count: 0,
            store: "Soniainc",
            location: "Jakarta Utara",
            category: "Fashion",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/25/8c84b8ca-489f-446d-bbc3-73a4428abee1.jpg",
        },
        {
            name: "PUMA Sepatu Smash Leather Trainers black-dark shadow - 44.5",
            oldPrice: 1199000,
            price: 1199000,
            count: 0,
            store: "Puma Official Store",
            location: "Bekasi",
            category: "Sports",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/13/d1cd3aac-c8da-4a85-a915-ce2e56309644.jpg",
        },
        {
            name: "Agnite Badminton Racket / Raket Bulu Tangkis Berkualitas Isi 2 F2110",
            oldPrice: 494900,
            price: 135900,
            count: 0,
            store: "Agnite Indonesia",
            location: "Tangerang",
            category: "Sports",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/23/577a1f63-4bdc-4566-a0f4-196086713223.jpg",
        },
        {
            name: "Erspo Timnas Jersey Supporter Home Red - L",
            oldPrice: 163724,
            price: 163724,
            count: 0,
            store: "Erspo Official",
            location: "Depok",
            category: "Sports",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/10/30/1db29f43-2abf-4494-958a-570cabec84ce.jpg",
        },
        {
            name: "Manset Arm Sleeve ROCKBROS XT9002 Lengan Pendingin Pelindung Sinar UV - Hitam",
            oldPrice: 87200,
            price: 87200,
            count: 0,
            store: "Rockbros Official",
            location: "Surabaya",
            category: "Sports",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/24/b70bc58b-a1fd-4d4f-8032-828e4f84f5b9.jpg",
        },
        {
            name: "[FLASH SALE] SOMETHINC Level 1% Encapsulated Retinol",
            oldPrice: 148500,
            price: 148500,
            count: 0,
            store: "Seomthinc Official",
            location: "Tangerang",
            category: "Body Care",
            ratings: 5.0,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/24/a2705e05-4f63-4810-856a-bad99ea8ddd4.jpg",
        },
        {
            name: "Avicenna Miracle W (New) Eau de Parfum 100 ml - Parfum Wanita",
            oldPrice: 439000,
            price: 254620,
            count: 0,
            store: "C&F Store Official",
            location: "Jakarta Utara",
            category: "Body Care",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/8/16/ecbf5d42-e69d-406c-843a-d46b5642ebe5.png",
        },
        {
            name: "Fatima La Isabella EDP 50ml",
            oldPrice: 350000,
            price: 350000,
            count: 0,
            store: "Housel of Medici",
            location: "Jakarta Barat",
            category: "Body Care",
            ratings: 4.9,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2020/12/24/52171afc-a6a5-4032-8e4c-734ce94335ea.jpg",
        },
        {
            name: "SKINTIFIC Brightening 2PCS Niacinamide Moisturizer Symwhite 377 Serum",
            oldPrice: 599000,
            price: 247001,
            count: 0,
            store: "Skintific Official Store",
            location: "Jakarta Timur",
            category: "Body Care",
            ratings: 5.0,
            isWishlist: false,
            onCart: false,
            img: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/22/457a4287-0a9b-4790-bce0-9e07c6dc0ee8.jpg",
        },  
    ];

    const [products, setProducts] = useState(
        initialProducts.map((product) => ({
            ...product,
            isDiscount: product.oldPrice !== product.price, // check discount or not
        }))
    );

    const toggleWishlist = (index) => {
        setProducts((prevProducts) =>
            prevProducts.map((product, i) =>
                i === index
                    ? { ...product, isWishlist: !product.isWishlist } // toggle wishlisr
                    : product
            )
        );
    };

    const updateCartStatus = (index, count) => {
        setProducts((prevProducts) => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index].count = count;
            updatedProducts[index].onCart = count > 0; // set true if count > 0
            return updatedProducts;
        });
    };

    const updateDiscountStatus = () => {
        setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => ({
                ...product,
                isDiscount: product.oldPrice === product.price, // update discount stat
            }));
            return updatedProducts;
        });
    };

    const getItemCount = () => {
        return products.reduce((total, product) => {
            if (product.onCart) {
                return total + product.count;
            }
            return total;
        }, 0);
    };

    return (
        <ProductContext.Provider
            value={{ products, toggleWishlist, updateCartStatus, updateDiscountStatus, getItemCount }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
