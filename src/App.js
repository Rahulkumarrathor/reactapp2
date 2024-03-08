
import './App.css';
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";
function App() {

  return (
    <div className="outer">
      
      <div   className="menu1">
      <h3 className="h3"> Sample Request </h3>
      Sample Order Details &nbsp; &nbsp;&nbsp;
        View  SR&nbsp;
        <hr/>
        </div>
      <form>
        <div className="menu">
&nbsp;&nbsp;&nbsp;&nbsp; Season &nbsp;
<input type="text" placeholder="Insert First Letter" className="sea1"
/>
<button className="down" >  <BsChevronDoubleDown />   </button>
&nbsp; &nbsp;&nbsp;Buyer Name &nbsp;
<input type="text" placeholder=" Click on Search"
className="sr1"/>
<button className="down" >  <FaSearch /> </button>
&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;SR Image &nbsp;
<input type="file" />
</div >
<div className="Sample-content">
Sample Ref.
<input type="text" placeholder="Type any word" className="sample1"
/>
<button className="down" > <FaSearch />  </button>
&nbsp;Type of Sample
<input type="text" placeholder=" Click on Search"
className="sample2"/>
<button className="down" > <BsChevronDoubleDown />   </button>
&nbsp;&nbsp; &nbsp; &nbsp;Artical Image &nbsp;
        <input type="file" />
        <hr/>
</div>

<div className="accordion " >
<div className=" accordion-tab" >
<input type ="checkbox" id="toggle1" className=" accordion-toggle"
name="toggle" />
<label for="toggle1">Basic Details <VscChevronDown /> </label>
<div className="accordion-content">
<p>
<table>
<tr>
<td>Artical No.</td>
<td><input type="text" placeholder="Type any word"
className="IN"/> 

 </td>
<td>Buyer Artical</td>
<td><input type="text" placeholder="Input 3" className="IN"
/></td>
<td>Buyer Ref.</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
<td>Date Of Order</td>
<td><input type="date"
placeholder="" className="IN"/></td>
<td>Size</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
</tr>
<tr>
<td>Quantity</td>
<td><input type="text" placeholder="Input Here"
className="IN"/></td>
<td>Pair</td>
<td><input type="text" placeholder="Select Pair"
className="IN" /></td>
<td>Upper Color</td>
<td><input type="text" placeholder="Insert Two
Letter" className="IN"/></td>
<td>Lining Color</td>
<td><input type="text" placeholder="Insert Two
Letter" className="IN"/></td>
<td>Last</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
</tr>
<tr>
<td>Insole</td>
<td><input type="text" placeholder="Input Here"
className="IN"/></td>
<td>Sole Label & Color</td>
<td><input type="text" placeholder="Insert Two Letter"
className="IN" /></td>
<td> Socks</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
<td>Heel</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
<td>Pattern</td>
<td><input type="text" placeholder="Insert First
Letter" className="IN"/></td>
</tr></table>
Commenet
<textarea rows="5" cols="80"></textarea>
</p>
</div>
</div>
<div className=" accordion-tab" >
<input type ="checkbox" id="toggle2" className=" accordion-toggle"
name="toggle" />
<label for="toggle2">Internal Info Own.<VscChevronDown />
</label>
<div className="accordion-content">
<p>
<table>
<tr>
<td>Upper Leather</td>
<td><input type="text" placeholder="Input Here"
className="IN"/></td>
<td>Lining</td>
<td><input type="text" placeholder="Insert Two Letter"
className="IN" /></td>
<td> Socks</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
<td>Quantity</td>
<td><input type="text" placeholder="Input
Here" className="IN"/></td>
<td>Internal Ref.</td>
<td><input type="text" placeholder="Insert First Letter"
className="IN"/></td>
</tr>
</table>
Leather Remark
<textarea rows="5" cols="65"></textarea>&nbsp;
Sole Remark<textarea rows="5" cols="65"></textarea>

</p>
</div>
</div>
<div className=" accordion-tab" >
<input type ="checkbox" id="toggle3" className=" accordion-toggle"
name="toggle" />
<label for="toggle3">Delivery Details   <VscChevronDown /> </label>
<div className="accordion-content">
<p>
Prode-Ex Date<input type="date" className="INN"></input>
&nbsp; &nbsp;Delivery Date<input type="date"
className="INN"/>
Delivery Address
<textarea rows="2" cols="100"></textarea><br />
</p>
</div>
</div>
</div>
<br/>
<div className="Set-button">
<button
type="submit" className="sub1">Reset</button>&nbsp;&nbsp;
<button type="submit" className="sub2">Submit</button>
</div>
      </form>
    </div>
  
  
  );
}

export default App;
