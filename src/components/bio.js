import React from 'react';
import '../style/app.scss'


function Bio (props) {

        return(
            <div className = "biotext" style={{display: props.bio? "block" : "none"}}>

                  <p>
                  After getting my Master's degree in History at Liège University and working in different areas,
                  I was looking for a new challenge.
                  I’m adaptive and curious so I decided to learn web development,
                  and the front end side of it quickly became a new passion for me.
                  It allows me to develop my creativity and keep on learning new things every day.
                  Now, I’m looking forward to working in a challenging and dynamic environment.
                  </p>

            </div>

)


}

export default Bio;
