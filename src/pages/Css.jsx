import React from 'react'
import { useNavigate } from 'react-router-dom'
import img2 from "../assets/logo_css.png"

const Css = () => {
  const navigate = useNavigate()
  return (
    <div className='lang'>
<img src={img2} alt="" />
<h3>CSS3 Styling</h3>
<p>This course breaks down the fundamentals of CSS into digestible, easy to understand pieces. Over the next few modules, you'll learn how the core aspects of CSS work and how to use them effectively in your projects. Use the menu pane by the "Learn CSS" logo to navigate the modules.</p>
<p>You'll learn CSS fundamentals like the box model, cascade and specificity, flexbox, grid and z-index. And, along with these fundamentals, you'll learn about functions, color types, gradients, logical properties and inheritance to make you a well-rounded front-end developer, ready to take on any user interface.</p>
<p>This course is created for beginner and advanced CSS developers alike. You can go through the series from start to finish to get a general understanding of CSS from top to bottom, or you can use it as a reference for specific styling subjects. For those new to web development overall, check out Learn HTML to learn all about how to write markup and link your stylesheets.</p>      
<button onClick={() => navigate(-1)} className="buton">
            Go Back
          </button>
    </div>
  )
}

export default Css
