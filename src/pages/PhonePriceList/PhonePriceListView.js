import React from 'react'

const PhonePriceListView = (props) => {
    const { products } = props;

    const calculateAverage = () => {

        let data = [];
        data.push(products.filter((product) => ((product.productName === "iphone7"))));

        let priceList = [0];
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
            <h3>Average price = {average}</h3>
        </>

    )
};

export default PhonePriceListView;