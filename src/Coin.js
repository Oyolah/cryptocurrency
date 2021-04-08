import './Coin.css'

const Coin = ({
    name, 
    image, 
    symbol, 
    price, 
    volume, 
    priceChange, 
    marketcap}) => {

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>  
                    <p>{symbol}</p>                 
                </div>
                <div className="coin-data">
                    <p className="coin-price">&#8364;{price}</p>
                    <p className="coin-volume">&#8364;{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : <p className="coin-percent green">{priceChange.toFixed(2)}%</p>}
                    <p className="coin-marketcap">Mkt Cap: &#8364;{marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
