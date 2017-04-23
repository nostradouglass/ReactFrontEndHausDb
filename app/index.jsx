var React = require('react');
var ReactDOM = require('react-dom');
var TitleLeft = require('./components/TitleLeft.jsx')
var BulkRight = require('./components/BulkRight.jsx');
var MainTable = require('./components/MainTable.jsx');
var ImportButtons = require('./components/ImportButtons.jsx');


class Container extends React.Component{
    render() {
         return (
            <div> 
               <TitleLeft /> <BulkRight />
               <MainTable />
               <ImportButtons />
            </div>
        )
    }
}



ReactDOM.render(
    <Container />, document.getElementById('app')
);