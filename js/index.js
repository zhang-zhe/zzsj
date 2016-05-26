
$(function(){


	$(".button-collapse").bind("tap",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	$(".side-nav").bind("tap",function(e){
		e.stopPropagation();
	})
	$(document).bind("tap swipeLeft",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"-105%"});
	})
	$(document).bind("swipeRight",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	// ---------------------shanpingye
	var $slides=$(".slides li");
	if(localStorage.state){
		$(".slides").remove();
		$("#container").css({visibility:"visible"});
	}
	else{
		$slides.swipeLeft(function(e){
			e.stopPropagation();
			var cur,next;
			cur=$(this);
			if(cur.next().length){
				next=$(this).next();
			}
			else{
				return;
			}
			cur.removeClass("active").addClass("zuoce");
			next.addClass("active");
			// setTimeout(function(){
			// 	cur.css({transition:"none"}).removeClass("zuoce");
			// },325)
			setTimeout(function(){
				cur.css({transition:"left 0.325s ease"})
			},325)
		})
		var $slides=$(".slides li");
		$slides.swipeRight(function(e){
			e.stopPropagation();
			var cur,next;
			cur=$(this);
			if($(this).prev().length){
				next=$(this).prev();
			}
			else{
				return;
			}
			cur.removeClass("active");
			setTimeout(function(){
				// next.css({transition:"none"}).addClass("zuoce");
			},325)
			setTimeout(function(){
				next.css({transition:"left 0.325s ease"}).addClass("active").removeClass("zuoce");
			},15)
		})
	}


	// ----------------------------------------lunbo
	var $lunbo=$(".lunbo");
	$lunbo.swipeLeft(function(e){
		e.stopPropagation();
		// clearInterval(t);
		var cur,next;
		console.dir($lunbo.first())
		cur=$(this);
		if(cur.next().length){
			next=$(this).next();
		}
		else{
			next=$lunbo.first();
		}
		cur.removeClass("active1").addClass("zuoce1");
		next.addClass("active1");
		setTimeout(function(){
			cur.css({transition:"none"}).removeClass("zuoce1");
		},270)
		setTimeout(function(){
			cur.css({transition:"left 0.325s ease"})
		},325)
	})
	$lunbo.swipeRight(function(e){
		// clearInterval(t);
		e.stopPropagation();
		var cur,next;
		cur=$(this);
		if($(this).prev().length){
			next=$(this).prev();
		}
		else{
			next=$lunbo.last();
		}
		cur.removeClass("active1");
		setTimeout(function(){
			next.css({transition:"none"}).addClass("zuoce1");
		},0)
		setTimeout(function(){
			next.css({transition:"left 0.325s ease"}).addClass("active1").removeClass("zuoce1");
		},35)
	})
		// -------------------------------------时间控制
		var move=function(el,dr){
			var map={next:"first",prev:"last"};
			$(el).removeClass("active1").addClass("zuoce1");

			if($(el)[dr]().length){
				$(el)[dr]().addClass("active1");
				setTimeout(function(){
					$(el).css({transition:"none"}).removeClass("zuoce1");
				},270)
				setTimeout(function(){
					$(el).css({transition:"left 0.325s ease"})
				},325)
				cur=$(el)[dr]().get(0);
			}
			else{
				$lunbo[map[dr]]().addClass("active1");
				setTimeout(function(){
					$(el).css({transition:"none"}).removeClass("zuoce1");
				},270)
				setTimeout(function(){
					$(el).css({transition:"left 0.325s ease"})
				},325)
				cur=$lunbo[map[dr]]().get(0);
			}
		}
		var cur=$slides.get(0);
		var t=setInterval(function(){
			move(cur,"next");
		},2000)
	// -----------------------------
	$("#enter").tap(function(){
		$(".slides").remove();
		$("#container").css({visibility:"visible"});
		localStorage.state=true;
	})
	$("#enter1").tap(function(){
		$(".slides").remove();
		$("#container").css({visibility:"visible"});
		localStorage.state=true;
	})
	// -------------------------------nav
	var lanmus=[
	{id:1,img:"./img/toutiao.jpg",
	title:"吕梁学院",content:{
		a:"校园概况",
		ahref:"http://www.llhc.edu.cn/",
		toutiaotitle_2shijian:"5年前",
		toutiaotitle_2ren:"31111"
	},zhuanti:"./img/ydw_zt.png"},
	{id:2,img:"./img/623.jpg",
	title:"吕梁市2016年度征兵宣传启动仪式在我校举行",content:{
		a:"中国政库",
		ahref:"http://www.llhc.edu.cn/info/1021/5338.htm",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:3,img:"./img/bbg.jpg",
	title:"我校生物标本馆免费向社会开放",content:{
		a:"校园通知",
		ahref:"http://www.llhc.edu.cn/info/1021/5309.htm",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_xy.png"},
	{id:4,img:"./img/175.jpg",
	title:"摘掉生活的面具，展示出最真实的自己",content:{
		a:"正能量",
		ahref:"http://www.wenzhangba.com/renshengganwu/201601/83807.html",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:5,img:"./img/423.jpg",
	title:"学士服租用",content:{
		a:"生活",
		ahref:"http://www.xueshifu.cn/",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:6,img:"./img/204.jpg",
	title:" ",content:{
		a:" ",
		ahref:"http://www.baidu.com",
		toutiaotitle_2shijian:" ",
		toutiaotitle_2ren:" "
	},zhuanti:""}
	];
	var liebiaos=[
	{	id:1,imgs:"./img/new1.jpg",
	news_t1:"省委常委、组织部长盛茂林来我校调研",content:{
		a:"校园新闻",
		ahref:"http://www.llhc.edu.cn/info/1021/5315.htm",
		news_t2shijian:"8小时前",
		news_t2ren:"49"
	},tuijian:"./img/ydw_xy.png",cateid:1},
	{	id:2,imgs:"./img/17.jpg",
	news_t1:"外国人拥有韩国济州岛1%土地 其中中国人占半数",content:{
		a:"国际新闻",
		ahref:"http://news.163.com/16/0522/16/BNMEMF4700014JB6.html",
		news_t2shijian:"2小时前",
		news_t2ren:"23"
	},tuijian:"./img/ydw_xy.png",cateid:1},
	{	id:3,imgs:"./img/658.jpg",
	news_t1:"关于在2016届毕业生中选聘校友工作联络员的通知",content:{
		a:"通知公告",
		ahref:"http://www.llhc.edu.cn/info/1022/5320.htm",
		news_t2shijian:"4小时前",
		news_t2ren:"350"
	},tuijian:"./img/ydw_xy.png",cateid:1},
	{id:4,imgs:"./img/706.jpg",
	news_t1:"关于餐厅用餐情况的问卷调查",content:{
		a:"问吧",
		ahref:"http://www.sojump.com/jq/1619156.aspx",
		news_t2shijian:"3小时前",
		news_t2ren:"233"
	},tuijian:"./img/ydw_xy.png",cateid:1},
	{id:5,imgs:"./img/71.jpg",
	news_t1:"校领导带队赴交口实习实训基地调研商洽工作",content:{
		a:"校园新闻",
		ahref:"http://www.llhc.edu.cn/info/1021/5329.htm",
		news_t2shijian:"3小时前",
		news_t2ren:"233"
	},tuijian:"./img/ydw_xy.png",cateid:2},
	{id:6,imgs:"./img/501.jpg",
	news_t1:"我校召开“两学一做”学习教育工作会议",content:{
		a:"校园新闻",
		ahref:"http://www.llhc.edu.cn/info/1021/5321.htm",
		news_t2shijian:"3小时前",
		news_t2ren:"27"
	},tuijian:"./img/ydw_xy.png",cateid:2},
	{id:7,imgs:"./img/484.jpg",
	news_t1:"中国外长再出手：又一邻国表态支持中方南海立场",content:{
		a:"国内新闻",
		ahref:"http://military.china.com/news/568/20160525/22731952.html",
		news_t2shijian:"40分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:2},
	{id:8,imgs:"./img/666.jpg",
	news_t1:"131球！巴萨MSN狂刷新纪录 包揽巴萨超7成进球",content:{
		a:"体育新闻",
		ahref:"http://sports.sina.com.cn/g/laliga/2016-05-24/doc-ifxsktkr5964405.shtml?dt7",
		news_t2shijian:"1小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:2},
	{id:9,imgs:"./img/505.jpg",
	news_t1:"关于填报2016届毕业生户口迁移信息的通知",content:{
		a:"校园通知",
		ahref:"http://wzb.llhc.edu.cn/info/1077/1306.htm",
		news_t2shijian:"47分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:3},
	{id:10,imgs:"./img/493.jpg",
	news_t1:"关于新校区电话和网络故障维护人员更改的通知",content:{
		a:"校园通知",
		ahref:"http://xxyxdjyc.llhc.edu.cn/info/1003/2423.htm",
		news_t2shijian:"10分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:3},
	{id:11,imgs:"./img/95.jpg",
	news_t1:"思政系“向五十分钟课堂要质量”系列活动之四——学情调研系列活动",content:{
		a:"校园通知",
		ahref:"http://www.llhc.edu.cn/info/1023/5333.htm",
		news_t2shijian:"3小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:3},
	{id:12,imgs:"./img/101.jpg",
	news_t1:"数学系组队参加第九届认证杯数学中国数学建模网络挑战赛",content:{
		a:"校园通知",
		ahref:"http://www.llhc.edu.cn/info/1023/5331.htm",
		news_t2shijian:"1小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:3},
	{id:13,imgs:"./img/878.jpg",
	news_t1:"战争中的人性",content:{
		a:"正能量",
		ahref:"http://www.tcomall.com/post/1830.html",
		news_t2shijian:"3小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:4},
	{id:14,imgs:"./img/699.jpg",
	news_t1:"打破心灵的围墙",content:{
		a:"正能量",
		ahref:"http://www.tcomall.com/post/1824.html",
		news_t2shijian:"5小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:4},
	{id:15,imgs:"./img/987.jpg",
	news_t1:"点亮心中的蜡烛",content:{
		a:"正能量",
		ahref:"http://www.tcomall.com/post/1821.html",
		news_t2shijian:"5小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_xy.png",cateid:4},
	{id:16,imgs:"./img/126.jpg",
	news_t1:"大四学长学姐的宝贝找下一个主人喽",content:{
		a:"生活",
		ahref:"http://www.baidu.com",
		news_t2shijian:"11小时前",
		news_t2ren:"11"
	},tuijian:"./img/ydw_xy.png",cateid:5},
	{id:17,imgs:"./img/213.jpg",
	news_t1:"物理系电子信息工程专业书籍低价处理",content:{
		a:"生活",
		ahref:"http://www.baidu.com",
		news_t2shijian:"40分钟前",
		news_t2ren:"22"
	},tuijian:"./img/ydw_xy.png",cateid:5},
	{id:18,imgs:"./img/540.jpg",
	news_t1:"需要做兼职的学生往这看",content:{
		a:"生活",
		ahref:"http://www.baidu.com",
		news_t2shijian:"43分钟前",
		news_t2ren:"33"
	},tuijian:"./img/ydw_xy.png",cateid:5},
	{id:19,listname:"学生问卷",
	listneirong:"答辩怎么答",wenbalist2:{
		a:"问吧",
		ahref:"http://zhidao.baidu.com/link?url=xS1meE-ozW-cP-mDuQ9eBgpedwfGN6x_CnTinkVtgEI6TqLYC_ClyNNVEP_2DwCL7zof6p1_X9VyDqYa2qbH8K",
		news_t2shijian:"16",
		news_t2ren:"进行中"
	},tuijian:"",cateid:6},
	{id:20,listname:"学生提问",
	listneirong:"电子信息工程创业大赛的相关问题",wenbalist2:{
		a:"问吧",
		ahref:"http://www.baidu.com",
		news_t2shijian:"16",
		news_t2ren:"进行中"
	},tuijian:"",cateid:6},
	{id:21,listname:"学生提问",
	listneirong:"关于学校餐厅",wenbalist2:{
		a:"问吧",
		ahref:"http://www.baidu.com",
		wenbalist2_zan:"43分钟前",
		wenbalist2_:"进行中"
	},tuijian:"",cateid:6},
	{id:22,listname:"校园问卷",
	listneirong:"校园社团活动调查问卷",wenbalist2:{
		a:"问吧",
		ahref:"http://www.baidu.com",
		news_t2shijian:"16",
		news_t2ren:"进行中"
	},tuijian:"",cateid:6}
	];
	$(".tabs li").each(function(i,v){
		$(this).data("index",lanmus[i].id);
	})
	$(".tabs li").tap(function(e){
		e.stopPropagation();
		var lanmuid=$(this).data("index");
		if(lanmuid<6){
			// $("#wenba").css({display:"none"});
			$("#list").css({display:"block"});
			$("#lunbo").css({display:"none"});
			var shuju=liebiaos.filter(function(v,i){
				return v.cateid==lanmuid;
			})

			$("#list").empty();
			shuju.forEach(function(v,i){
				var els=$("#yangben2").clone();
				els.attr("id","  ");
				els.find(".news>img").attr("src",v.imgs);
				/*els.find(".news_t1 a")*//*text(v.news_t1);*/
				els.find(".news_t1>a").text(v.news_t1).attr("href",v.content.ahref);
				els.find(".news_t2 a").text(v.content.a);
				els.find(".news_t2 .news_t2shijian").text(v.content.news_t2shijian);
				els.find(".news_t2 .news_t2ren").text(v.content.news_t2ren);
				els.find(".news_t2 .zhuanti img").attr(v.zhuanti);
				els.data("index",v.id);
				$("#list").append(els);
			})
		}
		else if(lanmuid>=6){
			$("#list").css({display:"none"});
			$("#lunbo").css({display:"block"});
			var shujuwenba=liebiaos.filter(function(v,i){
				return v.cateid==6;
			})

			$("#wenba").empty();
			shujuwenba.forEach(function(v,i){
				var els=$("#yangben3").clone();
				els.attr("id","  ");
				els.find(".listname").text(v.listname);
				els.find(".listneirong>a").text(v.listneirong).attr("href",v.wenbalist2.ahref);
				/*els.find(".listneirong>a");*/
				els.find(".wenbalist2 a").text(v.wenbalist2.a);
				els.find(".wenbalist2 .wenbalist2_zan").text(v.wenbalist2.wenbalist2_zan);
				els.find(".wenbalist2 .wenbalist2_").text(v.wenbalist2.wenbalist2_);
				els.data("index",v.id);
				$("#wenba").append(els);
			})
		}
	})

	// -------------------------------------title
	$(".tabs li").each(function(i){
		$(this).click(function(){
			$(this).eq(0).css({color:"#000"});
			$(this).find("a").css({color:"#00a5eb"});
			$(this).bind("mouseout",function(){
				$(this).find("a").css({color:"#000000"});
			})
			if(i<5){
				$("#toutiao").css({display:"block"});
				$("#lunbo").css({display:"none"});
				$("#wenba").css({display:"none"});
				var lanmushuju=lanmus.filter(function(v){
					return v.id==i+1;
				})
				lanmushuju.forEach(function(v,i){
					$("#toutiao").empty();
					var els="gshfghsdfyud";
					var els=$("#yangben1").clone();
					els.attr("id","  ");
					els.find(".toutiao img").attr("src",v.img);
					els.find(".toutiaotitle_1 a").text(v.title).attr("href",v.content.ahref);
					/*els.find(".toutiaotitle_1 a");*//*.text(v.title);*/
					els.find(".toutiaotitle_2 a").text(v.content.a);
					els.find(".toutiaotitle_2 .toutiaotitle_2shijian").text(v.content.toutiaotitle_2shijian);
					els.find(".toutiaotitle_2 .toutiaotitle_2ren").text(v.content.toutiaotitle_2ren);
					els.find(".toutiaotitle_2 .zhuanti img").attr("src",v.zhuanti);
					els.data("index",v.id);
					$("#toutiao").append(els);
				})
			}
			else{
				var lanmuwenba=lanmus.filter(function(v){
					$("#lunbo").css({display:"block"});
					$("#toutiao").css({display:"none"});
					$("#wenba").css({display:"block"});
					return v.id==5;
				})
			}
			
		})
	})
	// ----------------------------默认
	var moren=liebiaos.filter(function(v,i){
		return v.cateid==1;
	})
	moren.forEach(function(v,i){
		$("#lunbo").css({display:"none"});
		$(".tabs li").eq(0).find("a").css({color:"#00a5eb"});
		var els=$("#yangben2").clone();
		els.attr("id","  ");
		els.find(".news>img").attr("src",v.imgs);
		els.find(".news_t1>a").text(v.news_t1).attr("href",v.content.ahref);
		/*els.find(".news_t1 a");*//*text(v.news_t1);*/
		els.find(".news_t2 a").text(v.content.a);
		els.find(".news_t2 .news_t2shijian").text(v.content.news_t2shijian);
		els.find(".news_t2 .news_t2ren").text(v.content.news_t2ren);
		els.find(".news_t2 .zhuanti img").attr("src",v.zhuanti);
		els.data("index",v.id);
		$("#list").append(els);
	})

	$(".tabs li").each(function(i){
		var lanmushuju=lanmus.filter(function(v){
			return v.id==1;
		})
		$("#toutiao").empty();
		lanmushuju.forEach(function(v,i){
			$("#toutiao").empty();
			var els="gshfghsdfyud";
			var els=$("#yangben1").clone();
			els.attr("id","  ");
			els.find(".toutiao img").attr("src",v.img);
			els.find(".toutiaotitle_1 a").text(v.title).attr("href",v.content.ahref);
			/*els.find(".toutiaotitle_1 a");*//*.text(v.title);*/
			els.find(".toutiaotitle_2 a").text(v.content.a);
			els.find(".toutiaotitle_2 .toutiaotitle_2shijian").text(v.content.toutiaotitle_2shijian);
			els.find(".toutiaotitle_2 .toutiaotitle_2ren").text(v.content.toutiaotitle_2ren);
			els.find(".toutiaotitle_2 .zhuanti img").attr("src",v.zhuanti);
			els.data("index",v.id);
			$("#toutiao").append(els);
		})

	})
})

document.addEventListener("plusready",function(){
	$("#toutiao").delegate(".col","tap",function(){
		var index=$(this).data("index");
		var w=plus.webview.create("show.html","show",{},{xx:index});
		w.show();
	})
})