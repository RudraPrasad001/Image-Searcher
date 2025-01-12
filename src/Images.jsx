function Images(props){

    const images= props.images
    console.log(images)
    const imageList = images.map((image,index)=> {return<img key={index} src={image.webformatURL}></img>})

    return(
        <div className="image-container">
            {imageList}
        </div>
    )
}
export default Images