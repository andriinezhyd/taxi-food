function getHeight() {
    let imgArr = document.querySelectorAll(".visual");

    if(window.innerWidth > 575) {
        imgArr.forEach((item, i) => {
            item.style.height = item.offsetWidth + 'px';
        });
    } else {
        imgArr.forEach((item, i) => {
            item.style.height = '';
        });
    }
}

class LocalStorage {
    constructor() {
        this.keyName = 'products'
    }

    getProducts() {
        let productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(product) {
        let products = this.getProducts();
        // const index = products.indexOf(product);
        // products.push(product);
        // console.log(index);
        products.forEach((el) => {
            console.log(el)
            if(el === product) {
                console.log("есть такая - увеличиваем количество")
                products.push(product);
            } else {
                console.log("нет такой пиццы, добавляем ее");
                // products.splice(index, 1)
            }
        });


        localStorage.setItem(this.keyName, JSON.stringify(products));
    }
}
let cartStore = new LocalStorage();

