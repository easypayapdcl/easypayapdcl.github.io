 $(document).ready(function(){
	 viewTaskBox();	 
 });
 
 function viewTaskBox(){
	 document.getElementById("TBtab").classList.remove("inActiveBread");
   	 document.getElementById("TBtab").classList.add("activeBread");
   	
		 
   	 document.getElementById("sdetab").classList.remove("activeBread");
   	 document.getElementById("sdetab").classList.add("inActiveBread");
   	 document.getElementById('sdetab').onclick = null;
   	 
   	 document.getElementById("apptab").classList.remove("activeBread");
  	 document.getElementById("apptab").classList.add("inActiveBread");
  	 document.getElementById('apptab').onclick = null;
   	
   	 document.getElementById("hqtab").classList.remove("activeBread");
   	 document.getElementById("hqtab").classList.add("inActiveBread");
  	 document.getElementById('hqtab').onclick = null;
  	 
   	 document.getElementById("finaltab").classList.remove("activeBread");
   	 document.getElementById("finaltab").classList.add("inActiveBread");
  	 document.getElementById('finaltab').onclick = null;
  	 
	 document.getElementById("sdeApproval").style.display="none";
	 document.getElementById("appApproval").style.display="none";
	 document.getElementById("hqApproval").style.display="none";
	 document.getElementById("finalApproval").style.display="none";
	// document.getElementById("no_results").style.display="none";
 }
 
 
 function viewSDEApproval(){
	 document.getElementById("TBtab").classList.remove("inActiveBread");
   	 document.getElementById("TBtab").classList.add("activeBread");
   	
		 
   	 document.getElementById("sdetab").classList.remove("inActiveBread");
   	 document.getElementById("sdetab").classList.add("activeBread");
   	 document.getElementById('sdetab').onclick = null;
   	
   	document.getElementById("apptab").classList.remove("activeBread");
 	 document.getElementById("apptab").classList.add("inActiveBread");
 	 document.getElementById('apptab').onclick = null;
 	 
   	 document.getElementById("hqtab").classList.remove("activeBread");
   	 document.getElementById("hqtab").classList.add("inActiveBread");
  	 document.getElementById('hqtab').onclick = null;
  	 
   	 document.getElementById("finaltab").classList.remove("activeBread");
   	 document.getElementById("finaltab").classList.add("inActiveBread");
  	 document.getElementById('finaltab').onclick = null;
  	 
	 document.getElementById("taskBox").style.display="none";
	 document.getElementById("sdeApproval").style.display="block";
	 document.getElementById("appApproval").style.display="none";
	 document.getElementById("hqApproval").style.display="none";
	 document.getElementById("finalApproval").style.display="none";
 }
 
 function viewApproverApproval(){
	 document.getElementById("TBtab").classList.remove("inActiveBread");
   	 document.getElementById("TBtab").classList.add("activeBread");
   	
		 
   	 document.getElementById("sdetab").classList.remove("activeBread");
   	 document.getElementById("sdetab").classList.add("inActiveBread");
   	 document.getElementById('sdetab').onclick = null;
   	
   	document.getElementById("apptab").classList.remove("inActiveBread");
 	 document.getElementById("apptab").classList.add("activeBread");
 	 document.getElementById('apptab').onclick = null;
 	 
   	 document.getElementById("hqtab").classList.remove("activeBread");
   	 document.getElementById("hqtab").classList.add("inActiveBread");
  	 document.getElementById('hqtab').onclick = null;
  	 
   	 document.getElementById("finaltab").classList.remove("activeBread");
   	 document.getElementById("finaltab").classList.add("inActiveBread");
  	 document.getElementById('finaltab').onclick = null;
  	 
	 document.getElementById("taskBox").style.display="none";
	 document.getElementById("sdeApproval").style.display="none";
	 document.getElementById("appApproval").style.display="block";
	 document.getElementById("hqApproval").style.display="none";
	 document.getElementById("finalApproval").style.display="none";
 }
 
function viewHQApproval(){
	 document.getElementById("TBtab").classList.remove("inActiveBread");
  	 document.getElementById("TBtab").classList.add("activeBread");
  	
		 
  	 document.getElementById("sdetab").classList.remove("activeBread");
  	 document.getElementById("sdetab").classList.add("inActiveBread");
  	 document.getElementById('sdetab').onclick = null;
  	
  	document.getElementById("apptab").classList.remove("activeBread");
 	 document.getElementById("apptab").classList.add("inActiveBread");
 	 document.getElementById('apptab').onclick = null;
 	 
  	 document.getElementById("hqtab").classList.remove("inActiveBread");
  	 document.getElementById("hqtab").classList.add("activeBread");
 	 document.getElementById('hqtab').onclick = null;
 	 
  	 document.getElementById("finaltab").classList.remove("activeBread");
  	 document.getElementById("finaltab").classList.add("inActiveBread");
 	 document.getElementById('finaltab').onclick = null;
 	 
	 document.getElementById("sdeApproval").style.display="none";
	 document.getElementById("hqApproval").style.display="none";
	 document.getElementById("finalApproval").style.display="none";
	 
	 document.getElementById("taskBox").style.display="none";
	 document.getElementById("sdeApproval").style.display="none";
	 document.getElementById("appApproval").style.display="none";
	 document.getElementById("hqApproval").style.display="block";
	 document.getElementById("finalApproval").style.display="none";
 }

function viewFinalApproval(){
	document.getElementById("TBtab").classList.remove("inActiveBread");
  	 document.getElementById("TBtab").classList.add("activeBread");
  	
		 
  	 document.getElementById("sdetab").classList.remove("activeBread");
  	 document.getElementById("sdetab").classList.add("inActiveBread");
  	 document.getElementById('sdetab').onclick = null;
  	
  	document.getElementById("apptab").classList.remove("activeBread");
 	 document.getElementById("apptab").classList.add("inActiveBread");
 	 document.getElementById('apptab').onclick = null;
 	 
  	 document.getElementById("hqtab").classList.remove("activeBread");
  	 document.getElementById("hqtab").classList.add("inActiveBread");
 	 document.getElementById('hqtab').onclick = null;
 	 
  	 document.getElementById("finaltab").classList.remove("inActiveBread");
  	 document.getElementById("finaltab").classList.add("activeBread");
 	 document.getElementById('finaltab').onclick = null;
 	 
	 document.getElementById("taskBox").style.display="none";
	 document.getElementById("sdeApproval").style.display="none";
	 document.getElementById("appApproval").style.display="none";
	 document.getElementById("hqApproval").style.display="none";
	 document.getElementById("finalApproval").style.display="block";
}


function pageRefresh(){
	var URL = window.location.protocol+'//'+window.location.hostname + (location.port ? ':'+location.port: '') + "/easypay/registrationProcessApproval/1?id=all";
	window.open(URL,"_self");
	//location.reload();
}