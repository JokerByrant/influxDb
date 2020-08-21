
/**
 * 定义一个系统命名空间 防止js对象全局污染
 */
var SystemNameSpace = window.SystemNameSpace || {};

/**
 * common 在系统命名空间中 定义一个 common 模块
 */
SystemNameSpace.common = new function() {
	var commonSelf = this;

	/**
	 * 返回一条数据信息
	 * infoUrl: 查询数据url
	 */
	commonSelf.getInfo = function(infoUrl) {
		var returnData ;
		   $.ajax({
		   	    url:infoUrl,
		   	    async:false,
		   	    type:'get',
		   	    dataType:'json',
		   	    success:function(data){
		   	    	if(data.success){
		   	    		returnData = data.data; 
		   	    	}else{
		   	    		layer.msg(data.msg);
		   	    	}
		   	    }
		   	});
		   return returnData;
	};
	
	
	
	/**
	 * 在标准浏览器下，如firefox或者chrome，oninput事件只有输入或者粘贴剪裁的时候才会响应，
	 * 而javascript动态设置控件的值时不响应oninput事件，
	 * 而ie浏览器下的onpropertychange事件则会响应javascript动态设置控件内容时。
	 * domId input元素ID
	 * callback 回调函数
	 */
	commonSelf.bindInputTextChange = function(domId,callback) {
		var element = document.getElementById(domId);
	    if (element.__defineSetter__) {
	    	element.__defineSetter__('value', function (v) {
	    		//注意这里，要使用setAttribute来设置value值，不能this.value=v，要不会死循环。如果注释掉这句，无法修改input的value值
	    		this.setAttribute('value', v);
	            callback.call(this);
	        });
	    }else {
	    	element.onpropertychange = callback;
	    }
	};
	
	    
    // 渲染datepicker时间选择器插件 
	commonSelf.datepicker = function(domId) {
//			laydate.render({
//			  elem: '#'+domId //指定元素
//			});
		$("#"+domId).datetimepicker({
		   	 language: 'zh-CN',
		        format: 'yyyy-mm-dd',//显示格式
		        todayBtn: 1,
		        autoclose: 1,
		        todayHighlight: 1,
		        minView: "month",
		        clearBtn: true
		    });
	};
	
	// 渲染datepicker时间选择器插件  且 初始化当前日期
	commonSelf.datepickerInitNowDate = function(domId) {
			var now = moment().format("YYYY-MM-DD");
			laydate.render({
			  elem: '#'+domId, //指定元素
			  value: now
			});
	};
	
	// 渲染datepicker时间选择器插件 
	commonSelf.datepickerDateTime = function(domId) {
			/*laydate.render({
			  elem: '#'+domId,
			  type: 'datetime'
			});*/
			$("#"+domId).datetimepicker({
			   	 language: 'zh-CN',
			        format: 'yyyy-mm-dd HH:mm:ss',//显示格式
			        todayBtn: 1,
			        autoclose: 1,
			        todayHighlight: 1,
			        minView: "day",
			        clearBtn: true
			    });
	};
	
	// 渲染datepicker时间选择器插件 并且初始化当前时间
	commonSelf.datepickerDateTimeInitNowDateTime = function(domId) {
			var now = moment().format("YYYY-MM-DD HH:mm:ss");
			laydate.render({
			  elem: '#'+domId,
			  type: 'datetime',
			  value: now
			});
			$("#"+domId).datetimepicker({
			   	 language: 'zh-CN',
			        format: 'HH:mm:ss',//显示格式
			        todayBtn: 1,
			        autoclose: 1,
			        todayHighlight: 1,
			        minView: "hour",
			        clearBtn: true
			    });
	};
	
	// 生成32位UUID
	commonSelf.uuid = function() {

		var d = new Date().getTime();
		var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;

	};
	
		
	/**
	 */
	commonSelf.layerOpen = function(title,content) {
	       layer.open({
			      type: 2,
			      title: title,
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: ['60%', '90%'],
			      content: content
			    });
	};
	
	/**
	 * 弹出全屏
	 */
	commonSelf.layerOpenFull = function(title,content) {
	       var index = layer.open({
			      type: 2,
			      title: title,
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: ['60%', '90%'],
			      content: content
			    });
	       layer.full(index);
	};
	
	
	commonSelf.layerOpenCustome = function(title,content,width,height) {
	       layer.open({
			      type: 2,
			      title: title,
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: [width, height],
			      content: content
			    });
	};
	
	
	commonSelf.layerOpenCustomeParent = function(title,content,width,height) {
	       parent.layer.open({
			      type: 2,
			      title: title,
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: [width, height],
			      content: content
			    });
	};
	
	
	commonSelf.layerOpenVideoCustome = function(title,content,width,height,videoUrl){
		localStorage.cookie_video_url =  videoUrl ;
		layer.open({
			      type: 2,
			      title: title,
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: [width, height],
			      content: content
		});
	};
	
	
	commonSelf.layerOpenAudioCustome = function(title,content,width,height,audioUrl){
		localStorage.cookie_audio_url =  audioUrl ;
		layer.open({
			      type: 2,
			      title: title,
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: false, //开启最大化最小化按钮
			      area: [width, height],
			      content: content
		});
	};
	
	
	
	/**
	 * 获取被选择的表格行数据
	 * 返回有个数组对象
	 */
	commonSelf.getSelectRowData = function(tableid) {
		var checkbox = $("#"+tableid).find("tbody").find('input[type="checkbox"]:checked');
		var data = new Array();  ;
		if(checkbox.length>0){
			if(checkbox.length>1){
				layer.msg("您只能选择一条数据进行操作。");
				return ;
			}
			var tds = $(checkbox).closest("tr").find("td");
			$.each(tds,function(i,e){
				data[i] = $(e).text() ;
			});
		}
		return data ;
	};
	
	
	
	/**
	 * 获取表格选择的复选框数据ID,返回单个id
	 */
	commonSelf.getCheckboxId = function(tableid) {
		var checkbox = $("#"+tableid).find("tbody").find('input[type="checkbox"]:checked');
		var dataid  ;
		if(checkbox.length>0){
			if(checkbox.length>1){
				layer.msg("您只能选择一条数据进行操作。");
				return ;
			}
			$.each(checkbox,function(i,e){
				dataid = $(e).attr("data_id") ;
			});
		}else{
			layer.msg("请选择您要操作的数据。");
			return ;
		}
		return dataid ;
	};
	
	
	/**
	 * 获取表格选择的复选框数据ID拼接字符串,如：1,2,3
	 */
	commonSelf.getCheckboxIdStr = function(tableid) {
		var checkbox = $("#"+tableid).find("tbody").find('input[type="checkbox"]:checked');
		var dataidStr = "" ;
		if(checkbox.length>0){
			$.each(checkbox,function(i,e){
				dataidStr += $(e).attr("data_id") + "," ;
			});
			dataidStr = dataidStr.substring(0, dataidStr.length - 1);  
		}else{
			layer.msg("请选择您要操作的数据。");
			return ;
		}
		return dataidStr ;
	};
	
	
	/**
	 * websocket 聊天图片上传
	 */
	commonSelf.singleWsImgfileUpload = function(imgId,imgInputId,socket,userUid,userLogo,toUser) {
		
    	UploadConfig = {
    			imgId:imgId,
    			type:"wsImg",
    			fileNumLimit:1,
    			extensions:"jpg,jpeg,bmp,gif,png",
    			imgInputId:imgInputId,
    			socket:socket,
    			userUid:userUid,
    			userLogo:userLogo,
    			toUser:toUser
    	};
    	
		layer.open({
		      type: 2,
		      title: '图片上传',
		      shadeClose: false,
		      shade: 0.3,
		      maxmin: true, //开启最大化最小化按钮
		      area: ['60%', '65%'],
		      content: '/fileupload/view'
		});
		
	};




	/**
	 * 封装单图片上传,已使用
	 */
	commonSelf.singleImgfileUpload = function(clickId,imgInputId,imgId,folder,fileSuffix) {
		$("#"+clickId).click(function(){
			UploadConfig = {
				type:"img",
				fileNumLimit:1,
				extensions:"jpg,jpeg,bmp,gif,png",
				clickId:clickId,
				imgId:imgId,
				imgInputId:imgInputId,
				folder:folder,
				fileSuffix:fileSuffix
			};
			layer.open({
				type: 2,
				title: '图片上传',
				shadeClose: false,
				shade: 0.3,
				maxmin: true, //开启最大化最小化按钮
				area: ['60%', '65%'],
				content: '/fileupload/view'
			});
		});
	};

	/**
	 * 封装单图/视频上传,已使用
	 */
	commonSelf.singleImgVideoUpload = function(clickId,inputId,imgElement,videoElement,folder,fileSuffix) {
		$("#"+clickId).click(function(){
			UploadConfig = {
				type:"imgVideo",
				fileNumLimit:1,
				extensions:"jpg,jpeg,bmp,gif,png,mp4",
				imgElement:imgElement, // 图片对应的element
				videoElement:videoElement, // 播放器对应的element
				inputId:inputId, // 输入框
				folder:folder,
				fileSuffix:fileSuffix
			};
			layer.open({
				type: 2,
				title: '图片上传',
				shadeClose: false,
				shade: 0.3,
				maxmin: true, //开启最大化最小化按钮
				area: ['70%', '75%'],
				content: '/fileupload/view'
			});
		});
	};

	/**
	 * 封装单 [指定文件类型] 上传,上传成功返回文件url,已使用
	 */
	commonSelf.singleFileImgVideoUpload = function(clickId,folder,fileSuffix,entensions) {
		$("#"+clickId).click(function(){
			UploadConfig = {
				type:"fileImgVideo",
				fileNumLimit:1,
				extensions: entensions, // 支持的文件类型
				folder:folder, // 文件存放的文件夹
				fileSuffix:fileSuffix  // 文件命名后缀
			};
			layer.open({
				type: 2,
				title: '文件上传',
				shadeClose: false,
				shade: 0.3,
				maxmin: true, //开启最大化最小化按钮
				area: ['70%', '90%'],
				content: '/fileupload/view'
			});
		});
	};
	
	/**
	 * 封装单视频上传
	 */
	commonSelf.singleVideofileUpload = function(objLableId,objHiddenId,folder,fileSuffix) {
		$("#"+objLableId).click(function(){
			UploadConfig = {
	    			type:"video",
	    			fileNumLimit:1,
	    			extensions:"mp4",
	    			objLableId:objLableId,
	    			objHiddenId:objHiddenId,
	    			folder:folder,
	    			fileSuffix:fileSuffix
	    	};
	    	layer.open({
	  		      type: 2,
	  		      title: '视频上传',
	  		      shadeClose: false,
	  		      shade: 0.3,
	  		      maxmin: true, //开启最大化最小化按钮
	  		      area: ['60%', '65%'],
	  		      content: '/fileupload/viewVideo'
	  		});
		});
	};

	/**
	 * 初始化视频
	 * selecter dom选择对象 eg: #player
	 */
	commonSelf.initPlyrVideo = function(selecter) {

		const player = new Plyr(selecter, {

			debug: false,
			enabled: true,
			title: '',
			iconUrl: '/webjars/hplus/js/plugins/plyr-master/dist/plyr.svg',
			keyboard: {
				global: true,
			},
			tooltips: {
				controls: true,
			},
			captions: {
				active: true,
			},

			controls: [
				'play-large',
//		            'restart',
//		            'rewind',
				'play',
//		            'fast-forward',
				'progress',
				'current-time',
				'mute',
				'volume',
				'captions',
				'settings',
				'pip',
				'airplay',
//		            'download',
				'fullscreen',
			],

			i18n: {
				restart: '重新开始',
				rewind: '回退 {seektime}s',
				play: '播放',
				pause: '暂停',
				fastForward: '前进 {seektime}s',
				seek: 'Seek',
				seekLabel: '{currentTime} of {duration}',
				played: 'Played',
				buffered: 'Buffered',
				currentTime: 'Current time',
				duration: 'Duration',
				volume: 'Volume',
				mute: '静音',
				unmute: '取消静音',
				enableCaptions: '开启字幕',
				disableCaptions: '关闭字幕',
				download: '下载',
				enterFullscreen: '全屏',
				exitFullscreen: '退出全屏',
				frameTitle: 'Player for {title}',
				captions: '字幕',
				settings: '设置',
				menuBack: 'Go back to previous menu',
				speed: '速度',
				normal: '正常',
				quality: '画质',
				loop: 'Loop',
				start: 'Start',
				end: 'End',
				all: 'All',
				reset: 'Reset',
				disabled: '关闭',
				enabled: '开启',
				advertisement: 'Ad',
				qualityBadge: {
					2160: '4K',
					1440: 'HD',
					1080: 'HD',
					720: 'HD',
					576: 'SD',
					480: 'SD',
				}
			},
			keys: {
				google: 'AIzaSyDrNwtN3nLH_8rjCmu5Wq3ZCm4MNAVdc0c'
			}

		});

		return player;

	};
	
	
	/**
	 * 封装单音频上传
	 */
	commonSelf.singleAudiofileUpload = function(objLableId,objHiddenId,folder,fileSuffix) {
		$("#"+objLableId).click(function(){
			UploadConfig = {
	    			type:"audio",
	    			fileNumLimit:1,
	    			extensions:"mp3",
	    			objLableId:objLableId,
	    			objHiddenId:objHiddenId,
	    			folder:folder,
	    			fileSuffix:fileSuffix
	    	};
	    	layer.open({
	  		      type: 2,
	  		      title: '音频上传',
	  		      shadeClose: false,
	  		      shade: 0.3,
	  		      maxmin: true, //开启最大化最小化按钮
	  		      area: ['60%', '65%'],
	  		      content: '/fileupload/view'
	  		});
		});
	};
	
	
	
	
	
	/**
	 * 封装单文件上传
	 */
	commonSelf.singlefileUpload = function(fileUpload,fileValue,folder,fileSuffix) {
		$("#"+fileUpload).click(function(){
	    	UploadConfig = {
	    			fileNumLimit:1,
	    			type:"file",
	    			extensions:"wav,mp3,mp4,txt,gif,jpg,jpeg,bmp,png,zip,rar,7z,mov",
	    			fileValue:fileValue,
	    			folder:folder,
	    			fileSuffix:fileSuffix
	    	};
			layer.open({
			      type: 2,
			      title: '文件上传',
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: ['60%', '65%'],
			      content: '/fileupload/view'
			});
		});
	};
	
	/**
	 * 封装单文件上传
	 */
	commonSelf.singlefileUploadTwo = function(fileUpload,fileValue,folder,fileSuffix,extensions) {
		$("#"+fileUpload).click(function(){			
	    	UploadConfig = {
	    			fileNumLimit:1,
	    			type:"file",
	    			extensions:extensions,
	    			fileValue:fileValue,
	    			folder:folder,
	    			fileSuffix:fileSuffix
	    	};
			layer.open({
			      type: 2,
			      title: '文件上传',
			      shadeClose: false,
			      shade: 0.3,
			      maxmin: true, //开启最大化最小化按钮
			      area: ['60%', '65%'],
			      content: '/fileupload/view'
			});
		});
	};	
	/**
	 * 获取表格选择的复选框数据ID,返回id数组 如：[1,2,3]
	 */
	commonSelf.getCheckboxIdArray = function(tableid) {
		var checkbox = $("#"+tableid).find("tbody").find('input[type="checkbox"]:checked');
		var dataid = new Array() ;
		if(checkbox.length>0){
			$.each(checkbox,function(i,e){
				dataid[i] = $(e).attr("data_id") ;
			});
		}else{
			layer.msg("请选择您要操作的数据。");
			return ;
		}
		return dataid ;
	};

	/**
	 * 根据数据字典key和字典值获取显示lable名称
	 */
	commonSelf.getDictItemLableByKeyAndValue =function(dictKey,value){
		var returnData;
		$.ajax({
			url: "/sysDictItem/lable/"+dictKey+"/"+value,
			async:false,
			type:"get",
			dataType:'json',
			success:function(data){
				if(data.data){
					returnData = data.data;
				}else{
					returnData = "数据异常";
				}
			}
		});
		return returnData;
	};

	/**
	 * 根据数据字典key获取所有字典值以及对应的lable名称
	 */
	commonSelf.getDictItemByKey =function(dictKey){
		var returnData;
		$.ajax({
			url: "/sysDictItem/searchDataItem/"+dictKey,
			async:false,
			type:"get",
			dataType:'json',
			success:function(data){
				if(data.data){
					returnData = data.data;
				}else{
					returnData = "数据异常";
				}
			}
		});
		return returnData;
	};
	
	
	
	
	/**
	 * 封装初始化select2下拉框插件： 数据为listdata的情况 
	 * 
	 * targetDomId:dom元素ID
	 * ajaxData：请求数据
	 * ajaxUrl：资源路径
	 * ajaxType：请求类型
	 * isMultiple:是否多选
	 * allowClear: 是否展示清空按钮
	 * tags -> Boolean: 是否支持输入
	 */
	commonSelf.initSelect2ByListData = function(targetDomId,ajaxData,ajaxUrl,ajaxType,lableName,valueName,isMultiple,allowClear,tags) {
	 	   $.ajax({
	   	    url:ajaxUrl,
	   	    async:false,
	   	    type:ajaxType,
	   	    data:ajaxData,
	   	    dataType:'json',
	   	    success:function(data){
	   	    	$("#"+targetDomId).html("");
	   	    	var optionHtml = ' ';
	   	    	if(!isMultiple){
	   	    		optionHtml+= '<option value="">==请选择==</option>';
	   	    	}
	   	    	var	dataList = data.data;
	   	    	if(dataList){
	   	    		for(var i=0;i<dataList.length;i++){
	   	    			var data = dataList[i];
	   	    			var lable = eval('data.'+lableName);
	   	    			var value = eval('data.'+valueName);
	   	    			optionHtml+= '<option value="'+value+'">'+lable+'</option>';
	   	    		}
	   	    		$("#"+targetDomId).append(optionHtml);
	   	    		
	   	    		$("#"+targetDomId).select2({
	   	    			multiple:isMultiple,
	   	    			width: "100%",
	   	    			placeholder:'==请选择==',
	   	    			allowClear:allowClear == undefined ? true:allowClear,
						tags: tags == undefined ? false:tags
	   	    		});
	   	    	}
	   	    }
	   	   });
		
	};
	
	/**
	 * 封装初始化select2下拉框插件： 数据为html模板的情况 
	 * 
	 * targetDomId:dom元素ID
	 * ajaxData：请求数据
	 * ajaxUrl：资源路径
	 * ajaxType：请求类型
	 * isMultiple:是否多选
	 */
	commonSelf.initSelect2ByTemplateData = function(targetDomId,ajaxData,ajaxUrl,ajaxType,isMultiple) {
		
	 	   $.ajax({
	   	    url:ajaxUrl,
	   	    async:false,
	   	    type:ajaxType,
	   	    data:ajaxData,
	   	    dataType:'json',
	   	    success:function(data){
	   	    	$("#"+targetDomId).html("");
	   	    	var optionHtml = ' ';
	   	    	optionHtml+= '<option value="">==请选择==</option>';
	   	    	var	dataList = data.data;
	   	    	if(dataList){
	   	    		for(var i=0;i<dataList.length;i++){
	   	    			var data = dataList[i];
	   	    			optionHtml+= '<option value="'+data+'">'+data+'</option>';
	   	    		}
	   	    		$("#"+targetDomId).append(optionHtml);
	   	    		
	   	    		$("#"+targetDomId).select2({
	   	    			multiple:isMultiple,
	   	    			width :"100%",
	   	    			placeholder:'==请选择==',
	   	    			allowClear:true
	   	    		});
	   	    	}
	   	    }
	   	   });
		
		
		
	};
	

	
	/**
	 * 将超出最大字数限制时候加入“...”
	 */
	commonSelf.cutString = function(text,maxlength) {
		if(text && text.length>=maxlength){
			 text = text.substring(0, maxlength) + "...";
		}
		return text ;
	};
	
};	
	

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
// 
Date.prototype.Format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k])
					.substr(("" + o[k]).length)));
	return fmt;
}
$(function(){
	//图片放大效果
	$('.rsdunFancybox').fancybox({
		  // 国际化
		  tpl: {
		    wrap    : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
		    image   : '<img class="fancybox-image" src="{href}" alt="" />',
		    error   : '<p class="fancybox-error">请求的内容未找到。<br/>请稍后再试。</p>',
		    closeBtn: '<a title="关闭" class="fancybox-item fancybox-close" href="javascript:;"></a>',
		    next    : '<a title="下一张" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
		    prev    : '<a title="上一张" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		  }
	});
	$("body").on("mouseenter", ".fileUploadBox", function() {
		$(this).addClass("hover");
    });
	$("body").on("mouseleave", ".fileUploadBox", function() {
		$(this).removeClass("hover");
    });
	//对所有的checkbox、radio的样式进行控制
	var themeColor = $.cookie('themeColor');
    if(themeColor){
    	var colorName = $("#"+themeColor, window.top.document).attr("color");
	    layer.config({
		    extend: 'default/layer-'+colorName+'.css'
	    });
	    //$("input[type='checkbox']").iCheck({checkboxClass:"icheckbox_square-"+colorName,radioClass:"iradio_square-"+colorName});
    }
    $("#skin-0,#skin-1,#skin-3,#skin-4,#skin-5", window.top.document).click(function() {
    	var colorName = $(this).attr("color");
	    layer.config({
		    extend: 'default/layer-'+colorName+'.css'
	    });
	    //$("input[type='checkbox']").iCheck({checkboxClass:"icheckbox_square-"+colorName,radioClass:"iradio_square-"+colorName,});
	    $("link[name='themeLink']").attr("href",'/webjars/hplus/css/style-'+colorName+'.min862f.css?v=4.1.0');
    });
});
//获取查询参数，对表单中查询参数的封装
$.fn.serializeObject = function(){
	 var o = {};
	 var a = this.serializeArray();
	 $.each(a, function() {
	     if (o[this.name] !== undefined) {
		     if (!o[this.name].push) {
		         o[this.name] = [o[this.name]];
		     }
	         o[this.name].push(this.value || '');
		 } else {
		     o[this.name] = this.value || '';
		 }
	 });
	 return o;
};
/**
 * 获取系统当前时间
 * @returns
 */
function p(s) {
    return s < 10 ? '0' + s : s;
}
function getNowTime() {
	var myDate = new Date();
	//获取当前年
	var year = myDate.getFullYear();
	//获取当前月
	var month = myDate.getMonth() + 1;
	//获取当前日
	var date = myDate.getDate();
	var h = myDate.getHours();       //获取当前小时数(0-23)
	var m = myDate.getMinutes();     //获取当前分钟数(0-59)
	var s = myDate.getSeconds();
	return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
}

/**
 * 获取当前日期加/减 n 天后的日期
 * @param count
 * @returns {string}
 */
function getDateStr(count, date) {
	if (date != null && date != undefined) {
		date = new Date(date);
	} else {
		date = new Date();
	}
	date.setDate(date.getDate()+count);//获取count天后的日期
	var y = date.getFullYear();
	var m = date.getMonth()+1;//获取当前月份的日期
	var d = date.getDate();
	return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d);
}

