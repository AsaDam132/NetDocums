import React from 'react'

function Footer() {
  return (
    <div>

    <React.Fragment>
    
    <div>
    <footer>
      <hr />
      <div className="grid">
        <div
          className="cardDataText"
          style={{
            cursor: "pointer",
            color: "#000",
            textAlign: "center",
          }}
        >
          <div id="myid">
            <h3>
              <b>Have any question?</b>
            </h3>
            <br />

            <h4>
              If you have any inquiries or need assistance integrating the Net
              App API, get in touch. via mail support@netapps.com
            </h4>
          </div>
        </div>
        <div
          className="cardDataText"
          style={{
            cursor: "pointer",
            color: "#000",
            textAlign: "center",
          }}
        >
          <div id="myid">
            <h3>
              <b>Video Tutorial</b>
            </h3>
            <br />

            <h4>
              The Net App API integration lessons are available on our YouTube
              channel.
            </h4>
          </div>
        </div>
      </div>
      <center>
        <div>
          <p>
            <small>Copyright &copy2022</small>
          </p>
        </div>
      </center>
    </footer>
  </div>
    
    </React.Fragment>
      
    </div>
  )
}

export default Footer
