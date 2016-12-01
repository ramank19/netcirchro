$(document).ready(function() {
    /*
     * disable the submit button
     */
    $("form input[type=submit][name=submit]").each(function() {
        $(this).attr("disabled", "disabled");        
    });
    
    /*
     * hide "otherfield"
     */
    $("#otherfield").css("display", "none");
    
    $("#sourcefield").change(function(e) {
    	if ($("#sourcefield :selected").text() == "Other") {
    		$("#otherfield").css("display", "");
    	} else {
    		$("#otherfield").css("display", "none");
    	}
    });
    /*
     * define "sourcefield width"
     */
    $("#sourcefield").css("width", "240px");
    
    var names = ["firstnamefield", "lastnamefield", "emailfield", "organizationfield"];
    /*
     * create error label and hide it
     */
    for (index in names) {
        var name = names[index];
        $("#" + name).closest("td").append("<span id=error_" + name + "><font color=red>X</font></span>");
        $("#error_" + name).css("display", "none");
        $("#" + name).click(function(e) {
            $(this).siblings("span").css("display", "none");
        });
    }
    /*
     * special handler for "otherfield"
     */
    name = "otherfield";
    $("#" + name).closest("td").append("<span id=error_" + name + "><font color=red>X</font></span>");
    $("#error_" + name).css("display", "none");
    $("#" + name).click(function(e) {
        $(this).siblings("span").css("display", "none");
    });
    
    /*
     * disable "submit" button
     */
    $("input[type=checkbox][name='agreetoattributionfield']").click(function(e) {
        if (this.checked) {
            $("form input[type=submit][name=submit]").removeAttr("disabled");
        } else {
            $("form input[type=submit][name=submit]").attr("disabled", "disabled");
        }
    });
    
    $("form input[type=submit][name=submit]").click(function(e) {
    	var error = 0;
        /*
         * verify the data input and submit the data
         */
        var x;
         
        for (index in names) {
        	var name = names[index];
            x = $("#" + name).val();
            x = jQuery.trim(x);
            if (x.length == 0) {
                $("#error_" + name).css("display", "");
                error += 1;
            } else {
                $("#error_" + name).css("display", "none");
            }   
        }
        /*
         * special handler for "otherfield"
         */
        name = "otherfield";
        x = $("#" + name).val();
        x = jQuery.trim(x);
        if ($("#sourcefield :selected").text() == "Other") { 
	        if (x.length == 0) {
	            $("#error_" + name).css("display", "");
	            error += 1;
	        } else {
	            $("#error_" + name).css("display", "none");
	        }
        }
        /*
         * check email format
         */         
        x = $("#emailfield").val();
        x = jQuery.trim(x);
        if (x.length > 0) {
            var p = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (x.search(p) == -1) {
                $("#error_emailfield").css("display", "");
                error += 1;
            } else {
                $("#error_emailfield").css("display", "none");
            }
        }
        document.registrationForm.action= "register";
        return (error == 0);
     });
});