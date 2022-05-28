import React from 'react'
import video1 from "../Videos/bestbuy.com.mp4"
import video2 from "../Videos/stylecrazeppt.mp4"
import video3 from "../Videos/boat.mp4"
import "./Project.css"
const projectData =[
  {
    project_number : 1,
    project_name : "Best Buy",
    video : video1,
    description : "This is an American E-commerce website where you can purchase electronic products.",
    features : "Features: Articles for Women, E-Commerce Website, Affiliate Marketing",
    tech_stack : "Tech Stack: HTML | CSS | Advance Javascript ",
    responsibility : "Areas of responsibility: Managed the team and codes on the Github, Developed responsive Subheader pages  like- Make Up, Skin Care, Hair Care and etc, Worked on JS part with the team",
    working_day : "A collaborative project built by a team of 6 executed in 5 days."

  },
  {
    project_number : 2,
    project_name : "Style Craze",
    video : video2,
    description : "This website is totally designed for women to maintain their health and wellness.",
    features : "Features: Articles for Women, E-Commerce Website, Affiliate Marketing",
    tech_stack : "Tech Stack: HTML | CSS | Advance Javascript ",
    responsibility : "Areas of responsibility: Managed the team and codes on the Github, Developed responsive Subheader pages  like- Make Up, Skin Care, Hair Care and etc, Worked on JS part with the team",
    working_day : "A collaborative project built by a team of 6 executed in 5 days."
  },
  {
    project_number : 3,
    project_name : "Boat Life-Style",
    video : video3,
    description : "The Boat is an Indian Company established in 2015 in Delhi. In 2020, the boat company became the fifth-largest wearable brand globally, and it is the first Indian company to get that title.",
    features : "Features: Articles for Women, E-Commerce Website, Affiliate Marketing",
    tech_stack : "Tech Stack: HTML | CSS | Advance Javascript ",
    responsibility : "Areas of responsibility: Managed the team and codes on the Github, Developed responsive Subheader pages  like- Make Up, Skin Care, Hair Care and etc, Worked on JS part with the team",
    working_day : "A collaborative project built by a team of 6 executed in 5 days."
  },
]
const Projects = () => {
  return (
    <div>
      {projectData.map((element,index)=>(
        <div id={index} className="project_container">
          <div>
          <div>
            <h2>PROJECT - {element.project_number}</h2>
          </div>
          <div>
            <h3>{element.project_name}</h3>
          </div>
          <div>
                
                <video src={element.video} width="90%"
                    controls
                    loop
                    autoPlay
                    muted></video>
            </div>
          <div>
            <p>◉ {element.description}</p>
          </div>
          <div>
            <p>◉ {element.features}</p>
          </div>
          <div>
            <p>◉ {element.tech_stack}</p>
          </div>
          <div>
            <p>◉ {element.responsibility}</p>
          </div>
          <div>
            <p>◉ {element.working_day}</p>
          </div>
         
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects