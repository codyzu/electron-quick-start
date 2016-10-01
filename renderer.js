// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const nowClient = require('now-client')
const now = nowClient('LXu3esU46CoOj7FYobPMjEwx')

const button = document.getElementById('deploy-button')

console.log('BUTTON:', button)

button.onclick = () => {
  document.createElement
  now.getDeployments()
    .then((deployments) => {
      for (const deployment of deployments) {
        addDeployment(deployment)
        addDeployment(deployment)
      }
    })
}

function addDeployment (deployment) {
  const list = document.getElementById('deployment-list')
  const item = document.createElement('li')
  item.className = 'list-group-item'
  const div = document.createElement('div')
  div.className = 'media-body'
  const title = document.createElement('span')
  const url = document.createElement('p')
  title.appendChild(document.createTextNode(deployment.name))
  url.appendChild(document.createTextNode(deployment.url))
  div.appendChild(title)
  div.appendChild(url)
  item.appendChild(div)
  list.appendChild(item)
  console.log('LIST', list)
  console.log('NAME:', deployment.name)
  console.log('URL:', deployment.url)
}
