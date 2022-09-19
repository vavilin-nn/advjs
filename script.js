"use strict";

const goods = [
    { title: 'Аква', price: 50_000, img: 'prod1.jpg' },
    { title: 'Лофт', price: 55_000, img: 'prod2.jpg' },
    { title: 'Модерн', price: 35_000, img: 'prod3.jpg' },
    { title: 'Сити', price: 25_000, img: 'prod4.jpg' },
];



class GoodsItem {
    constructor({ title = '', price = 0, img = 'отсуствует' }) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `
        <div class="goods-item">
            <img class="prod-img" src="img/${this.img}" alt="${this.title}"></p>
            <h3 class="prod-h3">${this.title}</h3>
            <p class="prod-price">Цена: ${this.price} &#8381;</p>
            <button class="cart-button">В корзину</button>
        </div>
        `
    }
}

class GoodsList {
    list = [];
    fetchGoods() {
        this.list = goods;
    }
    totalPrice() {
        return this.items.reduce((prev, item) => {
            return prev + item.price;
        }, 0)
    }
    render() {
        const resultList = this.list.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = resultList.join(' ');
    }

}

const totalPricePage = goodsList.totalPrice();
document.querySelector('.total').innerHTML
    = `Стоимость всех товаров на странице: ${totalPricePage};`

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();




/*
const renderGoodsItem =
    (title = 'товар', price = 'по запросу', img = 'отсуствует') => {
        return `
    <div class="goods-item">
    <img class="prod-img" src="img/${img}" alt="${title}"></p>
    <h3 class="prod-h3">${title}</h3>
    <p class="prod-price">Цена: ${price} &#8381;</p>
    <button class="cart-button">В корзину</button>
    </div>
    `;
    };


const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
}
renderGoodsList(goods);
*/
