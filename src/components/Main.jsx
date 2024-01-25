import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import homeimg from "../assets/navbar/sale.png"
import kreslo from "../assets/main/Rectangle 4.png"



export default function Main() {
    const data = [
        { id: 1, img: kreslo, name: "Парикмахерское кресло «Норм» гидравлическое", price: 9900 },
        { id: 2, img: kreslo, name: "Парикмахерское кресло «Норм» гидравлическое", price: 9900 },
        { id: 3, img: kreslo, name: "Парикмахерское кресло «Норм» гидравлическое", price: 9900 },
        { id: 4, img: kreslo, name: "Парикмахерское кресло «Норм» гидравлическое", price: 9900 },
    ]
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    function addcard(index) {

        basket.push(data[index])
        localStorage.setItem('basket', JSON.stringify(basket))
    }



    return (
        <div className='main'>

            <Header />
            <Navbar />
            <img src={homeimg} alt="" />
            <div className="cards">
                {
                    data.map((item, index) => (
                        <div className='card' key={index}>
                            <img src={item.img} alt="" />
                            <span>{item.name}</span>
                            <p>{item.price}</p>
                            <button onClick={() => addcard(index)}>Купить</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
