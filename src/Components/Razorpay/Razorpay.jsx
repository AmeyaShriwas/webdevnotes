import React, { useState } from 'react'

const Razorpay = () => {
    const [pdfs] = useState([
        { name: 'PDF 1', price: 300 },
        { name: 'PDF 2', price: 300 },
        { name: 'PDF 3', price: 300 },
    ]);

    const totalPrice = pdfs.reduce((sum, pdf) => sum + pdf.price, 0);

    const handlePayment = async () => {
        const response = await fetch('https://checkout.razorpay.com/v1/checkout.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: totalPrice }),
        });

        const orderData = await response.json();

        const options = {
            key: 'your_key_id', // Enter the Key ID generated from the Dashboard
            amount: orderData.amount,
            currency: orderData.currency,
            name: 'Your Company Name',
            description: 'Purchase of PDFs',
            order_id: orderData.id,
            handler: function (response) {
                alert('Payment Successful');
                console.log(response);
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Customer Address',
            },
            theme: {
                color: '#F37254',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div>
            <h1>PDF Purchase</h1>
            <ul>
                {pdfs.map((pdf, index) => (
                    <li key={index}>
                        {pdf.name} - ₹{pdf.price}
                    </li>
                ))}
            </ul>
            <h2>Total Price: ₹{totalPrice}</h2>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
}

export default Razorpay