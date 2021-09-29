new Vue({
  el: '#index',
  data:{
  	isLogin: true, //是否已登录
  	isShowUserinfo: false, //用户信息
  	isShowLanguage: false, //语言选择
  	languageType: 1, //语言种类
    curSp: 1, //商品
    isShowOrderSp: false, //商品排序
    orderSpText: '人気顺で并び替え', //商品排序类型
    isDz: false, //商品是否点赞（示例，后续需要改成跟商品数组走）
  },
  mounted:function(){
  	//banner
	var swiper = new Swiper('.banner .swiper-container', {
	  	navigation: {
	    	nextEl: '.banner .swiper-button-next',
	    	prevEl: '.banner .swiper-button-prev',
	  	},
	  	autoplay:true,	
	});	    
	//人気商品
	var swiper1 = new Swiper('.part1 .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 60,
		navigation: {
		    nextEl: '.part1 .swiper-button-next',
		    prevEl: '.part1 .swiper-button-prev',
		},
		autoplay:true,	      
	});
  },
  methods:{
  	//用户信息下拉
  	showUserinfo:function(){
  		this.isShowUserinfo = !this.isShowUserinfo;
  		if(this.isShowUserinfo){
  			document.addEventListener('click', this.hidePanel, false); 
  		}else{
  			document.removeEventListener('click', this.hidePanel, false);
  		}
  	},
  	//语言语言下拉
  	showLanguage:function(){
  		this.isShowLanguage = !this.isShowLanguage;
  		if(this.isShowLanguage){
  			document.addEventListener('click', this.hidePanel, false); 
  		}else{
  			document.removeEventListener('click', this.hidePanel, false);
  		}
  	},
  	handleHide:function() {
  		this.isShowUserinfo = false;
      this.isShowLanguage = false; 
      this.isShowOrderSp = false;
      document.removeEventListener('click', this.hidePanel, false);
    },
    hidePanel:function(e) {
    	if(this.isShowUserinfo){
    		if (!document.getElementById("js-userinfo-select1").contains(e.target)&&!document.getElementById("js-userinfo-select2").contains(e.target)) {
	        this.handleHide();
	      }
    	}
    	if(this.isShowLanguage){   
	      if (!document.getElementById("header-language-id").contains(e.target)) {
	        this.handleHide();
	      }
      }
    	if(this.isShowOrderSp){   
	      if (!document.getElementById("part2-title-id").contains(e.target)) {
	        this.handleHide();
	      }
      }
    },
  	//选择语言种类
  	selectLanguage:function(type){ 
  		this.languageType = type;
  		this.handleHide();
  	},
  	//切换商品标题
  	tabTitleSp:function(index){
  		this.curSp = index;
  	},
  	//商品排序下拉
  	showOrderSp:function(){
  		this.isShowOrderSp = !this.isShowOrderSp;
  		if(this.isShowOrderSp){
  			document.addEventListener('click', this.hidePanel, false); 
  		}else{
  			document.removeEventListener('click', this.hidePanel, false);
  		}
  	},
  	//选择商品排序
  	selectOrderSp:function(txt){ 
  		this.orderSpText = txt;
  		this.handleHide();
  	},
  },
})