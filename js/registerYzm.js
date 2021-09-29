new Vue({
  el: '#registerYzm',
  data: {
    isShowLanguage: false, //语言选择
    languageType: 1, //语言种类
    userName: "", //用户名
    userNameObj:{
    	isFocus: false,
    	isError: false,
    	isClear: false,
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
    //用户名
    focusUserName: function () {
    	console.log('focus');
      this.userNameObj.isFocus = true;
      this.userNameObj.isClear = true;
    },  
    blurUserName: function () {
    	console.log('blur');
    	var _this = this;
      this.userNameObj.isFocus = false;
      setTimeout(function(){
      	_this.userNameObj.isClear = false;
      },200)
    },     
    clearUserName: function () {
    	console.log('clear');
      this.userName = "";
    },  
  },
})