$(document).ready(function() {
	var count=0;
    $("#post").click(function(){
    	var txt=$("#txt").val().trim();
    	$("#txt").val("");
    	if((txt == "") || (txt == null)){
    		return;
    	}
    	else{
    		count++;
    		var temp="";
    		for (var i = 0; i < txt.length; i++) {
    			temp = temp +"<span>"+txt.charAt(i)+"</span>";
    		};
    		$("#main").append("<div class='block' id='block"+count+"' onclick='currentNode(this)'>"
    			+"<div class='text'>"+temp+"</div>"
    			+"</div>");
    	}
    });
});
var lock=true,node;
function currentNode(cnode){
    if (lock) {
        lock=false;
        node=cnode;
        $(".block").attr("style","");
        node.setAttribute("style","background-color:#f0f0f0;zoom:1.04;box-shadow:0px 4px 8px #333;");
        lock=true;
    };
}
$(".option").click(function(){
    var effect=$(this).attr("name");
    if ($(".block").length <= 0) {
        alert("Post your text in the box");
        return;
    }
    if ((typeof(node) == "undefined") || (node == "") || (node == null)) {
        alert("Select the block");
        return;
    }
    node.setAttribute("class","block "+effect+"");
});
