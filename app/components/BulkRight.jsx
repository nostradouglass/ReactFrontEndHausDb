var React = require('react')
var ReactDOM = require('react-dom')


class BulkRight extends React.Component {
    render() {
        return (
           <div className="col-md-6 headerRight">
        <div className="row">
        <div className="col-md-4">
          <div className="row"> <h3>Bulk cream<br /> Stock Information</h3></div>
        </div>
        <div className="col-md-6">
          <div className="row"> 
            <div id="bulkArea">
           
            <div id="bulkTable">
              <table className="table">
                <thead>
                  <tr>
                    <th>Update <br />Bulk gal.</th>
                    <th>6.5oz<br />Ordered</th>
                    <th>32oz<br />Ordered</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td ><input type="text" size="6" /></td>
                    <td ><input type="text" size="6"  /></td>
                    <td ><input type="text"  size="6"  /></td>
                    <td></td>
                  </tr>
                </tbody>
                <thead>
                <tr>
                    <th>Update <br />Bulk gal.</th>
                    <th>Converted<br />to vol</th>
                    <th>Coverted <br />to vol</th>
                    <th>New<br />gal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td   className="bulkTotals">bulk gal</td>
                    <td   className="bulkTotals"> gal</td>
                    <td  className="bulkTotals"> gal</td>
                    <td ><span  className="bulkTotals"> gal</span></td>
                  </tr>
                </tbody>
              </table> 
              
            </div>
          </div></div>
        </div>
        <div className="col-md-2">
          <div className="row updateBulkButton"><button className="btn btn-success btn-sm" >Update Bulk</button></div>
        </div>
        
         
        </div>
      </div> 
        )
    }
}


module.exports = BulkRight;