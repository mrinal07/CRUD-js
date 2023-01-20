function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

jsonToTable();
function jsonToTable() {
  var inputData = [
    {
      "Param Code": "Alfreds Futterkiste",
      "Param Value": "Germany",
      Status: "Active",
    },
    {
      "Param Code": "Berglunds snabbkop",
      "Param Value": "Sweden",
      Status: "Active",
    },
    { "Param Code": "Island Trading", "Param Value": "UK", Status: "Active" },
    {
      "Param Code": "Koniglich Essen",
      "Param Value": "Germany",
      Status: "Active",
    },
    {
      "Param Code": "Laughing Bacchus Winecellars",
      "Param Value": "Canada",
      Status: "Inactive",
    },
    {
      "Param Code": "Magazzini Alimentari Riuniti",
      "Param Value": "Italy",
      Status: "Active",
    },
    { "Param Code": "North/South", "Param Value": "UK", Status: "Active" },
    {
      "Param Code": "Paris specialites",
      "Param Value": "France",
      Status: "Inactive",
    },
  ];

  text = '<table id="myTable">';
  text += '<tr class="header">';
  text += '<th style="width: 40%">Param Code</th>';
  text += '<th style="width: 40%">Param Value</th>';
  text += '<th style="width: 20%">Status</th>';
  text += "</tr>";

  i = 1;

  for (x in inputData) {
    text +=
      "<tr><td id = '" +
      i +
      "ParamCode" +
      "'  >" +
      inputData[x]["Param Code"] +
      "</td>" +
      "<td id = '" +
      i +
      "ParamValue" +
      "'  >" +
      inputData[x]["Param Value"] +
      "</td>" +
      "<td id = '" +
      i +
      "Status" +
      "'  >" +
      inputData[x].Status +
      "<td></tr>";

    i++;
  }
  text += "</table>";

  document.getElementById("demo").innerHTML = text;
}

function addRow() {
  console.log("Inside  addRow()");
  document.getElementById("submitBtn").disabled = false;
}

var cell1;
var cell2;
var cell3;
run();
function run() {
  var t = document.getElementById("myTable");
  t.onclick = function (event) {
    document.getElementById("submitBtn").disabled = false;
    event = event || window.event; //IE8
    var target = event.target;
    while (target && target.nodeName != "TR") {
      // find TR
      target = target.parentElement;
    }
    //if (!target) { return; } //tr should be always found

    var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement

    //var cells = target.getElementsByTagName('td'); //alternative
    if (!cells.length || target.parentNode.nodeName == "THEAD") {
      return;
    }
    var f1 = document.getElementById("ParamCode");
    var f2 = document.getElementById("ParamValue");
    var f3 = document.getElementById("Status");
    
    // random number for ID
    let x = Math.floor((Math.random() * 500) + 1);
    document.getElementById("id").value=x;

    f1.value = cells[0].innerHTML;
    f2.value = cells[1].innerHTML;
    f3.value = cells[2].innerHTML;

    cell1 = cells[0];
    cell2 = cells[1];
    cell3 = cells[2];
  };
}

function addFormDetails() {
  console.log("inside addFormDetails  addRow()");

  var f1 = document.getElementById("ParamCode").value;
  var f2 = document.getElementById("ParamValue").value;
  var f3 = document.getElementById("Status").value;

  cell1.innerHTML = f1
  cell2.innerHTML = f2
  cell3.innerHTML = f3

  

  document.getElementById("submitBtn").disabled = true;
  document.getElementById("ParamCode").value = "";
  document.getElementById("ParamValue").value = "";
  document.getElementById("Status").value = "";

}

function clearForm(){

  document.getElementById("submitBtn").disabled = true;
  document.getElementById("ParamCode").value = "";
  document.getElementById("ParamValue").value = "";
  document.getElementById("Status").value = "";

}
