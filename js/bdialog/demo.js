$(function(){
	$('#btnDialog').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog1,#btnDialog2').click(function(){
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
					alert('已完成弹出窗口操作！\\n接收到弹出窗口传回的 userName 参数，值为：\\n' + data.results[0].userName + '</b>');
				}else{
					alert('弹出窗口未回传参数',$.noop,'error');
				}
			}
		});
	});
	$('#btnDialog3').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			dialogCloseButton : false,
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog4').click(function(){
		bDialog.open({
			title : false,
			width : 500,
			height : 450,
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog5').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			fullWidth : true,
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	
	$('#btnDialog6').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			customClass : 'original',
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog7').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			customClass : 'blue',
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog8').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			customClass : 'simple',
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog9').click(function(){
		bDialog.open({
			title : '页面片段窗口',
			width : 500,
			height : 450
		},$('#innerContent').html());
	});
});