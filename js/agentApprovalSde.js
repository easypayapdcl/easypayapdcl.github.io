 $(document).ready(function(){
	 viewTaskBox();	 
 });
 
 function viewTaskBox(){
	 document.getElementById("TBtab").classList.remove("inActiveBread");
   	 document.getElementById("TBtab").classList.add("activeBread");
   	  	 
   	 document.getElementById("finaltab").classList.remove("activeBread");
   	 document.getElementById("finaltab").classList.add("inActiveBread");
  	 document.getElementById('finaltab').onclick = null;
  	 document.getElementById("finalApprovalSDE").style.display="none";
	// document.getElementById("no_results").style.display="none";
 }
 
 function loadApproval(){
	document.getElementById("TBtab").classList.remove("inActiveBread");
  	 document.getElementById("TBtab").classList.add("activeBread");
  	
 	 
  	 document.getElementById("finaltab").classList.remove("inActiveBread");
  	 document.getElementById("finaltab").classList.add("activeBread");
 	 document.getElementById('finaltab').onclick = null;
 	 
	 document.getElementById("taskBox").style.display="none";
	 document.getElementById("finalApprovalSDE").style.display="block";
}

function viewFinalApproval(){
	document.getElementById("TBtab").classList.remove("inActiveBread");
  	 document.getElementById("TBtab").classList.add("activeBread");
 	 
  	 document.getElementById("finaltab").classList.remove("inActiveBread");
  	 document.getElementById("finaltab").classList.add("activeBread");
 	 document.getElementById('finaltab').onclick = null;
 	 
	 document.getElementById("taskBox").style.display="none";
	 document.getElementById("finalApprovalSDE").style.display="block";
}

function pageRefresh(){
	var URL = window.location.protocol+'//'+window.location.hostname + (location.port ? ':'+location.port: '') + "/easypay/franchiseeTypeChange/1?id=all";
	window.open(URL,"_self");
	//location.reload();
}