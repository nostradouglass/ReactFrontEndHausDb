var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var TitleLeft = require('./components/TitleLeft.jsx')
var BulkRight = require('./components/BulkRight.jsx');
var MainTable = require('./components/MainTable.jsx');
var ImportButtons = require('./components/ImportButtons.jsx');

require('style-loader!css-loader!sass-loader!./styles/app.scss')



class Container extends React.Component{
    constructor(props) {
        super(props);
        
        //Set the state ES6
        this.state = {
            products: []
        }
    }

componentDidMount() {
    axios.get('https://metaderm.herokuapp.com/products/')
    .then(res => {
     const products = res.data
     this.setState({ products })
    })
    .catch(function(err) {
        console.log(err)
    })
}


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
               <MainTable ProductsList = {this.state.products}/>
               <ImportButtons />

            </div>
        )
    }

}
// Set props ES6
Container.propTypes = {

};
// Set default Props ES6
Container.defaultProps = {

}
ReactDOM.render(
    <Container />, document.getElementById('app')
);