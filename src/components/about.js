import React from 'react'

class About extends React.Component{

    render(){
        return(
            <section id="about">
  <div className="container">
    <div className="avatar">
      <img className="img-circle" width="50%" src="https://avatars2.githubusercontent.com/u/28831625?s=460&v=4" alt="Profile" />
    </div>
    <h3>I'm <strong>Himel</strong>, a Software Engineer.</h3>
    <h3>I love all things computer science and ethical hacking.</h3>
    <h3>Have a look at some of my working <a target="_blank"  rel="noreferrer" href="https://github.com/Swe-HimelRana"> Projects</a>.</h3>
    <h3>For more check out my academic &amp; professional <a target="_blank" rel="noreferrer" href="https://himelrana.com/resume.pdf">Resume</a>.</h3>
    <h3>Contact me at <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/swe-himelrana">LinkedIn</a> or by <a href="mailto:contact@himelrana.com">Email</a>.</h3>
    <div className="social">
      <br />
      <a target="_blank" rel="noreferrer" href="https://www.hackthebox.eu/profile/29482"> <img src="https://www.hackthebox.eu/badge/image/29482" alt="Hack The Box" /></a>
      <ul className="social-links">
        <li><a target="_blank" rel="noreferrer" href="https://github.com/Swe-HimelRana"><i className="fa fa-github" /></a></li>
        <li><a target="_blank" rel="noreferrer" href="mailto:contact@himelrana.com"><i className="fa fa-envelope" /></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/swe-himelrana"><i className="fa fa-linkedin" /></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/8780854/himel-rana"><i className="fa fa-stack-overflow" /></a></li>
        <li><a target="_blank" rel="noreferrer" href="https://medium.com/@himelrana"><i className="fa fa-medium" /></a></li> 
        <li><a target="_blank" rel="noreferrer" href="https://marketplace.visualstudio.com/publishers/Himel"><i className="fa fa-windows" /></a></li> 
        <li><a target="_blank" rel="noreferrer" href="https://pypi.org/user/himelrana/"><strong>PyPI</strong></a></li> 
      </ul>
    </div>
  </div>
</section>

        )
    }
}

export default About