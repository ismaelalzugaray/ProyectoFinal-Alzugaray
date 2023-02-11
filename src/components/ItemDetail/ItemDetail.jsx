import "./ItemDetail.css"

function ItemDetail ({title, imgurl, price, detail}){
    return (

        <div className="divContainer">
            <div className="divImg">
                <img src={imgurl} alt={title} />
            </div>
            <div className="divDetail">
                <h3>{title}</h3>
                <p>{detail}</p>
                <span>${price}</span>
            </div>
        </div>



        // <div className="detailCard">
        //     <div className="detailTitle">
        //         <h2>{title}</h2>
        //     </div>
        //     <div className="detailImg">
        //         <img src={imgurl} alt="imagen" />
        //     </div>
        //     <div className="detailInfo">
        //         <h4>${price}</h4>
        //         <p>{detail}</p>
        //     </div> 
        // </div>
    )
}

export default ItemDetail