var React = require('react')
var ReactDOM = require('react-dom')

class ImportButtons extends React.Component {
    render() {
        return (
            <div className="bottom">
  <div className="updateButtons">    
<div className="row text-center">
  


<div className="col-md-3 col-sm-6"><a href="updateSevenFba"><button type='button' className="btn btn-default update-btn">Update FBA 7 Day Sales</button></a></div>
<div className="col-md-3 col-sm-6"><a href="updateThirtyFba"><button type='button' className="btn btn-default update-btn">Update FBA 30 Day Sales</button></a></div>
<div className="col-md-3 col-sm-6"><a href="updateSevenVend"><button type='button' className="btn btn-default update-btn">Update Vendor 7 Day Sales</button></a></div>
<div className="col-md-3 col-sm-6"><a href="updateThirtyVend"><button type='button' className="btn btn-default update-btn">Update Vendor 30 Day Sales</button></a></div>
  </div>
  </div>
  </div>
        )
    }
}


module.exports = ImportButtons;