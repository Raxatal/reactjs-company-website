import React from 'react'
import TeamVideoBackground from "./Assets/backgroundwaterfall.mp4";
import TeamImage from "./Assets/gambarbersama.jpg";
import MemberImage1 from "./Assets/gambarikhmal.jpg";
import MemberImage2 from "./Assets/gambarjaa.jpg";
import MemberImage3 from "./Assets/gambarhanif.jpg";
import MemberImage4 from "./Assets/gambarfaizal.jpg";
import './Team.css';

const Team = () => {
  return (
    <div className="get-to-know-us-section">
          <video className="video-background" autoPlay loop muted>
            <source src={TeamVideoBackground} type="video/mp4" />
            Your browser does not support the video tag.
            </video>

          <div className="get-to-know-us-content">
            <h2>Meet the Team</h2>

            {/* Group Photo */}
            <div className="group-photo-section">
              <img
                src={TeamImage}
                alt="Group Company"
                className="group-photo"
              />
            </div>

            {/* Individual Introductions */}
            <div className="member-introduction">
              <div className="member">
                <img
                  src={MemberImage1}
                  alt="Member 1"
                  className="member-photo"
                />
                  <p>
                    Mr. Iqmal was motivated to start his own company, Ichiban Furniture, by his professor, Assoc. Prof. Dr. Chan Huah Yong. 
                    He is a leader who values her team's efforts in achieving that goal and is optimistic about the future of 
                    his organization. As a result of his tireless efforts to achieve his goals and his willingness to try new 
                    things in the hopes of improving personally, the team labels Mr. Iqmal as a high achiever. Also, he develops 
                    an environment where workers can manage their personal and professional lives. Under his leadership, the 
                    company gets better every single day!
                  </p>
              </div>
          
          
              <div className="member">
                <img
                  src={MemberImage2}
                  alt="Member 2"
                  className="member-photo"
                />
                  <p>
                    Our outstanding chief digital officer, Mr. Jalal. He can come up with ideas and is a skilled and
                    creative worker. Creating, developing, overseeing, and evaluating the organization's technology 
                    assets are among his daily tasks. In addition, he puts new quality assurance and data security 
                    protocols into effect. His dedication and determination allow him to make progress toward 
                    achieving his goals. Mr. Jalal is always willing to learn new skills in order to improve his 
                    performance for the Ichiban Furniture company. He is popular in the company as well because of his 
                    kindness and concern for others!
                  </p>
              </div>

              <div className="member">
                <img
                  src={MemberImage3}
                  alt="Member 3"
                  className="member-photo"
                />
                  <p>
                    An amazing chief financial officer is essential for a successful business, and Mr. Hanif is our CFO.
                    His expertise and understanding of management are great. Mr. Hanif helps the Ichiban Furniture Company manage 
                    risk by looking over its obligations and investments and choosing investment plans that take cash 
                    and liquidity challenges into account. He also created and managed the company's financial IT 
                    system. He is capable of solving problems and thinking strategically.
                  </p>
              </div>

              <div className="member">
                <img
                  src={MemberImage4}
                  alt="Member 4"
                  className="member-photo"
                />
                  <p>
                    At Ichiban Furniture, our CEO is Mr. Faizal. He is in a great position to help people in the surrounding area 
                    improve their careers. Mr. Faizal knows that the decisions they make could have a big impact. 
                    Regarding the fact that business decisions almost always contain some degree of risk, our CEO 
                    always makes sure to finish his investigation and obtain all the information before making a 
                    decision.
                  </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Team
