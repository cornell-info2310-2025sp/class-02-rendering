ReactDOM.render([
  React.createElement('h1', null, 'Example B Rendering'),
  React.createElement('p', null, 'Is the HTML for this page being rendered on the server or the client?'),
  React.createElement('ol', null, [
    React.createElement('li', null, 'Using the "Network" tab of the Firefox Developer Tools, view the ', React.createElement('strong', null, 'raw'), ' response for this page.'),
    React.createElement('li', null, 'Using the "View Source" feature of Firefox, study the HTML for this page.'),
    React.createElement('li', null, 'Refresh the page and compare the Rendered Date before and after.'),
    React.createElement('li', null, 'Complete the steps above 2 more times.')
  ]),
  React.createElement('h2', null, 'Rendered Date'),
  React.createElement('p', null, new Date().toLocaleString())
], document.body);
