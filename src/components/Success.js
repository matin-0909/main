import React from "react";
import kisses from "../kisses.gif";
import Pic from "../Pet Cat Valentine's Day Poster in Black and White in Polaroid Style.jpg";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
   <img 
  className="Pic" 
  src={Pic} 
  alt="Pic" 
  style={{ width: "300px", height: "300px" }}
/>
    {/* Personalized success messages */}
    <p className="App-text-success">
     You're my favorite movie buddy, my princess, and the one I enjoy every moment with.
With you, even the simplest things feel special — whether we're watching a film, talking about nothing, or just sitting quietly together.
You make my days brighter, my laughs louder, and my heart calmer.
Being with you feels like home, like happiness I didn’t know I needed.
I’m so grateful for every smile, every memory, and every second we share. 💖✨
    </p>
    <p className="App-text-success">
      Looking forward to spending Valentine's Day with you, Sakshi.
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">02/05/2023</p>
  </div>
);

export default Success;
