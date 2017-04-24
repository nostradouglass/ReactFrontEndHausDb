var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var TitleLeft = require('./components/TitleLeft.jsx')
var BulkRight = require('./components/BulkRight.jsx');
var MainTable = require('./components/MainTable.jsx');
var ImportButtons = require('./components/ImportButtons.jsx');

require('style-loader!css-loader!sass-loader!./styles/app.scss')

var ajaxData = axios.get('https://metaderm.herokuapp.com/products/')
    .then(function(res) {
     return res.data
     
    })
    .catch(function(err) {
        console.log(err)
    })

class Container extends React.Component{
    render() {
         return (
            <div className="container-fluid">
                <div className="row"> 
                    <div className="col-md-6">
                        <TitleLeft />
                    </div>
                    <div className="col-md-6">
                        <BulkRight />
                    </div>
               </div>
               <MainTable Products = {ajaxData} />
               <ImportButtons />

            </div>
        )
    }
}



ReactDOM.render(
    <Container />, document.getElementById('app')
);