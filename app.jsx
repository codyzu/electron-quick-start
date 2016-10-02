const React = require('react');
const ReactDom = require('react-dom');
const { Window, Content, PaneGroup, Pane, Toolbar, Sidebar } = require('react-photonkit');

// import Header from "./header.jsx"
// import Footer from "./footer.jsx";
// import Sidebar from "./sidebar.jsx"

// require('../index.scss');

ReactDom.render(
  <Window>
    <Toolbar title="basic template" />
    <Content>
      <PaneGroup>
        <Pane className="padded-more">
          Hello, react-photonkit!!!
        </Pane>
        <Pane className="padded-more">
            hello world
        </Pane>
      </PaneGroup>
    </Content>
  </Window>
  , document.querySelector("#main"));
