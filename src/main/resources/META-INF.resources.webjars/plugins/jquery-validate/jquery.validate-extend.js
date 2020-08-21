$(function(){
    // 判断整数value是否等于0 
    jQuery.validator.addMethod("isIntEqZero", function(value, element) { 
        value=parseInt(value);      
        return this.optional(element) || value==0;       
    }, "整数必须为0"); 

    // 判断整数value是否大于0
    jQuery.validator.addMethod("isIntGtZero", function(value, element) { 
        value=parseInt(value);      
        return this.optional(element) || value>0;       
    }, "整数必须大于0"); 

    // 判断整数value是否大于或等于0
    jQuery.validator.addMethod("isIntGteZero", function(value, element) { 
        value=parseInt(value);      
        return this.optional(element) || value>=0;       
    }, "整数必须大于或等于0");   

    // 判断整数value是否不等于0 
    jQuery.validator.addMethod("isIntNEqZero", function(value, element) { 
        value=parseInt(value);      
        return this.optional(element) || value!=0;       
    }, "整数必须不等于0");  

    // 判断整数value是否小于0 
    jQuery.validator.addMethod("isIntLtZero", function(value, element) { 
        value=parseInt(value);      
        return this.optional(element) || value<0;       
    }, "整数必须小于0");  

    // 判断整数value是否小于或等于0 
    jQuery.validator.addMethod("isIntLteZero", function(value, element) { 
        value=parseInt(value);      
        return this.optional(element) || value<=0;       
    }, "整数必须小于或等于0");  

    // 判断浮点数value是否等于0 
    jQuery.validator.addMethod("isFloatEqZero", function(value, element) { 
        value=parseFloat(value);      
        return this.optional(element) || value==0;       
    }, "浮点数必须为0"); 

    // 判断浮点数value是否大于0
    jQuery.validator.addMethod("isFloatGtZero", function(value, element) { 
        value=parseFloat(value);      
        return this.optional(element) || value>0;       
    }, "浮点数必须大于0"); 

    // 判断浮点数value是否大于或等于0
    jQuery.validator.addMethod("isFloatGteZero", function(value, element) { 
        value=parseFloat(value);      
        return this.optional(element) || value>=0;       
    }, "浮点数必须大于或等于0");   

    // 判断浮点数value是否不等于0 
    jQuery.validator.addMethod("isFloatNEqZero", function(value, element) { 
        value=parseFloat(value);      
        return this.optional(element) || value!=0;       
    }, "浮点数必须不等于0");  

    // 判断浮点数value是否不等于0 
    jQuery.validator.addMethod("isValidImg", function(value, element) { 
        if(this.optional(element)){
            return true;
        }

        var result ="";
        var arr = new Array();
        arr = value.split(".");
        if(arr.length > 1){
            result = arr[1];
        }

        var image=new Array();
        image[0]="jpg";
        image[1]="jpeg";
        image[2]="bmp";
        image[3]="gif";
        image[4]="png";
        for(var ele in image){
            temp=image[ele];
            if(temp == result.toLowerCase()){
                return true;
            }
        }

        return false;   
    }, "请上传 [jpg, jpeg, bmp, gif] 格式的图片");  

    // 判断浮点数value是否小于0 
    jQuery.validator.addMethod("isFloatLtZero", function(value, element) { 
        value=parseFloat(value);      
        return this.optional(element) || value<0;       
    }, "浮点数必须小于0");  

    // 判断浮点数value是否小于或等于0 
    jQuery.validator.addMethod("isFloatLteZero", function(value, element) { 
        value=parseFloat(value);      
        return this.optional(element) || value<=0;       
    }, "浮点数必须小于或等于0");  

    // 判断浮点型  
    jQuery.validator.addMethod("isFloat", function(value, element) {       
        return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, "只能包含数字、小数点等字符"); 
    
    // 判断正整数
    jQuery.validator.addMethod("isZzs", function(value, element) {       
        return this.optional(element) ||  /^[1-9]\d*$/.test(value);       
    }, "只能是正整数"); 
   

    // 匹配integer
    jQuery.validator.addMethod("isInteger", function(value, element) {       
        return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value)>=0);       
    }, "匹配integer");  

    // 判断数值类型，包括整数和浮点数
    jQuery.validator.addMethod("isNumber", function(value, element) {       
        return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, "匹配数值类型，包括整数和浮点数");  

    // 只能输入[0-9]数字
    jQuery.validator.addMethod("isDigits", function(value, element) {       
        return this.optional(element) || /^\d+$/.test(value);       
    }, "只能输入0-9数字");  

    // 判断中文字符 
    jQuery.validator.addMethod("isChinese", function(value, element) {       
        return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, "只能包含中文字符。");   

    // 判断是否中文姓名
    jQuery.validator.addMethod("isChineseName", function(value, element) {       
        return this.optional(element) || (/^[\u0391-\uFFE5]+$/.test(value) && (value.length > 1 && value.length < 5));       
    }, "请输入正确的姓名");   

    // 判断英文字符 
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
        return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, "只能包含英文字符。");   

    // 手机号码验证    
    jQuery.validator.addMethod("isMobile", function(value, element) {    
        var length = value.length;    
        return this.optional(element) || (length == 11 && /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/.test(value));    
    }, "请正确填写您的手机号码。");

    // 电话号码验证    
    jQuery.validator.addMethod("isPhone", function(value, element) {    
        var tel = /^(\d{3,4}-?)?\d{7,9}$/g;    
        return this.optional(element) || (tel.test(value));    
    }, "请正确填写您的电话号码。");

    // 联系电话(手机/电话皆可)验证   
    jQuery.validator.addMethod("isTel", function(value,element) {   
        var length = value.length;   
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;   
        var tel = /^(\d{3,4}-?)?\d{7,9}$/g;       
        return this.optional(element) || tel.test(value) || (length==11 && mobile.test(value));   
    }, "请正确填写您的联系方式"); 

    // 匹配qq      
    jQuery.validator.addMethod("isQq", function(value, element) {       
        return this.optional(element) || /^[1-9]\d{4,12}$/;       
    }, "匹配QQ");   

    // 邮政编码验证    
    jQuery.validator.addMethod("isZipCode", function(value, element) {    
        var zip = /^[0-9]{6}$/;    
        return this.optional(element) || (zip.test(value));    
    }, "请正确填写您的邮政编码。");  

    // 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。      
    jQuery.validator.addMethod("isPwdvaidate", function(value, element) {       
        return this.optional(element) || /^[a-zA-Z0-9_]{6,12}$/.test(value);       
    }, "密码长度在6-12之间，必须包含字母和数字只能包含字符、数字和下划线。");  


    //必须由数字与字母组合,至少6-12位的字符串
    jQuery.validator.addMethod("isPwd", function(value, element) { 
        var v=$.trim(value);  
        if(v.length<6||v.length>17){  
            return false;  
        }  
        //全数字
        if(/^\d+$/.test(v))  
        {  
            return false;  
        }  
        
        //不包含数字
        if(!(/^(?=.*\d.*\b)/.test(v)))  
        {  
            return false;  
        } 
        
        /*//"全字母
        if(/^[a-z]+$/i.test(v))  
        {  
            return false;     
        }  
        //只能含有数字有字母 
        if(!/^[A-Za-z0-9]+$/.test(v))  
        {  
            return false;  
        }  */
        
        return true; 
        
    }, "密码必须包含数字和字符，长度为6至16位");  


    // 身份证号码验证
    jQuery.validator.addMethod("isIdCardNo", function(value, element) { 
        //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
        return this.optional(element) || isIdCardNo(value);    
    }, "请输入正确的身份证号码。"); 

    // IP地址验证   
    jQuery.validator.addMethod("ip", function(value, element) {    
        return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
    }, "请填写正确的IP地址。");

    // 字符验证，只能包含中文、英文、数字、下划线等字符。    
    jQuery.validator.addMethod("stringCheck", function(value, element) {       
        return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);       
    }, "只能包含中文、英文、数字、下划线等字符");

    // 字符验证，只能包含英文和数字。    
    jQuery.validator.addMethod("isEnglishOrNum", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    }, "只能包含英文和数字！");

    // 匹配english  
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
        return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, "匹配english");   

    // 匹配汉字  
    jQuery.validator.addMethod("isChinese", function(value, element) {       
        return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);       
    }, "匹配汉字");   

    // 匹配中文(包括汉字和字符) 
    jQuery.validator.addMethod("isChineseChar", function(value, element) {       
        return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, "匹配中文(包括汉字和字符) ");

    // 判断是否为合法字符(a-zA-Z0-9-_)
    jQuery.validator.addMethod("isRightfulString", function(value, element) {
        return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);
    }, "判断是否为合法字符(a-zA-Z0-9-_)");

    // 判断是否为合法字符(a-zA-Z0-9)
    jQuery.validator.addMethod("isEnglishAndDigitals", function(value, element) {
        return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    }, "判断是否为合法字符(a-zA-Z0-9)");

    // 判断是否包含中英文特殊字符，除英文"-_"字符外
    jQuery.validator.addMethod("isContainsSpecialChar", function(value, element) {  
        var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
        return this.optional(element) || !reg.test(value);       
    }, "含有中英文特殊字符"); 
    
    // 判断是否为合法字符(a-zA-Z0-9-_)
    jQuery.validator.addMethod("bankCardNum", function(bankno, element) {       
        var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）
         
        var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=new Array();  //奇数位*2的积 <9
        var arrJiShu2=new Array(); //奇数位*2的积 >9
         
        var arrOuShu=new Array();  //偶数位数组
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9)
                arrJiShu.push(parseInt(newArr[j])*2);
                else
                arrJiShu2.push(parseInt(newArr[j])*2);
            }
            else //偶数位
            arrOuShu.push(newArr[j]);
        }
         
        var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }       
         
        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }
         
        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }
         
        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }     
        //计算总和
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);
         
        //计算Luhm值
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;       
        var luhm= 10-k;
         
        if(lastNum==luhm){
            return true;
        }
        else{
            return false;
        }       
    }, "请正确填写您的银行卡号");  


    //身份证号码的验证规则
    function isIdCardNo(num){
        var len = num.length;
        var re; 
        if (len == 15) 
            re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
        else if (len == 18) 
            re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
        else {
            //alert("输入的数字位数不对。"); 
            return false;
        } 
        var a = num.match(re); 
        if (a != null){ 
            if (len==15){ 
                var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
                var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
            } else{ 
                var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
                var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
            } 
            if (!B) {
                //alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); 
                return false;
            } 
        } 
        if(!re.test(num)){
            //alert("身份证最后一位只能是数字和字母。");
            return false;    
        }
        return true; 
    }

    jQuery.validator.addMethod("phoneExists", function(value, element) {    //用jquery ajax的方法验证电话是不是已存在  
        var flag = 1;  
        $.ajax({  
            type:"POST",  
            url:'register',  
            async:false,                                             //同步方法，如果用异步的话，flag永远为1  
            data:{'mobileNum': value},  
            success: function(msg){  
                if(msg == 'true'){  
                    flag = 1;  
                }  
            }  
        });  

        if(flag == 0){  
            return false;  
        }else{  
            return true;  
        }  

    }, "手机号已经被注册，请重新选择");  




    //验证 手机是否被注册过  在不为 ture 时 存在
    jQuery.validator.addMethod("validatemobileNum", function(value, element) { 
        var flag = 1;
        $.ajax({
            url : 'validatePhoneNum',
            data : {'phoneNum':value},
            type : "POST",
            dataType : "json",
            async:false, 
            success : function(result) {
                if(result != 'true'){
                    flag = 0;
                }
            }
        }); 

        if(flag == 0){
            if ($("#btn-getvericode").val() == "获取验证码") {
                $("#btn-getvericode").removeAttr("disabled").removeClass("btn-shop-gray").addClass("btn-shop-red");
                $("#btn-getvericode").attr("style", "cursor:pointer");
            }
            return true;
        }else{
            $("#btn-getvericode").attr('disabled','disabled').removeClass('btn-shop-red').addClass('btn-shop-gray');
            $("#btn-getvericode").attr("style", "cursor:default");
            return false;
        }   

    }, "该手机号已经被注册，请重新选择");  




    // 验证昵称是否被注册过了   在不为 ture 时 存在
    jQuery.validator.addMethod("validateNickName", function(value, element) { 
        var flag = 1;  
        $.ajax({
            url : 'validateNickName',
            data : {'nickName':value},
            type : "POST",
            dataType : "json",
            async:false, 
            success : function(result) {
                if(result != 'true'){
                    flag = 0;
                }
            }
        }); 

        if(flag == 0){  
            return true;  
        }else{  
            return false;  
        }  

    }, "该昵称已经被注册，请重新选择");  
    
    
    




    // 验证随机码是否正确
    jQuery.validator.addMethod("validateVerifyCode", function(value, element) { 
        var flag = 1;  
        $.ajax({
            url : 'validateVerifyCode',
            data : {'verifyCode':value},
            type : "POST",
            dataType : "json",
            async:false, 
            success : function(result) {
                if(result != 'true'){
                    flag = 0;
                }
            }
        }); 

        if(flag == 0){  
            return true;  
        }else{  
            return false;  
        }  

    }, "验证码输入错误, 请重新输入"); 


    
    // 验证手机验证码是否正确
    jQuery.validator.addMethod("verificationCodeMobileNum", function(value, element) { 
        var flag = 1;
        var mobileNum =$("#mobileNum").val();
        $.ajax({
            url : 'verificationCodeMobileNum',
            data : {'verifyCode':value, 'mobileNum':mobileNum},
            type : "POST",
            dataType : "json",
            async:false, 
            success : function(result) {
                if(result != 'true'){
                    flag = 0;
                }
            }
        }); 

        if(flag == 0){  
            return false;  
        }else{  
            return true;  
        }  

    }, "验证码输入错误,请重新输入"); 





    /*// isValidCardNum 身份证验证 生日和性别
    jQuery.validator.addMethod("isValidCardNum1", function(val, element) {
        //生日
        var birthdayStrvaule = $("#birthdayStrid").val();
        //性别
        var gendervaule = $("#genderid").val();

        //身份证 获取性别
        var sex = "";
        //身份证获取 生日
        var birthdayValue="";
        if (15 == val.length) { //15位身份证号码
            birthdayValue = val.charAt(6) + val.charAt(7);
            if (parseInt(birthdayValue) < 10) {
                birthdayValue = '20' + birthdayValue;
            }
            else {
                birthdayValue = '19' + birthdayValue;
            }
            birthdayValue = birthdayValue + '-' + val.charAt(8) + val.charAt(9) + '-' + val.charAt(10) + val.charAt(11);
            if (parseInt(val.charAt(14) / 2) * 2 != val.charAt(14))
            {sex = '1';}
            else
            { sex = '0';}
            if(sex != gendervaule){
                return false;
            }
            if(birthdayStrvaule != birthdayValue)
            { return false;}
        }
        if (18 == val.length) { //18位身份证号码
            birthdayValue = val.charAt(6) + val.charAt(7) + val.charAt(8) + val.charAt(9) + '-' + val.charAt(10) + val.charAt(11)

            + '-' + val.charAt(12) + val.charAt(13);
            if (parseInt(val.charAt(16) / 2) * 2 != val.charAt(16))
            { sex = '1';}
            else
            { sex = '0';}
            if(sex != gendervaule){
                return false;
            }
            if(birthdayStrvaule != birthdayValue)
            {return false;}
        }
        return true;   
    }, "请重新确定身份证信息");  */



    // isValidCardNum 身份证验证
    jQuery.validator.addMethod("isValidCardNum", function(val, element) {
        //生日
        var birthdayStrvaule = $("#birthdayStr").val();
        //性别
        var gendervaule = $("#gender").val();
        //籍贯
        //var addrProvincevaule = $("#addrProvincevaule").val();

        //去空字符串
        function trim(s) { return s.replace(/^\s+|\s+$/g, ""); };

        var idNumber = val;

        if (trim(idNumber).length > 0) {
            
            //验证身份证格式
            if (!checkIdcard(idNumber)) {
                //alert("输入的身份证号格式错误");
                 return false;;
            }
            else {
                //得到性别
                var gendertemp =  getGenderByCardNum(trim(idNumber));
                //alert(gendertemp);
                if(gendertemp != gendervaule)
                { return false;}
                
                //获取生日
                var birthdaytemp = getBirthdatByIdNo(idNumber);
                //alert(birthdaytemp);
                if(birthdaytemp != birthdayStrvaule)
                { return false;}

                //所在省份
                var provinceNametemp = getProvinceNameByIdNo(idNumber);
                //alert(provinceNametemp);
                //if(provinceNametemp != "江苏")
                //{ return false;}
            }
        }

        //验证身份证号并获取性别
        function getGenderByCardNum(val){
            var sex = "";
            if (15 == val.length) { //15位身份证号码
                if (parseInt(val.charAt(14) / 2) * 2 != val.charAt(14))
                {sex = '1';}
                else
                { sex = '0';}
            }
            if (18 == val.length) { //18位身份证号码
                if (parseInt(val.charAt(16) / 2) * 2 != val.charAt(16))
                { sex = '1';}
                else
                { sex = '0';}
            }
            return sex;
        }


        //验证身份证号并获取籍贯
        function getProvinceNameByIdNo(idcard) {
            var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
                    21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
                    33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北",
                    43: "湖南", 44: "广东", 45: "广西",
                    46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西",
                    62: "甘肃", 63: "青海", 64: "宁夏",
                    65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
            }

            var provinceName = "";
            var provinceNo = idcard.substr(0, 2);
            if (area[parseInt(provinceNo)] != null) {
                provinceName = area[parseInt(provinceNo)];
            }
            return provinceName;
        }

        //获取出生日期
        function getBirthdatByIdNo(iIdNo) {
            var tmpStr = "";
            var strReturn = "";

            if (iIdNo.length == 15) {
                tmpStr = iIdNo.substring(6, 12);
                tmpStr = "19" + tmpStr;
                tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
                return tmpStr;
            }
            else {
                tmpStr = iIdNo.substring(6, 14);
                tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6)
                return tmpStr;
            }
        }
        function checkIdcard(num) {
            num = num.toUpperCase();
            //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
            if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
                //alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。'); 
                return false;
            }
            //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
            //下面分别分析出生日期和校验位 
            var len, re;
            len = num.length;
            if (len == 15) {
                re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                var arrSplit = num.match(re);

                //检查生日日期是否正确 
                var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
                var bGoodDay;
                bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                if (!bGoodDay) {
                    //alert('输入的身份证号里出生日期不对！');   
                    return false;
                }
                else {
                    //将15位身份证转成18位 
                    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                    var nTemp = 0, i;
                    num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
                    for (i = 0; i < 17; i++) {
                        nTemp += num.substr(i, 1) * arrInt[i];
                    }
                    num += arrCh[nTemp % 11];
                    return true;
                }
            }
            if (len == 18) {
                re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                arrSplit = num.match(re);

                //检查生日日期是否正确 
                dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
                 
                // var bGoodDay;
                bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                 
                if (!bGoodDay) {
                    //alert(dtmBirth.getYear()); 
                    //alert(arrSplit[2]); 
                    //alert('输入的身份证号里出生日期不对！'); 
                    return false;
                }
                else {
                    //检验18位身份证的校验码是否正确。 
                    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
                    var valnum;
                    arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                    arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                    nTemp = 0, i;
                    for (i = 0; i < 17; i++) {
                        nTemp += num.substr(i, 1) * arrInt[i];
                    }
                    valnum = arrCh[nTemp % 11];
                    if (valnum != num.substr(17, 1)) {
                        //alert('18位身份证的校验码不正确！应该为：' + valnum); 
                        return false;
                    }
                    return true;
                }
            }
            return false;
        }  
        
        
        return true;   
    }, "请重新确定身份证信息");  
});