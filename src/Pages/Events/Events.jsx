import { useState } from 'react'
import Modal from "../../_layout/Modal"
import events from "./Event-Data.js"

function EventsPage(){

  const [modalVisible, setModalVisible] = useState(false)
  const [imgIndex,     setImgIndex]     = useState(0)
  const [imgGroupName, setImgGroupName] = useState("")
  const [filenames,    setFilenames]    = useState([])

  const modalProps = {
    activeImgGroup: imgGroupName,
    imgIndex: imgIndex,
    setImgIndex: setImgIndex,
    thumbs: filenames,
    isVisible: modalVisible,
    onModalHide: () => hideModal()
  }

  function showModal(hyphenatedName, i, thumbs){
    setImgGroupName(hyphenatedName)
    setImgIndex(i)
    setFilenames(thumbs)
    setModalVisible(true)
  }

  function hideModal(){
    setImgGroupName(null)
    setImgIndex(0)
    setFilenames([])
    setModalVisible(false)
  }

  function event(details, i){
    const hyphenatedName = details.name.split(" ").join("-")
    return(
      <section className="event" key={i}>
        <h3 id={hyphenatedName}>
          {details.name}
        </h3>

        <p className="event-date">
          {details.date}
        </p>

        {
          details.desc.map((paragraph, j) => {
            return <p key={j} dangerouslySetInnerHTML={{__html: paragraph}} />
          })
        }

        {
          details.logo ? <img className='img-fluid py-4' src={`/img/events/${hyphenatedName}/${details.logo}`} /> : null
        }

        <div className="row gy-4 thumbnailGroup" data-group-name={hyphenatedName}>
          { details.thumbs?.map((path, j) =>{
            return (
                <img key={j}
                  className="img-fluid col-4 rounded-1 thumbnail"
                  src={`/img/events/${hyphenatedName}/thumbs/${path}`}
                  onClick={()=>showModal(hyphenatedName, j, details.thumbs)}
                />
              )
            })
          }
        </div>
      </section>
    )
  }

  return(
    <div id="events">
      <h1>Events</h1>

      <p>
        If you'd like to host an event at the PGH Dance Game Space,
        send an email to <code>pgh.dance.game.space@gmail.com</code>.
      </p>

      <hr style={{"margin": "2em 0em"}} />

      {events.upcoming.length > 0 &&
        <section className="event-group">
          <h2 id="Upcoming-Events">Upcoming Events</h2>
          { events.upcoming.map((upcomingEvent,i) => event(upcomingEvent, i)) }
        </section>
      }

      <section className="event-group">
        <h2 id="Past-Events">Past Events</h2>
        { events.past.map((pastEvent, i) => event(pastEvent, i)) }
      </section>

      <Modal {...modalProps} />
    </div>
  )
}

export default EventsPage
