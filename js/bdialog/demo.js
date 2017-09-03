$(function(){
	$('#btnDialog').click(function(){
		bDialog.open({
			title : '窗口标题',
			width : 500,
			height : 450,
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
    $('#btnInfo').click(function(){
        bDialog.alert('互联网科技与金融的结合变革了传统金融的经营思路，促使了金融行业的转型。如何利用科技进一步推动社会与经济的发展，成为了科技和金融领域需要共同思考的问题。11 日下午金融科技主论坛，不仅有蚂蚁金服发布在金融云、AI、风控、生物识别、开放平台等领域的最新进展以及技术突破，更有世界级别大咖：联合国粮农署副总干事 Mr. Daniel J. Gustafson 分享“科技如何消除贫困，推动农业发展”等。');
    });
    $('#btnWarning').click(function(){
        bDialog.alert('数据保存疑似成功！',null,{
            messageType : 'warning'
        });
    });
    $('#btnError').click(function(){
        bDialog.alert('数据保存失败！（插件语言设置了日文）',null,{
            messageType : 'error',
            language : 'jp'
        });
    });
    $('#btnSuccess').click(function(){
        bDialog.alert('数据保存成功！大吉大利，晚上吃鸡！',null,{
            messageType : 'success'
        });
    });
    $('#btnConfirm').click(function(){
        bDialog.alert('你确认希望保存这些数据吗？',function(){
            bDialog.alert('已确认！');
        },{
            messageType : 'confirm',
            cancel : function(dlg){
                bDialog.alert('已取消！',null,{
                    messageType : 'warning'
                });
            }
        });
    });
    $('#btnMask').click(function(){
        var a = bDialog.mask();
        setTimeout(function(){
            bDialog.close(a);
        },3000);
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
					bDialog.alert('已完成弹出窗口操作！<br>接收到弹出窗口传回的 userName 参数，值为：<br>' + data.results[0].userName + '</br>');
				}else{
                    bDialog.alert('弹出窗口未回传参数',$.noop,{
                        messageType : 'error'
                    });
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
			dialogMaxButton : false,
			customClass : 'simple',
			url : 'https://terryz.github.io/bdialog/opentext.html'
		});
	});
	$('#btnDialog9').click(function(){
		bDialog.open({
			title : '页面片段窗口',
			width : 500,
			height : 450,
            dom : $('#innerContent').html()
		});
	});
});