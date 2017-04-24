var React = require('react')
var ReactDOM = require('react-dom')
var data = require('../tempdata.jsx');

function MainTable(props) {
    
    var tempData = data;
    const listItems = tempData.map((data) => 
      <tr key={data.asin}> 
      <td name="productName" className="text-center small"><a href="product/product.asin">{data.productName}</a></td>
      <td name="size" className="text-center">{data.size}</td>
      <td name="sku" className="text-center small" >{data.sellerSku}</td>
      <td name="asin" className="text-center" >{data.asin}</td>
      <td name="decoratedTubeStock" className="text-center" >{data.decoratedTubeStock}</td>
      <td name="hausPendingOrder" className="text-center" >{data.hausPendingOrder}</td>
      <td name="thirtyDayMoRemainWithIncoming" className="text-center">Temp</td>
      <td name="hausStock" className="text-center"> {data.hausStock}</td>
      <td name="fbaStock" className="text-center">{data.fbaStock}</td>
      <td name="fbaSevenDaySales" className="text-center">{data.fbaSevenDaySales}</td>
      <td name="fbaThirtyDaySales" className="text-center">{data.fbaThirtyDaySales}</td>
      <td name="venderStock" className="text-center">{data.venderStock}</td>
      <td name="vendorSevenDaySales" className="text-center">{data.vendorSevenDaySales}</td>
      <td name="vendorThirtyDaysSales" className="text-center">{data.vendorThirtyDaySales}</td>
      <td name="totalStock" className="text-center">{data.totalStock}</td>
      <td name="totalSevenDaySales" className="text-center">{data.fbaSevenDaySales + data.vendorSevenDaySales}</td>
      <td name="totalThirtyDaySales" className="text-center">{data.fbaThirtyDaySales + data.vendorThirtyDaySales}</td>
      <td name="sevenDayMoRemain" className="text-center">{data.sevenDayMoRemain}</td>
      <td name="thirtyDayMoRemain" className="text-center">{data.thirtyDayMoRemain}</td>
      <td>
          <button className="btn btn-success btn-sm" >Update</button>
        </td>
      </tr>
    )
        return (
           <div>
<div className="buttonRow">
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Show Decorated Tubes</div>
  </button>
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Show Incoming Stock</div>
  </button>
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Hide SKU</div>
  </button>
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Hide ASIN</div>
  </button>
</div>
<table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th className="text-center">Product name</th>
      <th className="text-center">Size</th>
      <th className="text-center" >SKU</th>
      <th className="text-center" >ASIN</th>
      <th className="text-center" >Decorated Tube Stock</th>
      <th className="text-center" >Incoming Stock</th>
      <th className="text-center">30d sales mo rem. w inc.</th>
      <th className="text-center">Haus Stock</th>
      <th className="text-center">FBA Stock</th>
      <th className="text-center">FBA 7d sales</th>
      <th className="text-center">FBA 30d sales</th>
      <th className="text-center">Vendor X Stock</th>
      <th className="text-center">VendorX 7d sales</th>
      <th className="text-center">VendorX 30d sales</th>
      <th className="text-center">Total Stock</th>
      <th className="text-center">7d sales</th>
      <th className="text-center">30d sales</th>
      <th className="text-center">7d sales mo remaining</th>
      <th className="text-center">30d sales mo remaining</th>
      <th className="text-center">Update</th>
    </tr>
  </thead>
  <tbody>
    {listItems}
  </tbody>
</table>
           </ div>    
        )
    }

module.exports = MainTable;