/**
 * 获取两个时间的时间差，返回小时，精确到小数点后一位
 * @param startDate
 * @param endDate
 */
function getTimeDiff(startDate, endDate) {
	// 将时间字符串格式化为所有浏览器均支持的格式
	startDate = startDate.replace(new RegExp(/-/gm), '/');
	endDate = endDate.replace(new RegExp(/-/gm), '/');
	let startTime = new Date(startDate);
	let endTime = new Date(endDate);
	let timeDiff = endTime.getTime() - startTime.getTime(); // 获取相差的毫秒数
	let result = timeDiff==0 ? 0.1 : (timeDiff/(3600*1000)).toFixed(1); // 计算小时数,精确到小数点后一位
	return result == 0 ? 0.1 : result;
}

/**
 * 在给定元素后添加新元素
 * @param newElement
 * @param targerElement
 */
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

/**
 * 传入文件名，检查文件类型，返回 0->图片，1->视频，2->其他
 * @param suffix
 */
function checkFileType(fileName) {
	let fileType = fileName.split('.').slice(-1)[0];
	var imgExtensions = ['jpg','jpeg','bmp','gif','png'];
	var videoExtensions = ['mp4'];
	if (imgExtensions.indexOf(fileType) >= 0) { // 图片
		return 0;
	} else if (videoExtensions.indexOf(fileType) >= 0) { // 视频
		return 1;
	} else {
		return 2;
	}
}

/**
 * 移除指定元素
 * @param _element
 */
function removeElement(_element){
	var _parentElement = _element.parentNode;
	if(_parentElement){
		_parentElement.removeChild(_element);
	}
}