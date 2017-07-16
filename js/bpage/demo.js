$(function(){
	var $webroot = '/';
	$('#page1').bPage({
	    url : $webroot + 'demo/manage/page',
	    totalPage : 3,
	    totalRow : 28,
	    pageSize : 10,
	    pageNumber : 1,
	    params : function(){
	        return {
	            userName : 'zhangsan',
	            age : 42
	        };
	    }
	});
	$('#page2').bPage({
	    url : $webroot + 'demo/manage/pageLoad',
	    asyncLoad : true,
	    serverSidePage : true,
	    asyncTarget : '#pageContent',
	    params : function(){
	        return {
	            userName : 'zhangsan',
	            age : 42
	        };
	    }
	});
	$('#page3').bPage({
	    url : '../js/bpage/data.json',
	    asyncLoad : true,
	    serverSidePage : false,
	    render : function(data){
	    	var tb = $('#dataGridTableJson tbody');
	    	$(tb).empty();
	    	if(data && data.list && data.list.length > 0){
	    		$.each(data.list,function(i,row){
	    			var tr = $('<tr>');
	    			$(tr).append('<td></td>');
	    			$(tr).append('<td>'+row.login_name+'</td>');
	    			$(tr).append('<td>'+row.name+'</td>');
	    			$(tr).append('<td>'+row.sexName+'</td>');
	    			$(tr).append('<td>'+row.birthday+'</td>');
	    			$(tr).append('<td>'+row.phone1+'</td>');
	    			$(tr).append('<td>'+row.email+'</td>');
	    			$(tr).append('<td>'+row.statusName+'</td>');
	    			$(tr).append('<td>'+row.update_time+'</td>');
	    			$(tb).append(tr);
	    		});
	    	}
	    },
	    params : function(){
	        return {
	            userName : 'zhangsan',
	            age : 42
	        };
	    }
	});
});