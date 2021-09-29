new Vue({
  el: '#personal',
  data:{
  	isShowLanguage: false, //语言选择
  	languageType: 1, //语言种类
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
  },
})