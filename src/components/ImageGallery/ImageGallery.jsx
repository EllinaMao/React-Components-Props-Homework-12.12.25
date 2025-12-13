import React from "react";
import styles from "./ImageGallery.module.css";


/*3. Создайте компонент ImageGallery, который позволяет пользователю переключаться между различными изображениями.
 */

class ImageGallery extends React.Component {
  state = {
    currentImageIndex: 0,
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        prevState.currentImageIndex + 1 < this.props.images.length
          ? prevState.currentImageIndex + 1
          : 0,
    })); //if index more = false, index set to 0
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        prevState.currentImageIndex - 1 + this.props.images.length
          ? prevState.currentImageIndex - 1
          : this.props.images.length - 1,
    }));//if index less = false, index se to 0
  };

    render() {
    const { images } = this.props || [];
    const { currentImageIndex } = this.state;

    if (images.length === 0) {
      return <div style={{ color: "red" }}>No images</div>;
    }
    const currentImage = images[currentImageIndex];

    return (
      <div className={styles.container}>
        <h2>Image Gallery</h2>
            <form>
                <button type="button" onClick={this.handlePrev}>Previous</button>
                <button type="button" onClick={this.handleNext}>Next</button>
            </form>
        <img
            src = {currentImage.src|| ""}
            alt = {currentImage.alt || `Image ${currentImageIndex + 1}`}
            className={styles.gallery}></img>
      </div>
    );
  }


}

export default ImageGallery;