$(function(){
    var selectMenuData = [
        {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛',abbr:'CHI'},
        {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士',abbr:'CLE'},
        {id:3 ,name:'Detroit Pistons',desc:'底特律活塞',abbr:'DET'},
        {id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者',abbr:'IND'},
        {id:5 ,name:'Milwaukee Bucks',desc:'密尔沃基雄鹿',abbr:'MIL'},
        {id:6 ,name:'Brooklyn Nets',desc:'布鲁克林篮网',abbr:'BKN'},
        {id:7 ,name:'Boston Celtics',desc:'波士顿凯尔特人',abbr:'BOS'},
        {id:8 ,name:'New York Knicks',desc:'纽约尼克斯',abbr:'NYK'},
        {id:9 ,name:'Philadelphia 76ers',desc:'费城76人',abbr:'PHI'},
        {id:10,name:'Toronto Raptors',desc:'多伦多猛龙',abbr:'TOR'},
        {id:11,name:'Atlanta Hawks',desc:'亚特兰大老鹰',abbr:'ATL'},
        {id:12,name:'Charlotte Hornets',desc:'夏洛特黄蜂',abbr:'CHA'},
        {id:13,name:'Miami Heat',desc:'迈阿密热火',abbr:'MIA'},
        {id:14,name:'Orlando Magic',desc:'奥兰多魔术',abbr:'ORL'},
        {id:15,name:'Washington Wizards',desc:'华盛顿奇才',abbr:'WAS'},
        {id:16,name:'Denver Nuggets',desc:'丹佛掘金',abbr:'DEN'},
        {id:17,name:'Minnesota Timberwolves',desc:'明尼苏达森林狼',abbr:'MIN'},
        {id:18,name:'Oklahoma City Thunder',desc:'俄克拉荷马雷霆',abbr:'OKC'},
        {id:19,name:'Portland Trail Blazers',desc:'波特兰开拓者',abbr:'POR'},
        {id:20,name:'Utah Jazz',desc:'犹他爵士',abbr:'UTA'},
        {id:21,name:'Golden State Warriors',desc:'金州勇士',abbr:'GSW'},
        {id:22,name:'Los Angeles Clippers',desc:'洛杉矶快船',abbr:'LAC'},
        {id:23,name:'Los Angeles Lakers',desc:'洛杉矶湖人',abbr:'LAL'},
        {id:24,name:'Phoenix Suns',desc:'菲尼克斯太阳',abbr:'PHX'},
        {id:25,name:'Sacramento Kings',desc:'萨克拉门托国王',abbr:'SAC'},
        {id:26,name:'Dallas Mavericks',desc:'达拉斯小牛',abbr:'DAL'},
        {id:27,name:'Houston Rockets',desc:'休斯顿火箭',abbr:'HOU'},
        {id:28,name:'Memphis Grizzlies',desc:'孟菲斯灰熊',abbr:'MEM'},
        {id:29,name:'New Orleans Pelicans',desc:'新奥尔良鹈鹕',abbr:'NOP'},
        {id:30,name:'San Antonio Spurs',desc:'圣安东尼奥马刺',abbr:'SAS'}
    ];
    var selectMenuGroupData = [{
        title : 'East',
        list :[
            {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛',abbr:'CHI'},
            {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士',abbr:'CLE'},
            {id:3 ,name:'Detroit Pistons',desc:'底特律活塞',abbr:'DET'},
            {id:4 ,name:'Indiana Pacers',desc:'印第安纳步行者',abbr:'IND'},
            {id:5 ,name:'Milwaukee Bucks',desc:'密尔沃基雄鹿',abbr:'MIL'},
            {id:6 ,name:'Brooklyn Nets',desc:'布鲁克林篮网',abbr:'BKN'},
            {id:7 ,name:'Boston Celtics',desc:'波士顿凯尔特人',abbr:'BOS'},
            {id:8 ,name:'New York Knicks',desc:'纽约尼克斯',abbr:'NYK'},
            {id:9 ,name:'Philadelphia 76ers',desc:'费城76人',abbr:'PHI'},
            {id:10,name:'Toronto Raptors',desc:'多伦多猛龙',abbr:'TOR'},
            {id:11,name:'Atlanta Hawks',desc:'亚特兰大老鹰',abbr:'ATL'},
            {id:12,name:'Charlotte Hornets',desc:'夏洛特黄蜂',abbr:'CHA'},
            {id:13,name:'Miami Heat',desc:'迈阿密热火',abbr:'MIA'},
            {id:14,name:'Orlando Magic',desc:'奥兰多魔术',abbr:'ORL'},
            {id:15,name:'Washington Wizards',desc:'华盛顿奇才',abbr:'WAS'}
        ]
    },{
        title : 'West',
        list : [
            {id:16,name:'Denver Nuggets',desc:'丹佛掘金',abbr:'DEN'},
            {id:17,name:'Minnesota Timberwolves',desc:'明尼苏达森林狼',abbr:'MIN'},
            {id:18,name:'Oklahoma City Thunder',desc:'俄克拉荷马雷霆',abbr:'OKC'},
            {id:19,name:'Portland Trail Blazers',desc:'波特兰开拓者',abbr:'POR'},
            {id:20,name:'Utah Jazz',desc:'犹他爵士',abbr:'UTA'},
            {id:21,name:'Golden State Warriors',desc:'金州勇士',abbr:'GSW'},
            {id:22,name:'Los Angeles Clippers',desc:'洛杉矶快船',abbr:'LAC'},
            {id:23,name:'Los Angeles Lakers',desc:'洛杉矶湖人',abbr:'LAL'},
            {id:24,name:'Phoenix Suns',desc:'菲尼克斯太阳',abbr:'PHX'},
            {id:25,name:'Sacramento Kings',desc:'萨克拉门托国王',abbr:'SAC'},
            {id:26,name:'Dallas Mavericks',desc:'达拉斯小牛',abbr:'DAL'},
            {id:27,name:'Houston Rockets',desc:'休斯顿火箭',abbr:'HOU'},
            {id:28,name:'Memphis Grizzlies',desc:'孟菲斯灰熊',abbr:'MEM'},
            {id:29,name:'New Orleans Pelicans',desc:'新奥尔良鹈鹕',abbr:'NOP'},
            {id:30,name:'San Antonio Spurs',desc:'圣安东尼奥马刺',abbr:'SAS'}
        ]}
    ];
    var baseMenuData = [
        {content:'163 NetEase',url : 'http://www.163.com'},
        {content:'Sina',url : 'http://www.sina.com'},
        {content:'sm_divider'},
        {content:'<i class="fa fa-fw fa-github"></i> GitHub',url : 'https://github.com'},
        {content:'<i class="fa fa-fw fa-reddit"></i> Reddit',url : 'https://www.reddit.com'},
        {content:'<i class="fa fa-fw fa-facebook"></i> Facebook',url : 'https://www.facebook.com',disabled : true},
        {content:'<i class="fa fa-fw fa-twitter"></i> Twitter',url : 'https://twitter.com',disabled : true},
        {content:'sm_divider'},
        {content:'Click this menu item to trigger your callback',callback : function(){
            bDialog.alert('you can do anything in callback!');
        }}
    ];
    var baseMenuHeaderData = [
        {content:'News Site',header: true},
        {content:'163 NetEase',url : 'http://www.163.com'},
        {content:'Sina',url : 'http://www.sina.com'},
        {content:'sm_divider'},
        {content:'Technology Site',header: true},
        {content:'<i class="fa fa-fw fa-github"></i> GitHub',url : 'https://github.com'},
        {content:'<i class="fa fa-fw fa-reddit"></i> Reddit',url : 'https://www.reddit.com'},
        {content:'<i class="fa fa-fw fa-facebook"></i> Facebook',url : 'https://www.facebook.com',disabled : true},
        {content:'<i class="fa fa-fw fa-twitter"></i> Twitter',url : 'https://twitter.com',disabled : true},
        {content:'sm_divider'},
        {content:'Actions',header: true},
        {content:'Click this menu item to trigger your callback',callback : function(){
            bDialog.alert('you can do anything in callback!');
        }}
    ];
    $('#selectMenuBase').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            search : true,
            data : selectMenuData
        });
    });
    $('#selectMenuNoSearch').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            search : false,
            data : selectMenuData
        });
    });
    $('#selectMenuListSize').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            search : false,
            title : false,
            listSize : 5,
            data : selectMenuData
        });
    });
    $('#selectMenuGroup').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            listSize : 10,
            multiple : true,
            data : selectMenuGroupData
        });
    });
    $('#selectMenuInit').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            arrow : true,
            initSelected : 1,
            data : selectMenuData
        });
    });
    $('#selectMenuFormat').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            initSelected : 1,
            formatItem : function(row){
                var logoUrl = 'http://china.nba.com/media/img/teams/logos/';
                var html = '<div class=""><div class="col-md-3">';
                html += '<img src="'+logoUrl+row.abbr+'_logo.svg" width="64" height="64">';
                html += '</div>';
                html += '<div class="col-md-7">';
                html += row.name + '<br>' + row.desc;
                html += '</div></div>';
                return html;
            },
            data : selectMenuData
        });
    });
    $('#selectMenuRightClickBase').selectMenu({
        title : 'Regular menu',
        regular : true,
        rightClick : true,
        data : baseMenuHeaderData
    });
    $('#selectMenuRightClickAdv').selectMenu({
        title : 'Advanced menu',
        showField : 'name',
        keyField : 'id',
        rightClick : true,
        data : selectMenuData
    });
    $('#btnAddRow').click(function(){
        var li = $('<li>').addClass('list-group-item').html('new menu item ' + ($('#ulDynamicMenu li').size()+1));
        $('#ulDynamicMenu').append(li);
    });
    $('#selectMenuDynamic').click(function(){
        $(this).selectMenu({
            title : 'Dynamic data menu',
            regular : true,
            data : function(){
                var d = new Array();
                $('#ulDynamicMenu li').each(function(i,row){
                    var rd = { content : $(row).text(), url : 'https://github.com/TerryZ/SelectPage' };
                    d.push(rd);
                });
                return d;
            }
        });
    });






    $('#baseMenu').click(function(){
        $(this).selectMenu({
            regular : true,
            arrow : false,
            data : baseMenuData
        });
    });
    $('#baseMenuArrow').click(function(){
        $(this).selectMenu({
            regular : true,
            arrow : true,
            data : baseMenuData
        });
    });
    $('#baseMenuRight').click(function(){
        $(this).selectMenu({
            regular : true,
            arrow : true,
            position : 'right',
            data : baseMenuData
        });
    });
    $('#baseMenuCenter').click(function(){
        $(this).selectMenu({
            regular : true,
            arrow : true,
            position : 'center',
            data : baseMenuData
        });
    });
    $('#baseMenuHeader').click(function(){
        $(this).selectMenu({
            regular : true,
            title : '<i class="fa fa-fw fa-thumbs-o-up"></i> I can have a title bar',
            data : baseMenuData
        });
    });
    $('#baseMenuSubHeader').click(function(){
        $(this).selectMenu({
            title : 'SelectMenu ',
            regular : true,
            data : baseMenuHeaderData
        });
    });

    $('#demoSingle').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            search : true,
            data : selectMenuData,
            eSelect : function(data){
                if(data && data.length > 0){
                    $('#nbaTeamLogo').attr('src','http://china.nba.com/media/img/teams/logos/'+data[0].abbr+'_logo.svg');
                    $('#nabTeamName').html(data[0].name + '(' + data[0].desc + ')');
                }
            }
        });
    });
    $('#demoMultiple').click(function(){
        $(this).selectMenu({
            showField : 'name',
            keyField : 'id',
            multiple : true,
            lang : 'en',
            position : 'right',
            data : selectMenuGroupData,
            eSelect : function(data){
                $('#nbaTeamLists').empty();
                if(data && data.length > 0){
                    $.each(data,function(i,row){
                        $('#nbaTeamLists').append('<p><strong>'+row.abbr+'</strong> - '+row.name+'(' + row.desc + ')</p>');
                    });
                }
            }
        });
    });
    $('#demoBaseMenu').click(function(){
        $(this).selectMenu({
            title : 'SelectMenu ',
            regular : true,
            data : baseMenuHeaderData
        });
    });
    $('#demoEmbedded,#selectMenuEmbedBase').selectMenu({
        title : 'The menu is Embedded to page',
        embed : true,
        regular : true,
        data : baseMenuHeaderData
    });
    $('#demoRightClick').selectMenu({
        title : 'This is mouse right click menu',
        regular : true,
        rightClick : true,
        data : baseMenuHeaderData
    });
    $('#selectMenuEmbedAdv').selectMenu({
        showField : 'name',
        keyField : 'id',
        embed : true,
        multiple : true,//打开多选模式
        data : selectMenuGroupData
    });
});