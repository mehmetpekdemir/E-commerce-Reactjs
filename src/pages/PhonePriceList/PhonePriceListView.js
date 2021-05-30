import React from 'react'

const PhonePriceListView = (props) => {
    const { products } = props;

    const calculateAverage = () => {

        let data = [];
        data.push(products.filter((product) => ((product.brand === "IPHONE")))); //productName olacak.

        let priceList = [];
        data.map((arr) => (
            arr.map((price) => priceList.push(price.productPrice))
        ));
        let totalCount = priceList.length;
        let totalPrices = priceList.reduce((a, v) => a + v);

        let average = (totalPrices / totalCount);
        return average;
    }

    let average = calculateAverage();

    return (
        <>
            <h3>{average}</h3>
        </>

    )
};

export default PhonePriceListView;