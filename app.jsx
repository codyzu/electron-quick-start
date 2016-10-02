const React = require('react')
const ReactDom = require('react-dom')
const {Grid, Row, Col, Button, Glyphicon, ListGroup, ListGroupItem, Panel} = require('react-bootstrap')
// const { Window, Content, PaneGroup, Pane, Toolbar, Sidebar } = require('react-photonkit');

const now = require('now-client')('LXu3esU46CoOj7FYobPMjEwx')


// import Header from "./header.jsx"
// import Footer from "./footer.jsx";
// import Sidebar from "./sidebar.jsx"

// require('../index.scss');

const detailHeader = (
  <h4>Details</h4>
)

class Deployments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deployments: [
        {name: 'Deployment 1', url: 'a'},
        {name: 'Deployment 2', url: 'b'},
        {name: 'Deployment 3', url: 'c'}
      ]
    }
  }

  getDeployments () {
    now
      .getDeployments()
      .then((deployments) => this.setState({deployments}))
  }

  render () {
    const header = (<h4><Button bsStyle='link' onClick={this.getDeployments.bind(this)}><Glyphicon glyph='refresh' /></Button> Deployments</h4>)
    const rows = this.state.deployments.map((d) => (<ListGroupItem key={d.url}>{d.name}</ListGroupItem>))
    return (
      <Panel header={header}>
        <ListGroup fill>
          {rows}
        </ListGroup>
      </Panel>
    )
  }
}

// class Deployment extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = props.deployment
//   }
// 
//   render () {
//     <Panel header={detailHeader}>
//       This deployment is very important.
//     </Panel>
//   }
// }

ReactDom.render(
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <h3 className='text-center'>Deployment Manager</h3>
      </Col>
    </Row>
    <Row>
      <Col xs={4}>
        <Deployments />
      </Col>
      <Col xs={8}>
        <Panel header={detailHeader}>
          This deployment is very important.
        </Panel>
      </Col>
    </Row>
  </Grid>
  , document.querySelector('#main'))
