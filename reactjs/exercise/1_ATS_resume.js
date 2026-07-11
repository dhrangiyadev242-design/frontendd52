// import React Module
import React from 'react';
// import virtual DOM
import ReactDOM from 'react-dom/client'
import "./resume.css";
function Resume() {
  return (
    <div className="page">

      <div className="resume">

        {/* LEFT SIDEBAR */}

        <aside className="sidebar">

          <div className="profile">

            <div className="avatar">
              KP
            </div>

            <h1>Lalji Dhrangiya</h1>

            <h3>Full Stack Developer</h3>

          </div>


          <div className="side-section">

            <h2>Contact</h2>

            <p>📍 Bhavnagar, Gujarat</p>
            <p>📞 +91 9876543210</p>
            <p>✉ LaljiDhrangiya@email.com</p>
            <p>🔗 linkedin.com/in/LaljiDhrangiya</p>
            <p>💻 github.com/LaljiDhrangiya-22</p>

          </div>



          <div className="side-section">

            <h2>Skills</h2>


            <div className="skill">
              <span>React.js</span>
              <div><i style={{ width: "90%" }}></i></div>
            </div>


            <div className="skill">
              <span>JavaScript</span>
              <div><i style={{ width: "85%" }}></i></div>
            </div>


            <div className="skill">
              <span>Node.js</span>
              <div><i style={{ width: "80%" }}></i></div>
            </div>


            <div className="skill">
              <span>MongoDB</span>
              <div><i style={{ width: "75%" }}></i></div>
            </div>


          </div>


        </aside>



        {/* RIGHT CONTENT */}


        <main className="content">


          <section>

            <h2>Profile</h2>

            <p>
              Passionate Full Stack Developer experienced in creating
              scalable web applications using MERN Stack.
              Strong knowledge of frontend development,
              backend APIs, database management and modern UI design.
            </p>

          </section>




          <section>

            <h2>Experience</h2>


            <div className="timeline">

              <div className="item">

                <h3>Full Stack Developer</h3>

                <span> Fresher</span>

                <p>
                  Developing responsive web applications,
                  REST APIs and database solutions.
                </p>

              </div>


            </div>


          </section>





          <section>

            <h2>Projects</h2>


            <div className="cards">


              <div className="card">

                <h3>Employee Management System</h3>

                <p>
                  MERN based application with CRUD,
                  authentication and admin dashboard.
                </p>

              </div>



              <div className="card">

                <h3>E-Commerce Website</h3>

                <p>
                  Online shopping platform with cart,
                  search and payment integration.
                </p>

              </div>



              <div className="card">

                <h3>Portfolio Website</h3>

                <p>
                  Responsive personal portfolio website.
                </p>

              </div>
            </div>
          </section>
          <section>
            <h2>Education</h2>
            <div className="education">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>
             Bhavnagar University
                <br />
                2024 - 2027
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}


export default Resume;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Resume />);


