function setActive(id){
    if(!id || $('#'+id).size() === 0) return;
    var li = $('#'+id);
    $('a',li).attr('href','javascript:void(0);');
    $(li).addClass('active');
}
var _hmt = _hmt || [];
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

    //visit count
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?2c195274cd3511a4924527cd6dd883a2";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);


    var menuData = [
        {content:'Sites',header: true},
        {content:'<i class="fa fa-fw fa-home"></i> English official site',url : 'https://terryz.github.io', disabled : true},
        {content:'<i class="fa fa-fw fa-home"></i> 中文官网',url : 'https://terryz.gitee.io'},
        {content:'<i class="fa fa-fw fa-github"></i> Github',url : 'https://github.com/TerryZ'},
        {content:'sm_divider'},
        {content:'Products',header: true},
        {content:'<i class="fa fa-fw fa-list-alt"></i> SelectPage',url : 'https://terryz.github.io/selectpage'},
        {content:'<i class="fa fa-fw fa-bars"></i> SelectMenu',url : 'https://terryz.github.io/selectmenu'},
        {content:'<i class="fa fa-fw fa-window-restore"></i> bDialog',url : 'https://terryz.github.io/bdialog'},
        {content:'<i class="fa fa-fw fa-caret-square-o-right"></i> bPage',url : 'https://terryz.github.io/bpage'},
        {content:'<i class="fa fa-fw fa-folder-o"></i> bTabs',url : 'https://terryz.github.io/btabs'}
    ];
    $('#lnkMyProjects').click(function(){
        $(this).selectMenu({
            regular : true,
            position : 'right',
            arrow : true,
            data : menuData
        });
    });
});
