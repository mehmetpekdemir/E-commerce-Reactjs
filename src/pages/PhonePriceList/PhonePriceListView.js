import React, { useState } from 'react';
import Select from 'react-select'

const PhonePriceListView = (props) => {
    const [selected, setSelected] = useState(null);

    const options = [
        { value: 'iphone7', label: 'Iphone 7' },
        { value: 'iphone8', label: 'Iphone 8' },
        { value: 'iphoneX', label: 'Iphone X' },

        { value: 'samsungNote20', label: 'Samsung Galaxy Note 20' },
        { value: 'samsungNote10', label: 'Samsung Galaxy Note 10' },
        { value: 'samsungS10', label: 'Samsung GalaxayS10 Plus' },

        { value: 'xiomiRedmi9', label: 'Xiomi Redmi 9' },
        { value: 'xiomiRedmi10', label: 'Xiomi Redmi 10' },
        { value: 'xiomiRedmi10Pro', label: 'Xiomi Redmi 10 Pro' }
    ]


    const { products } = props;

    const calculateAverage = () => {
        if (selected) {
            let data = [];
            data.push(products.filter((product) => ((product.productName === selected.selectedOption.value))));

            let priceList = [0];
            data.map((arr) => (
                arr.map((price) => priceList.push(price.productPrice))
            ));
            let totalCount = priceList.length;
            let totalPrices = priceList.reduce((a, v) => a + v);

            let average = (totalPrices / (totalCount - 1));
            return average;
        }
    }

    const handleChange = (selectedOption) => {
        setSelected({ selectedOption });
    }
    const average = calculateAverage();

    return (
        <>
            <div><Select className="mt-4 col-md-6 col-offset-4"
                options={options}
                onChange={handleChange} />
            </div>
            <div>
                <h3 className="mt-4 col-md-6 col-offset-4">Average price = {average}</h3>
            </div>
        </>

    )
};

export default PhonePriceListView;