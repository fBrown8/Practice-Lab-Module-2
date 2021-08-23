function addressFunction() 
{
    if (document.getElementById(
      "same").checked)
      {
        document.getElementById(
          "secondaryaddress").value = 
        document.getElementById(
          "primaryaddress").value;
        
        document.getElementById(
          "secondaryzip").value = 
        document.getElementById(
          "primaryzip").value;
        } 
    else {
        document.getElementById(
          "secondaryaddress").value = "";
        document.getElementById(
          "secondaryzip").value = "";
    }
}

function submitData()
{
    const primAdd = document.getElementById("primaryaddress").value;
    const primZip = document.getElementById("primaryzip").value;
    const secAdd = document.getElementById("secondaryaddress").value;
    const secZip = document.getElementById("secondaryzip").value;

    if(primAdd == secAdd && primZip == secZip)
    {
        alert("success");
        
    }
    else
    {
        alert("error");
    }
}