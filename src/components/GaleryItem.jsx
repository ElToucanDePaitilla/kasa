const GaleryItem = (props) => { 
console.log(props)    
    return (
        <div key={props.bien.id} className="gallery-item">
          <img src={props.bien.cover} alt={props.bien.title} className="gallery-img" />
          
          {/* Overlay dégradé */}
          <div className="gradient-overlay"></div>

          <div className="gallery-title-overlay">
            <h3>{props.bien.title}</h3>
          </div>
        </div>
    )

}

export default GaleryItem