

class About extends React.Component {
    state = {
        show: false,
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render = () => {

        return (
          <div className="about">
              <div className="aboutbutton">
                <button onClick={this.toggleShow}>About</button>
              </div>
              <div>
                  {this.state.show ? (
                    <div>
                      <p>This is random test content about 332 Ozone Walk in Fire Island Pines!<br/>
                      Who really knows what to write here, you know? </p>
                    </div>
                  ) : (
                      ''
                  )}
              </div>
          </div>
        )
    }
}

class Photos extends React.Component {
    state = {
        show: false
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render = () => {

        return (
          <div className="photosection">
              <div className="photosbutton">
                <button onClick={this.toggleShow}>Photos</button>
              </div>
              <div>
                  {this.state.show ? (
                    <div className="allphotos">
                      <div className="photoone">
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      </div>
                      <div className="phototwo">
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      </div>
                      <div className="photothree">
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      </div>
                      <div className="photofour">
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      </div>
                      <div className="photofive">
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      </div>
                      <div className="photosix">
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      </div>
                    </div>
                  ) : (
                      ''
                  )}
              </div>
          </div>
        )
    }
}

class Features extends React.Component {
    state = {
        show: false,
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render = () => {

        return (
          <div className="features">
              <div className="featuresbutton">
                <button onClick={this.toggleShow}>Features</button>
              </div>
              <div>
                  {this.state.show ? (
                    <ul>
                      <li>Four bedrooms and three bathrooms</li>
                      <li>Spacious kitchen with Allclad cookware and dishwasher</li>
                      <li>Large pool, hot tub, and outdoor shower</li>
                      <li>Washer and dryer</li>
                      <li>Smart TV and indoor/outdoor Sonos soundsystem</li>
                    </ul>
                  ) : (
                      ''
                  )}
              </div>
          </div>
        )
    }
}

class Contact extends React.Component {
    state = {
        show: false
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    sendEmail = (event) => {
      event.preventDefault();
      emailjs.sendForm('contact_service', 'contact_form', event.target, 'user_C9Y31mNs8fuYKIEUYCxUP')
      .then((result) => {
          console.log(result.text);
          this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          alert('Your message has been sent!');
      }, (error) => {
          console.log(error.text);
      });
  }

    render = () => {

        return (
          <div className="contact">
              <div className="contactbutton">
                <button onClick={this.toggleShow}>Contact</button>
              </div>
              <div>
                  {this.state.show ? (
                    <div>
                      <form className="contact-form" onSubmit={this.sendEmail}>
                          <input type="hidden" name="contact_number"/>
                          <input type="text" name="user_name" value={this.state.name} placeholder="name" />
                          <input type="email" name="user_email" value={this.state.email} placeholder="email"/>
                          <input type="text" name="user_phone" value={this.state.phone} placeholder="phone #"/>
                          <textarea name="message" value={this.state.message} placeholder="message"/>
                          <input type="submit" value="Send" />
                        </form>
                    </div>
                  ) : (
                      ''
                  )}
              </div>
          </div>
        )
    }
}

class Guestbook extends React.Component {
    state = {
        show: false,
        admin: true,
        entries: []
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount = () => {
        axios.get('/entries').then(
            (response) => {
                this.setState({
                    entries: response.data
                })
            }
        )
    }

    render = () => {
        const { refreshPage, entry, createEntry,
                changeNewEntryTitle,
                changeNewEntryDate,
                changeNewEntryNote,
                deleteEntry } = this.props

        return (
            <div className="guestbookbutton">
            <button onClick={this.toggleShow}>Guestbook</button>
            <div className="guestbook">
                {this.state.show ? (
                  <div>
                    <ul>
                        {
                            this.state.entries.map(
                                (entry) => {
                                    return (
                                        <li>
                                            <h4>{entry.title}</h4>
                                            <h4>DATE: {entry.date}</h4>
                                            {entry.note}<br/>
                                            {this.state.admin ? (
                                              <button value={entry.id} onClick={deleteEntry} >DELETE</button>
                                            ) : ( '' )}
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    <div className="newentry">
                      <h2>Sign the guestbook!</h2>
                      <form className="newform" onSubmit={createEntry}>
                          <input onChange={changeNewEntryTitle} type="text" placeholder="title"/>
                          <input onChange={changeNewEntryDate} type="date" placeholder="date"/>
                          <input onChange={changeNewEntryNote} type="textarea" placeholder="note"/>
                          <input type="submit" value="Add"/>
                      </form>
                    </div>
                  </div>
                ) : (
                    ''
                )}

            </div>
            </div>
        )
    }
}


class App extends React.Component {

    changeNewEntryTitle = (event) => {
        this.setState({
            newEntryTitle: event.target.value
        })
    }


    changeNewEntryDate = (event) => {
        this.setState({
            newEntryDate: event.target.value
        })
    }


    changeNewEntryNote = (event) => {
        this.setState({
            newEntryNote: event.target.value
        })
    }

    createEntry = (event) => {
        // event.preventDefault();
        axios.post(
            '/entries',
            {
                title: this.state.newEntryTitle,
                date: this.state.newEntryDate,
                note: this.state.newEntryNote
            }
        ).then(
            (response) => {
                this.setState({
                    entries: response.data
                })
            }
        )

    }

    changeUpdateEntryTitle = (event) => {
        this.setState({
            updateEntryTitle: event.target.value
        })
    }

    changeUpdateEntryDate = (event) => {
        this.setState({
            updateEntryDate: event.target.value
        })
    }

    changeUpdateEntryNote = (event) => {
        this.setState({
            updateEntryNote: event.target.value
        })
    }

    updateEntry = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/entries/' + id,
            {
                title: this.state.updateEntryTitle,
                date: this.state.updateEntryDate,
                note: this.state.updateEntryNote
            }
        ).then((response) => {
            this.setState({
                entries: response.data
            })
        })
    }

    deleteEntry = (event) => {
        axios.delete('/entries/' + event.target.value).then(
            (response) => {
                this.setState(
                    {
                        entries: response.data
                    }
                );
                window.location.reload();
            }
        )
    }

    render = () => {
        return (
          <div className="container">
              <div className="row">
                  <div className="col s12"><span className="flow-text">332 Ozone Walk</span></div>
              </div>
              <div className="divider"></div>
              <div className="pagecontent">
                <div className="main">
                    <div className="mainphoto">
                      <img src="https://i.imgur.com/ke1l3L4.jpg" />
                    </div>
                    <About/>
                    <Photos/>
                    <Features/>
                    <Guestbook
                      createEntry={this.createEntry}
                      changeNewEntryTitle={this.changeNewEntryTitle}
                      changeNewEntryDate={this.changeNewEntryDate}
                      changeNewEntryNote={this.changeNewEntryNote}
                      deleteEntry={this.deleteEntry}
                      entry={this.entry}
                      refreshPage={this.refreshPage}/>
                    <Contact/>

                </div>
                <footer>
                  <div className="socialmedia">
                    <a href="#"><img src="instagramlogoimage" /></a>
                  </div>
                  <div>© 2020 by <a href="https://github.com/roysanfilipo">Roy Sanfilipo</a></div>
                </footer>
              </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
