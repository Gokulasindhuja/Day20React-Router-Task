import React from 'react'
import { useNavigate } from 'react-router-dom'
import img3 from "../assets/logo_html.png"

const Html = () => {
  const navigate = useNavigate()
  return (
    <div className='lang'>
<img src={img3} alt="" />
<h3>HTML5 Markup</h3>
<p>Welcome to HTML! HyperText Markup Language, or HTML, is the backbone of the web, providing the content, as well as the structure of that content, that you see displayed in your web browser.</p>
<p>Unless you're reading a PDF or a printed version of this page, this content is made up of various HTML elements and text. HTML is the content layer of the web. HTML elements are the nodes that make up the Document Object Model.</p>
<p>Cascading Style Sheets provide the look and feel, or presentation layer of the page. JavaScript is the behavior layer, often used to manipulate the objects within a document. Sites that are built with JavaScript frameworks are really just manipulating HTML. In turn, it's important to mark up your HTML in a way that scripts can easily parse and that assistive technologies can easily understand. This means writing HTML code with modern standards.</p>
<button onClick={() => navigate(-1)} className="buton">
            Go Back
          </button>
    </div>
  )
}

export default Html
