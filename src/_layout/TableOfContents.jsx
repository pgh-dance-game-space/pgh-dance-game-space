import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"

function TableOfContents({showToC}){
  const [ToC, setToC] = useState()
  const normalizedPathname = location.pathname.replace(/^\//, '').toLowerCase()

  useEffect(() => {
    setToC(null)
    setToC(initToC())
  }, [location.pathname])

  function listItems(list){
    return list?.map((listItem, i)=>{

      return(
        <li key={'section'+i}>
          <a href={'#' + listItem.id}> {listItem.text}</a>
          <ul>
            { listItem.children ? listItems(listItem.children) : null }
          </ul>
        </li>
      )
    })
  }

  function initToC(){
    if (showToC[normalizedPathname] === false){ return null }

    // get all <h2> elements in this page and transform into a Table of Content
    // for right-side-of-page navigation

    // an <h2> on a page maps to an <ul> in a Table of Contents
    // and each <h3> under that <h2> maps to an <li>
    // on the /events page, "Upcoming Events" is an <h2> and "Past Events" is a separate <h2>
    const h2s = Array.from(document.getElementsByTagName("h2"));

    return h2s.map(el =>{
      const container = el.parentElement;
      return {
        text:     el.dataset.tocName ?? el.innerText,
        id:       el.id,
        children: Array.from(container.getElementsByTagName("h3")).map(item=>{
          return{
            text: item.dataset.tocName ?? item.innerText,
            id:   item.id,
          }
        })
      }
    })
  }


  const el = () => {

    if (!ToC || ToC.length <= 0){
      return <div></div>
    }

    return (
      <div id="toc-container" className="bd-toc col-lg-2 me-2 d-lg-block d-none">
        <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
        <ul id="TableOfContents">
          {listItems(ToC)}
        </ul>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/"      element={ el() } />
      <Route path="/:page" element={ el() } />
    </Routes>
  )
}

export default TableOfContents
