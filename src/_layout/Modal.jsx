import { useEffect, useState } from "react"

function Modal({isVisible, activeImgGroup, imgIndex, thumbs, onModalHide, setImgIndex}){

  let imgSrc = `/img/events/${activeImgGroup}/full/${thumbs[imgIndex]}`
  const [modalInit, setModalInit] = useState(false)

  const incrementIndex = () => {
    setImgIndex(prevIndex => prevIndex+1)
  }

  const decrementIndex = () => {
    setImgIndex(prevIndex => prevIndex-1)
  }

  const kbd = {
    "Escape":     onModalHide,
    "ArrowLeft":  decrementIndex,
    "ArrowRight": incrementIndex
  }

  const keyboardEventListener = (e) => {
    kbd[e.key] ? kbd[e.key]() : {}
  }

  let touchstartX = 0
  let touchendX = 0

  const checkSwipeDirection = () => {
    if (touchendX < touchstartX) { incrementIndex() }  // swipe left
    if (touchendX > touchstartX) { decrementIndex() }  // swipe right
  }

  useEffect(() => {
    if (isVisible && !modalInit){
      window.addEventListener("keydown", keyboardEventListener)

      window.addEventListener("touchstart", e => { touchstartX = e.changedTouches[0].screenX })
      window.addEventListener("touchend",   e => { touchendX   = e.changedTouches[0].screenX; checkSwipeDirection() })

      setModalInit(true)
    }
  }, [isVisible]);

  const updateImg = () => {
    if (imgIndex < thumbs.length && imgIndex >= 0) {
      imgSrc = `/img/events/${activeImgGroup}/full/${thumbs[imgIndex]}`
    } else {
      onModalHide()
    }
  }

  useEffect(()=>{
    updateImg()
  }, [imgIndex])


  return (
    isVisible ? (
      <div id="modal" style={{"display": 'block'}}>
        <div id="modal-content">
          <div id="modal-nav">
            <div id="currentIndex">
              {imgIndex+1}/{thumbs.length}
            </div>

            <div id="prev-next">
              <button id="prev-image-link" onClick={decrementIndex} aria-label="previous image"> ← </button>
              <button id="next-image-link" onClick={incrementIndex} aria-label="next image"> → </button>
            </div>

            <button href="#" className="close" onClick={onModalHide}>x</button>
          </div>
          <img id="modal-image" onClick={incrementIndex} src={imgSrc} />
        </div>
      </div>
    ) : null
  )
}

export default Modal
