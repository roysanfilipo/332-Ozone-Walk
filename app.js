class Nav extends React.Component {
  render = () => {
    const { toggleShowAbout, toggleShowPhotos,
            toggleShowFeatures, toggleShowGuestbook,
            toggleShowContact } = this.props

    return (
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li><button onClick={toggleShowAbout}>About</button></li>
            <li><button onClick={toggleShowPhotos}>Photos</button></li>
            <li><button onClick={toggleShowFeatures}>Features</button></li>
            <li><button onClick={toggleShowGuestbook}>Guestbook</button></li>
            <li><button onClick={toggleShowContact}>Contact</button></li>
          </ul>
        </div>
      </nav>
    )
  }
}

class About extends React.Component {
    render = () => {
        return (
          <div className="aboutcontent">
            <p>This is random test content about 332 Ozone Walk in Fire Island Pines!<br/>
            Who really knows what to write here, you know? </p>
          </div>
        )
    }
}

class Photos extends React.Component {
    render = () => {
        return (
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
        )
    }
}

class Features extends React.Component {
    render = () => {
        return (
          <div className="features">
            <ul>
              <li>Four bedrooms and three bathrooms</li>
              <li>Spacious kitchen with Allclad cookware and dishwasher</li>
              <li>Large pool, hot tub, and outdoor shower</li>
              <li>Washer and dryer</li>
              <li>Smart TV and indoor/outdoor Sonos soundsystem</li>
            </ul>
          </div>
        )
    }
}

class Contact extends React.Component {
  state = {
    name: null,
    email: null,
    phone: null,
    message: null,
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
        )
    }
}

class Guestbook extends React.Component {
    state = {
        admin: true,
        entries: []
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
        const { entry, createEntry,
                changeNewEntryTitle,
                changeNewEntryDate,
                changeNewEntryNote,
                deleteEntry } = this.props

        return (
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
        )
    }
}


class App extends React.Component {
  state = {
      showabout: false,
      showphotos: false,
      showfeatures: false,
      showguestbook: false,
      showcontact: false
  }

  toggleShowAbout = () => {
      this.setState({
          showabout: !this.state.showabout,
          showphotos: false,
          showfeatures: false,
          showguestbook: false,
          showcontact: false
      })
  }

  toggleShowPhotos = () => {
      this.setState({
          showphotos: !this.state.showphotos,
          showabout: false,
          showfeatures: false,
          showguestbook: false,
          showcontact: false
      })
  }

  toggleShowFeatures = () => {
      this.setState({
          showfeatures: !this.state.showfeatures,
          showabout: false,
          showphotos: false,
          showguestbook: false,
          showcontact: false
      })
  }

  toggleShowGuestbook = () => {
      this.setState({
          showguestbook: !this.state.showguestbook,
          showphotos: false,
          showfeatures: false,
          showabout: false,
          showcontact: false
      })
  }

  toggleShowContact = () => {
      this.setState({
          showcontact: !this.state.showcontact,
          showphotos: false,
          showfeatures: false,
          showguestbook: false,
          showabout: false
      })
  }

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
                  <Nav
                    toggleShowAbout={this.toggleShowAbout}
                    toggleShowPhotos={this.toggleShowPhotos}
                    toggleShowFeatures={this.toggleShowFeatures}
                    toggleShowGuestbook={this.toggleShowGuestbook}
                    toggleShowContact={this.toggleShowContact}
                  />
              </div>
              <div className="pagecontent">
                <div className="main">
                    <div className="mainphoto">
                      <img src="https://i.imgur.com/ke1l3L4.jpg" />
                    </div>

                    <div className="about">
                        {this.state.showabout ? (
                          <div>
                            <About/>
                          </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="photos">
                        <div>
                            {this.state.showphotos ? (
                              <Photos/>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>

                    <div className="features">
                        {this.state.showfeatures ? (
                            <Features/>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="guestbook">
                        {this.state.showguestbook ? (
                          <Guestbook
                            createEntry={this.createEntry}
                            changeNewEntryTitle={this.changeNewEntryTitle}
                            changeNewEntryDate={this.changeNewEntryDate}
                            changeNewEntryNote={this.changeNewEntryNote}
                            deleteEntry={this.deleteEntry}
                            entry={this.entry} />
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="contact">
                            {this.state.showcontact ? (
                              <Contact/>
                            ) : (
                                ''
                            )}
                    </div>

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
