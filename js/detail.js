new Vue({
  el: '#detail',
  data:{
  	isShowLanguage: false, //语言选择
  	languageType: 1, //语言种类
  	isDz: false, //商品是否点赞（示例，后续需要改成跟商品数组走）
  	curXq: 1, //显示详情类型
  	price: null, //modal价格
  },
  mounted:function(){    	 
  },
  methods:{
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
      this.isShowLanguage = false;       
      document.removeEventListener('click', this.hidePanel, false);
    },
    hidePanel:function(e) {
    	if(this.isShowLanguage){   
	      if (!document.getElementById("header-language-id").contains(e.target)) {
	        this.handleHide();
	      }
      }    	
    },
  	//选择语言种类
  	selectLanguage:function(type){ 
  		this.languageType = type;
  		this.handleHide();
  	},
  	//切换详情类型
  	tabTypeXq:function(index){
  		this.curXq = index;
  		$("#intro-xx-id").getNiceScroll().hide(); 
  		$("#intro-ls-id").getNiceScroll().hide();  
  		if(index==2){
  			$("#intro-xx-id").getNiceScroll().show();
	  		$('#intro-xx-id').niceScroll({
	        cursorcolor: "#ccc",//#CC0071 光标颜色
	        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
	        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
	        cursorwidth: "8px", //像素光标的宽度
	        cursorborder: "0", // 	游标边框css定义
	        cursorborderradius: "4px",//以像素为光标边界半径
	        autohidemode: false //是否隐藏滚动条
	    	});
  		}
  		if(index==3){
  			$("#intro-ls-id").getNiceScroll().show();
	  		$('#intro-ls-id').niceScroll({
	        cursorcolor: "#ccc",//#CC0071 光标颜色
	        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
	        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
	        cursorwidth: "8px", //像素光标的宽度
	        cursorborder: "0", // 	游标边框css定义
	        cursorborderradius: "4px",//以像素为光标边界半径
	        autohidemode: false //是否隐藏滚动条
	    	});
  		}
  	},
  	
  	//【modal】确认购入
  	grConfim:function(){
  		$('#grModal').modal('hide');
  		$('#grwcModal').modal('show');
  	},
  	//【modal】银行卡
  	gryhkConfim:function(){
  		$('#gryhkModal').modal('hide');
  	},
  	//【modal】完了
  	grwcConfim:function(){
  		$('#grwcModal').modal('hide');
  	},
  },
})