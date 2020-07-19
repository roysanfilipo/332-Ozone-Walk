class Nav extends React.Component {
  render = () => {
    const { toggleShowAbout, toggleShowPhotos,
            toggleShowFeatures, toggleShowGuestbook,
            toggleShowContact } = this.props

    return (
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right socialmedia"><img src="https://i.imgur.com/3ZVWPLj.png" /></a>
          <ul id="nav-mobile" className="left">
            <li><button className="waves-effect waves-light btn-small blue-grey lighten-2" onClick={toggleShowAbout}>About</button></li>
            <li><button className="waves-effect waves-light btn-small blue-grey lighten-2" onClick={toggleShowPhotos}>Photos</button></li>
            <li><button className="waves-effect waves-light btn-small blue-grey lighten-2" onClick={toggleShowFeatures}>Features</button></li>
            <li><button className="waves-effect waves-light btn-small blue-grey lighten-2" onClick={toggleShowGuestbook}>Guestbook</button></li>
            <li><button className="waves-effect waves-light btn-small blue-grey lighten-2" onClick={toggleShowContact}>Contact</button></li>
          </ul>
        </div>
    )
  }
}

class About extends React.Component {
    render = () => {
        return (
            <div className="row">
                <div className="col s12">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Welcome</span>
                        <div className="section">
                          <p>332 Ozone is a beautiful four bedroom, 3 bathroom residence located on the quiet, eastern end of Fire Island Pines.</p>
                        </div>
                        <div className="section">
                          <p>This 1979 classic home, best known for appearing on the cover of Tom Bianchi’s famous art book, “Fire Island Pines”, can sleep 8 comfortably while boasting both ocean and bay views from its second floor.</p>
                        </div>
                        <div className="section">
                          <p>With a pool, jacuzzi and the beach only a few steps away, 332 has everything you and your friends will need to make your next summer the most memorable one.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        )
    }
}

class Photos extends React.Component {
    render = () => {
        return (
          <div className="container">
            <div className="row">
              <div className="col s12 m6 l6 xl4">
                <img src="https://i.imgur.com/ke1l3L4.jpg" />
              </div>
              <div className="col s12 m6 l6 xl4">
                <img src="https://i.imgur.com/ke1l3L4.jpg" />
              </div>
              <div className="col s12 m6 l6 xl4">
                <img src="https://i.imgur.com/ke1l3L4.jpg" />
              </div>
              <div className="col s12 m6 l6 xl4">
                <img src="https://i.imgur.com/ke1l3L4.jpg" />
              </div>
              <div className="col s12 m6 l6 xl4">
                <img src="https://i.imgur.com/ke1l3L4.jpg" />
              </div>
              <div className="col s12 m6 l6 xl4">
                <img src="https://i.imgur.com/ke1l3L4.jpg" />
              </div>
            </div>
          </div>
        )
    }
}

class Features extends React.Component {
    render = () => {
        return (
          <div className="row">
              <div className="col s12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Features</span>
                    <ul>
                      <li>Four bedrooms and three bathrooms</li>
                      <li>Spacious kitchen with Allclad cookware and dishwasher</li>
                      <li>Large pool, hot tub, and outdoor shower</li>
                      <li>Washer and dryer</li>
                      <li>Smart TV and indoor/outdoor Sonos soundsystem</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                <input className="waves-effect waves-light btn-small blue-grey lighten-2" type="submit" value="Send" />
            </form>
          </div>
        )
    }
}

class Guestbook extends React.Component {
    state = {
        admin: false,
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
            <div className="onereview">
                {
                    this.state.entries.map(
                        (entry) => {
                            return (
                                <div className="row">
                                    <div className="col s12">
                                      <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                          <span className="card-title">{entry.title}</span>
                                          <h6>Date: {entry.date}</h6>
                                          <p>{entry.note}</p>
                                        </div>
                                          {this.state.admin ? (
                                            <div className="card-action">
                                              <button className="waves-effect waves-light btn-small blue-grey lighten-2" value={entry.id} onClick={deleteEntry} >Delete</button>
                                            </div>
                                          ) : ( '' )}
                                      </div>
                                    </div>
                                  </div>
                            )
                        }
                    )
                }
            </div>
            <div className="container">
              <h5>Sign the guestbook!</h5>
              <form className="newform" onSubmit={createEntry}>
                  <input onChange={changeNewEntryTitle} type="text" placeholder="title"/>
                  <input onChange={changeNewEntryDate} type="date" placeholder="date"/>
                  <input onChange={changeNewEntryNote} type="textarea" placeholder="note"/>
                  <input className="waves-effect waves-light btn-small blue-grey lighten-2" type="submit" value="Add"/>
              </form>
            </div>
          </div>
        )
    }
}


class App extends React.Component {
  state = {
      showimage: true,
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
          showcontact: false,
          showimage: this.state.showabout
      })
  }

  toggleShowPhotos = () => {
      this.setState({
          showphotos: !this.state.showphotos,
          showabout: false,
          showfeatures: false,
          showguestbook: false,
          showcontact: false,
          showimage: this.state.showphotos
      })
  }

  toggleShowFeatures = () => {
      this.setState({
          showfeatures: !this.state.showfeatures,
          showabout: false,
          showphotos: false,
          showguestbook: false,
          showcontact: false,
          showimage: this.state.showfeatures
      })
  }

  toggleShowGuestbook = () => {
      this.setState({
          showguestbook: !this.state.showguestbook,
          showphotos: false,
          showfeatures: false,
          showabout: false,
          showcontact: false,
          showimage: this.state.showguestbook
      })
  }

  toggleShowContact = () => {
      this.setState({
          showcontact: !this.state.showcontact,
          showphotos: false,
          showfeatures: false,
          showguestbook: false,
          showabout: false,
          showimage: this.state.showcontact
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
          <div>
                <div className="navbar-fixed">
                  <nav className="blue-grey">
                    <Nav
                        toggleShowAbout={this.toggleShowAbout}
                        toggleShowPhotos={this.toggleShowPhotos}
                        toggleShowFeatures={this.toggleShowFeatures}
                        toggleShowGuestbook={this.toggleShowGuestbook}
                        toggleShowContact={this.toggleShowContact}
                    />
                  </nav>
                </div>
              <div className="pagecontent">
                <div className="main">
                    <h1>332 Ozone Walk</h1>
                    <h3>Fire Island Pines</h3>
                    <div className ="center-align">
                      {this.state.showimage ? (
                        <img src="https://i.imgur.com/ke1l3L4.jpg" />
                      ) : (
                        ''
                      )}
                    </div>

                    <div className="about">
                        {this.state.showabout ? (
                          <div className="container">
                            <About/>
                          </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className="photos">
                            {this.state.showphotos ? (
                                <Photos/>
                            ) : (
                                ''
                            )}
                    </div>

                    <div className="features">
                      <div  className="container">
                        {this.state.showfeatures ? (
                            <Features/>
                        ) : (
                            ''
                        )}
                      </div>
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
                              <div className="container">
                                <Contact/>
                              </div>
                            ) : (
                                ''
                            )}
                    </div>

                </div>

                <footer>
                  <div className="socialmedia">

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
