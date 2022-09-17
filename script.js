"use strict";

const goods = [
    { title: 'Аква', price: 50_000, img: 'prod1.jpg' },
    { title: 'Лофт', price: 55_000, img: 'prod2.jpg' },
    { title: 'Модерн', price: 35_000, img: 'prod3.jpg' },
    { title: 'Сити', price: 25_000, img: 'prod4.jpg' },
];

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

