$(function(){
	$('#btnDefault').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			url : 'https://terryz.github.io/bdialog/open.html',
			params : {
				'userName' : 'zhangsan'
			},
			callback:function(data){
				if(data && data.results && data.results.length > 0 ){
					eDialog.alert('已完成弹出窗口操作！<br>接收到弹出窗口传回的 userName 参数，值为：<b>' + data.results[0].userName + '</b>');
				}else{
					eDialog.alert('弹出窗口未回传参数',$.noop,'error');
				}
			}
		});
	});
});