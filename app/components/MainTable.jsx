var React = require('react')
var ReactDOM = require('react-dom')

class MainTable extends React.Component {
    render() {
        return (
           <div>
<div className="buttonRow">
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Show Decorated Tubes</div>
    <div >Hide Decorated Tubes</div>
  </button>
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Show Incoming Stock</div>
    <div >Hide Incoming Stock</div>
  </button>
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Hide SKU</div>
    <div >Show SKU</div>
  </button>
  <button type="button" className="btn btn-primary btn-sm" >
    <div >Hide ASIN</div>
    <div >Show ASIN</div>
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
    <tr>
      <td name="productName" className="text-center small"><a href="product/product.asin">productName</a></td>
      <td name="size" className="text-center">size</td>
      <td name="sku" className="text-center small" >sellerSku</td>
      <td name="asin" className="text-center" >asin</td>
      <td name="decoratedTubeStock" className="text-center" >
        <input  size="5" ></input>
      </td>
      <td name="hausPendingOrder" className="text-center" >
        <input  size="5" ></input>
      </td>
      <td name="thirtyDayMoRemainWithIncoming" className="text-center">
        "thirtyDayMoRemainWithIncoming"</td>
      <td name="hausStock" className="text-center"> 
        hausStock
      </td>
        <td name="fbaStock" className="text-center">
          fbaStock
        </td>
        <td name="fbaSevenDaySales" className="text-center">
          fbaSevenDaySales
        </td>
        <td name="fbaThirtyDaySales" className="text-center">
        fbaThirtyDaySales
        </td>
        <td name="venderStock" className="text-center">
          venderStock
        </td>
        <td name="vendorSevenDaySales" className="text-center">
          vendorSevenDaySales
        </td>
        <td name="vendorThirtyDaysSales" className="text-center">
          vendorThirtyDaySales
        </td>
        <td name="totalStock" className="text-center">
          product.totalStock
        </td>
        <td name="totalSevenDaySales" className="text-center">
          "totalSevenDaySales"
        </td>
        <td name="totalThirtyDaySales" className="text-center">
          "totalThirtyDaySales"
        </td>
        <td name="sevenDayMoRemain" className="text-center">
          "sevenDayMoRemain"
        </td>
        <td name="thirtyDayMoRemain" className="text-center">
          "thirtyDayMoRemain"
        </td>
        <td>
          <button className="btn btn-success btn-sm" >Update</button>
        </td>
    </tr>
    
  </tbody>
</table>
           </ div>    
        )
    }
}


module.exports = MainTable;