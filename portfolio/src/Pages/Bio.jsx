import React from 'react'
import "./Bio.css"

const Bio = () => {
  return (
    <div>
      
      <div className='bio_info-div'>
      <div className='bio_div_one'>
        <h3>Quick Info</h3>
        <p>Name : Rahul Singh</p>
        <hr />
        <p>Date Of Birth : 1st March, 1996</p>
        <hr />
        <p>Age : 26</p>
        <hr />
        <p>Birth Place : New Delhi</p>
        <hr />
        <p>Howntown : New Delhi</p>
        <hr />
        <p>Nationality : Indian</p>
      </div>
      <div className='bio_div_two'>
        <h3>Physical Stats & More</h3>
        <p>Height (approx) : 5'5" feets (165 cm)</p>
        <hr />
        <p>Weight (approx) : 60 kg (132.277 pounds)</p>
        <hr />
        <p>Body Mesurements (approx) : <br /><span>- Chest : 40 inches</span><br /><span>- Waist : 30 inches</span><br /><span>- Bicheps : 14 inches</span></p>
        <hr />
        <p>Eye Colour : Black</p>
        <hr />
        <p>Hair Colour : Black</p>
      </div>
      </div>
    </div>
  )
}

export default Bio