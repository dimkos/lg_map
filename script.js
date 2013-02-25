$(svgdom.getElementsByClassName("area")).tooltip({
		  bodyHandler: function() {
		    var id     = $(this).attr("id");
		    var area   = $("#m_k_table #"+id+" td:nth-child(2)").text();
		    var result = $("<p>").append($("<strong>").text(area));
		    $("#m_k_table #"+id+" td:nth-child(2)").nextAll().each(function(){
		      var pos = $(this).prevAll().length+1;
		      var title = $("#m_k_table thead th:nth-child("+pos+")").text();
		      var value = $(this).text();
		      result.append($("<p>").text(title + ": " + value));
		    });
		  return result;
		}
});
