$(function(){
	$.ajax({
        url : 'header.html',
        async : false,
        dataType : 'html',
        success : function(html){
            $(document.body).prepend(html);
        }
    });
    $.ajax({
        url : 'footer.html',
        async : false,
        dataType : 'html',
        success : function(html){
            $(document.body).append(html);
        }
    });
});