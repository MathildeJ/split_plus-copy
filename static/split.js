var splitter;
$(document).ready(function(){
	
	// swap control dialog (informs that request has been sent)
	$("#dialog").dialog({
		autoOpen: false
	});

	// resizable
	$('#stretch').click(function(){
		$("#ignore").hide();
		if($('#stretch').html()=="Stretch"){
			if(!splitter){
				$('#ifrm1, #ifrm2').css("width", "100%");
				splitter = $('#container_resize').height(700).split({
					    orientation: 'vertical',
					    limit: '200',
					    position: '50%'
				});
			}
			document.getElementById("stretch").innerHTML = "Reset";
		} else {
			splitter.position("50%");
		}
	});


	// swap request 
	var me = this;

	$("#dialog-confirm").dialog({
	      autoOpen: false,
	      resizable: false,
	      height: "auto",
	      width: 400,
	      modal: true,
	      buttons: {
		"Accept": function() {
		  if(swapped%2==0){
		        sess.giveControl(1);
 		  } else {
			sess.giveControl(0);
	          }
  		  frame = document.getElementById("ifrm1").contentWindow;
  		  frame.postMessage(JSON.stringify({"command": "message", "data": "swap_accepted"}), '*');
		  swapped++;
		  $(this).dialog("close");
		},
		Cancel: function() {
		  frame = document.getElementById("ifrm1").contentWindow;
  		  frame.postMessage(JSON.stringify({"command": "message", "data": "swap_denied"}), '*');
		  $(this).dialog("close");
		}
	      }
	});
	
	// form
	$('#url').focus(function() { 
  		$(this).val(''); 
	});
	$('#url').keypress(function(e){
		if (e.keyCode == 13){
			e.preventDefault();
			$('#submit_button').click();
		}
	});

});
