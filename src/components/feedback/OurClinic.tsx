import React from 'react'
import "./OurClinic.scss"
import OurClinic1 from "../../assets/svg/OurClinic1.svg"
import OurClinic2 from "../../assets/svg/OurClinic2.svg"
import OurClinic3 from "../../assets/svg/OurClinic3.svg"
import OurClinic4 from "../../assets/svg/OurClinic4.svg"
import OurClinic5 from "../../assets/svg/OurClinic5.svg"
import OurClinic6 from "../../assets/svg/OurClinic6.svg"
import OurClinic7 from "../../assets/svg/OurClinic7.svg"
import OurClinic8 from "../../assets/svg/OurClinic8.svg"

function OurClinic() {
    const clinicBlocks = [
        {
            title: "Посмотрите как выглядит наша клиника",
            images: [OurClinic1, OurClinic2, OurClinic3, OurClinic4, OurClinic5],
        },
        {
            title: "Так отзываются о нашей работе клиенты",
            images: [OurClinic1,  OurClinic7, OurClinic6, OurClinic8, OurClinic5], 
        },
    ];

    return (
        <div className='ourclinic'>
            <div className='our-container'>
                {clinicBlocks.map((block, index) => (
                    <div key={index} className='our'>
                        <div className='our-img'>
                            <img className='img' src={block.images[0]} alt="" />
                            <div className='our-img2'>
                                <h3>{block.title}</h3>
                                <div>
                                    <img src={block.images[1]} alt="" />
                                    <img className='im2' src={block.images[2]} alt="" />
                                    <img className='im3' src={block.images[3]} alt="" />
                                </div>
                            </div>
                            <img className='img' src={block.images[4]} alt="" />
                        </div>

                        <div className='image-container'>
                            {[1, 2, 3, 4].map((_, i) => (
                                <button key={i}></button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurClinic;
