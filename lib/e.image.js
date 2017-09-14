/**
 * 图片展示、处理相关功能封装
 * 
 * Author：Terry
 * Created：2016.07.18
 *  
 */
;(function(w) {
	'use strict';
	var _template = '<div id="eImageControlBar" class="blueimp-gallery blueimp-gallery-carousel blueimp-gallery-controls">';
	_template += '<div class="slides"></div>';
	_template += '<h3 class="title"></h3>';
	_template += '<a class="prev">‹</a>';
	_template += '<a class="next">›</a>';
	_template += '<a class="close">×</a>';
	_template += '<a class="play-pause"></a>';
	_template += '<ol class="indicator"></ol>';
	_template += '</div>';
	var eImage = {
		/**
		 * 旋转木马式的图片展示（图片轮播）
		 * 基于blueimp-gallery进行功能封装
		 */
		carousel : function(box){
			if(!w.blueimp) {
				console.error('功能基于blueimp-gallery插件，请引用用再使用(eImage.carousel)');
				return;
			}
			if($(box).size()==0 || $('a',$(box)).size()==0){
				console.error('源图片内容格式设置不正确！(eImage.carousel)');
				return;
			}
			var main = $(box).parent(),controlBar = null;
			if($('#eImageControlBar',$(main)).size() > 0){
				controlBar = $('#eImageControlBar',$(main));
			}else{
				var tmp = _template;
				var controlBar = $(tmp);
				$('a.close',$(controlBar)).remove();
				$(box).after(controlBar);
			}
			blueimp.Gallery($('a',$(box)), {
				container: controlBar,
				carousel: true,
				toggleControlsOnSlideClick : false
			});
		},
		/**
		 * 全屏照片查看
		 * 基于blueimp-gallery进行功能封装
		 * 此为使用脚本方式初始化，若为每个a标签设置data-gallery属性，则插件会自动为其初始化功能
		 * 设置展示区域样式blueimp-gallery-controls，自动显示控制区域
		 * 
		 */
		gallery : function(box){
			if(!w.blueimp){
				console.error('功能基于blueimp-gallery插件，请引用用再使用(eImage.gallery)');
				return;
			}
			if($(box).size()==0 || $('a',$(box)).size()==0){
				console.error('源图片内容格式设置不正确！(eImage.carousel)');
				return;
			}
			var main = $(box).parent(),controlBar = null;
			if($('#eImageControlBar',$(main)).size() > 0){
				controlBar = $('#eImageControlBar',$(main));
			}else{
				var tmp = _template;
				var controlBar = $(tmp);
				$(controlBar).removeClass('blueimp-gallery-carousel');
				$(box).after(controlBar);
			}
			$(box).click(function(event) {
				event = event || window.event;
				var target = event.target || event.srcElement,
					link = target.src ? target.parentNode : target,
					options = {
						index: link,
						event: event,
						container : controlBar,
						closeOnSlideClick : false,//点击非图片区域，非控制按钮的空白区域时，是否关闭图片显示
						closeOnSwipeUpOrDown : false,//图片上下拖动，到屏幕尽头时，关闭图片显示
						enableKeyboardNavigation : true,//是否打开键盘导航
						toggleControlsOnReturn : false,//是否允许回车，显示/隐藏控制按钮
						toggleControlsOnSlideClick : false,//是否允许鼠标点击图片，显示/隐藏控制按钮
						startSlideshow : false//是否自动开始播放图片轮播
					},
					links = $('a',$(this));
				blueimp.Gallery(links, options);
			});
		}
	}
	w.eImage = eImage;
}(window));