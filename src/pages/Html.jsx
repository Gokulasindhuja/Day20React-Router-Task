import React from 'react'
import { useNavigate } from 'react-router-dom'
import img3 from "../assets/logo_html.png"

const Html = () => {
  const navigate = useNavigate()
  return (
    <div className='lang'>
<img src={img3} alt="" />
<h3>HTML5 Markup</h3>
<p>This course is part of the Web Design for Everybody: Basics of Web Development & Coding Specialization
When you enroll in this course, you'll also be enrolled in this Specialization.</p>
<p>Learn new concepts from industry experts</p>
<p>Gain a foundational understanding of a subject or tool</p>
<p>Develop job-relevant skills with hands-on projects</p>
<p>Earn a shareable career certificate</p>
<button onClick={() => navigate(-1)} className="buton">
            Go Back
          </button>
    </div>
  )
}

export default Html
