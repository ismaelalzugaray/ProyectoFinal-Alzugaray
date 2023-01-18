import "./ItemDetail.css"

function ItemDetail ({title, imgurl, price, detail}){
    return (
        <div className="detailCard">
            <div className="detailTitle">
                <h2>{title}</h2>
            </div>
            <div className="detailImg">
                <img src={imgurl} alt="imagen" />
            </div>
            <div className="detailInfo">
                <h4>${price}</h4>
                <p>{detail}</p>
            </div> 
        </div>
    )
}

export default ItemDetail