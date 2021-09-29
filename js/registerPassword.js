new Vue({
  el: '#registerPassword',
  data: {
    isShowLanguage: false, //语言选择
    languageType: 1, //语言种类
    passWord: "", //密码
    passWordObj:{
    	isFocus: false,
    	isError: false,
    	isClear: false,
    	isZy: true,
    },
    passwordSure: "", //确认密码
    pswdSureObj:{
    	isFocus: false,
    	isError: false,
    	isClear: false,
    	isZy: true,
    },
  },
  mounted: function () {
  },
  methods: {
    //语言语言下拉
    showLanguage: function () {
      this.isShowLanguage = !this.isShowLanguage;
      if (this.isShowLanguage) {
        document.addEventListener('click', this.hidePanel, false);
      } else {
        document.removeEventListener('click', this.hidePanel, false);
      }
    },
    handleHide: function () {
      this.isShowLanguage = false;
      this.isShowOrderSp = false;
      document.removeEventListener('click', this.hidePanel, false);
    },
    hidePanel: function (e) {
      if (this.isShowLanguage) {
        if (!document.getElementById("header-language-id").contains(e.target)) {
          this.handleHide();
        }
      }
      if (this.isShowOrderSp) {
        if (!document.getElementById("part2-title-id").contains(e.target)) {
          this.handleHide();
        }
      }
    },
    //选择语言种类
    selectLanguage: function (type) {
      this.languageType = type;
      this.handleHide();
    },    
    //输入框样式
    handleInputClass: function (value,obj) {
      return {
      	'register-input-focus': obj.isFocus,
      	'register-input-over': value && !obj.isFocus,
      	'register-input-error': obj.isError
      }
    },  
    //密码
    focusPassWord: function () {
    	console.log('focus');
      this.passWordObj.isFocus = true;
      this.passWordObj.isClear = true;
    },  
    blurPassWord: function () {
    	console.log('blur');
    	var _this = this;
      this.passWordObj.isFocus = false;
      setTimeout(function(){
      	_this.passWordObj.isClear = false;
      },200)
    },     
    clearPassWord: function () {
    	console.log('clear');
      this.passWord = "";
    }, 
    showPassWord: function () {
      this.passWordObj.isZy = !this.passWordObj.isZy;
    },
    //确认密码
    focusPswdsure: function () {
    	console.log('focus');
      this.pswdSureObj.isFocus = true;
      this.pswdSureObj.isClear = true;
    },  
    blurPswdsure: function () {
    	console.log('blur');
    	var _this = this;
      this.pswdSureObj.isFocus = false;
      setTimeout(function(){
      	_this.pswdSureObj.isClear = false;
      },200)
    },     
    clearPswdsure: function () {
    	console.log('clear');
      this.passwordSure = "";
    }, 
    showPswdSure: function () {
      this.pswdSureObj.isZy = !this.pswdSureObj.isZy;
    },
  },
})