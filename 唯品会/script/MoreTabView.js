function MoreTabView(){
	
	TabView.call(this)
}

MoreTabView.prototype = Object.create(TabView.prototype)

MoreTabView.prototype.constructor = MoreTabView

MoreTabView.prototype.load = function(){
	
	TabView.prototype.load.call(this)
	
	//获取更多按钮的右边和窗口的距离
	var moreRight = document.querySelector('.more-show').getBoundingClientRect().right
	
	var left = moreRight -  $('.more-modal').innerWidth() + 'px'
	
	$('.more-modal').show().css({
		
		left:left
	})//悬停的时候显示，否则消失
	.hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
	//设置悬停时候的图片效果
	$('.more-modal li').hover(function(){
		
		$(this).find('p').stop().animate({
			
			top:'0'
		},250)
	},function(){
		
		$(this).find('p').stop().animate({
			
			top:'25%'
		},250)
	})
}

MoreTabView.prototype.unload = function(){
	
	$('.more-modal').hide()
}



