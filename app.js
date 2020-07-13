
class Guestbook extends React.Component {

    state = {
        show: false,
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
        const {entry, entries, createEntry,
                changeNewEntryTitle,
                changeNewEntryDate,
                changeNewEntryNote } = this.props

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
            newEntryTitle: event.target.value,
        })
    }


    changeNewEntryDate = (event) => {
        this.setState({
            newEntryDate: event.target.value,
        })
    }


    changeNewEntryNote = (event) => {
        this.setState({
            newEntryNote: event.target.value,
        })
    }

    createEntry = (event) => {
        // event.preventDefault();
        // console.log(this.state);
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
            updateEntryTitle:event.target.value
        })
    }

    changeUpdateEntryDate = (event) => {
        this.setState({
            updateEntryDate:event.target.value
        })
    }

    changeUpdateEntryNote = (event) => {
        this.setState({
            updateEntryNote:event.target.value
        })
    }

    updateEntry = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/entries/' + id,
            {
                title:this.state.updateEntryTitle,
                date:this.state.updateEntryDate,
                note:this.state.updateEntryNote
            }
        ).then((response) => {
            this.setState({
                entries:response.data
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
                )
            }
        )
    }

    render = () => {
        return (
          <div className="container">
              <div className="header">
                  <h1>332 Ozone Walk</h1>
              </div>
              <div className="pagecontent">
                <div className="sidebar">
                  <button>About</button>
                  <button>Photos</button>
                  <button>Features</button>
                  <button>House Rules</button>
                  <button>Contact</button>
                  <button>Guestbook</button>
                </div>
                <div className="main">
                    <div className="mainphoto">
                      <img src="https://i.imgur.com/ke1l3L4.jpg" />
                    </div>
                    <Guestbook
                      createEntry={this.createEntry}
                      changeNewEntryTitle={this.changeNewEntryTitle}
                      changeNewEntryDate={this.changeNewEntryDate}
                      changeNewEntryNote={this.changeNewEntryNote}
                      entry={this.entry}/>
                </div>
              </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
