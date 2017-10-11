function setActive(id){
    if(!id || $('#'+id).size() === 0) return;
    var li = $('#'+id);
    $('a',li).attr('href','javascript:void(0);');
    $(li).addClass('active');
}
var _hmt = _hmt || [];
$(function(){
    //visit count
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?355958f7f11ee0996a38a2f61f67844e";
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);


    var menuData = [
        {content:'Sites',header: true},
        {content:'<i class="fa fa-fw fa-home"></i> English official site',url : 'https://terryz.github.io', disabled : true},
        {content:'<i class="fa fa-fw fa-home"></i> 中文官网',url : 'https://terryz.oschina.io'},
        {content:'<i class="fa fa-fw fa-github"></i> Github',url : 'https://github.com/TerryZ'},
        {content:'sm_divider'},
        {content:'Products',header: true},
        {content:'<i class="fa fa-fw fa-list-alt"></i> SelectPage',url : 'https://terryz.github.io/selectpage/index.html'},
        {content:'<i class="fa fa-fw fa-bars"></i> SelectMenu',url : 'https://terryz.github.io/selectmenu/index.html'},
        {content:'<i class="fa fa-fw fa-window-restore"></i> bDialog',url : 'https://terryz.github.io/bdialog/index.html'},
        {content:'<i class="fa fa-fw fa-caret-square-o-right"></i> bPage',url : 'https://terryz.github.io/bpage/index.html'},
        {content:'<i class="fa fa-fw fa-folder-o"></i> bTabs',url : 'https://terryz.github.io/btabs/index.html'}
    ];
    $('#lnkMyProjects').click(function(){
        $(this).selectMenu({
            title : 'Other site',
            regular : true,
            position : 'right',
            data : menuData
        });
    });
});