<template>
	<view class="content">
		<view class="meeting">
			<text style="color: #FF0000;">*</text>
			<text>学院现可用会议室</text>
		</view>
		<view>
			<!-- //遍历5次checkbox -->
			<view v-for="(room,index) in listroom" :key="index" class="files_btm">
				<checkbox-group class="flie_top">
					<label @click="checkboxChange(index)">
						<checkbox  :checked="room.isSelect"  @tap="toggleRoom(room,index)"  class="file_check"/>
					</label>
					<text class="file_check">{{room.titles}}</text>
				</checkbox-group>
				
				<!-- <Filemark :afterDays="7"></Filemark> -->
				<view v-show="room.isSelect">
					<!-- //遍历时间控件 -->
					<view class="newfile-days">
						<scroll-view>
							<view class="newfile-scroll">
								<view class="newfile-day" :class="tabIndex==index?'theme':'thems'" v-for="(day,index) in daylist" :key="index"
								 @tap="toggleIndex(day,index)">
									<view class="newfile-week">{{day.week}}</view>
									<view class="newfile-date">{{day.month}}/{{day.day}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					<view class="news_files_content">
						<view class="news_files_timer" :class="itemIndex==index?'theme':'thems'" v-for="(item,index) in list" :key="index"
						 @tap="toggleItem(item,index)">
							<text>{{item.timer}}--{{item.timers}}</text>
							<view>
								<text :class="item.disabled?'file_themet':'file_themst'">{{item.disabled?"无法选中":"余一"}}</text>
							</view>
						</view>
					</view>
					<!-- 遍历所需要的东西 -->
					<checkbox-group v-for="(itemex,index) in room.roontext" :key="index" class="flie_top">
						<label>
							<checkbox :checked="!room.isSelect" class="file_check" />
						</label>
						<text class="file_check">{{itemex.textes}}</text>
					</checkbox-group>
				</view>
				<view class="files_boxes">
					
				</view>
			</view>
			<!-- //非空验证 正则验证 -->
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text>会议名称</text>
				<input type="text" value="" class="newsfile_ipt" v-model="userInfo.name" @input="onInputone" />
			</view>
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text>借用人姓名</text>
				<input type="text" value="" class="newsfile_ipt1" v-model="userInfo.name1" @input="onInputone" />
			</view>
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text>借用人联系方式</text>
				<input type="text" value="" class="newsfile_ipt2" v-model="userInfo.tel"  @input="onInputone"/>
			</view>
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text>会议室使用责任人（请填写老师姓名）</text>
				<input type="text" value="" class="newsfile_ipt3" v-model="userInfo.name2"  @input="onInputone"/>
			</view>
			<view class="meetinges">
				<text>如有其他布置需求，请详细描述并告知学院综合办公室</text>
				<textarea value="" placeholder="请输入你的需求" rows="30" cols="50" class="newfiles_area" @input="onInputone"/>
				<button type="default" class="newfiles_btn" @tap="login">提交</button>
  </view>
 </view>
 </view>
</template>

<script>
 // import Filemark from "../newfile_mark/newfile_mark.vue"
 // import Newfilesmark from "../news_files_mark/news_files_mark.vue"
 export default {
  data() {
   return {
	   daylist: [],//空数组为日期赋值
	   tabIndex: 0,
	   itemIndex: -1,
	   roomIndex:-1,
	   timer1: 8,//选定的时间
	   timer2: 14,//选定的时间
	   timer3: 19,//选定的时间
	   afterDays:7,//遍历的天数
	   userInfo: {},
	   inputlist:{},
	   name:"",
	   remarks:"",
	   list: [{
	   		timer: "8:00",
	   		timers: "12:00",
	   		disabled: false
	   	},
	   	{
	   		timer: "14: 00",
	   		timers: "18:00",
	   		disabled: false
	   	},
	   	{
	   		timer: "19: 00",
	   		timers: "22:00",
	   		disabled: false
	   	}
	   ],
    listroom: [{
      titles: "科技楼北400室(可容纳20人)",
      isSelect:false,
	  roontext:[
		  {textes:"触屏电视设备"}
		  ]
     },
     {
      titles: "科技楼北403C室（可容纳15人）",
      isSelect:false,
	  roontext:[
	  		  {textes:"投影设备"}
	  		  ]
     },
     {
      titles: "科技楼北408室（可容纳40人）",
      isSelect:false,
	  roontext:[
	  		  {textes:"电脑及投影设备"},
			  {textes:"话筒设备及功放设备"},
			  {textes:"视频会议设备"},
			  {textes:"激光笔"}
	  		  ]
     },
     {
      titles: "科技楼北410室（可容纳90人）",
      isSelect:false,
	  roontext:[
	  		  {textes:"电脑投影及电视显示设备"},
			  {textes:"话筒设备及功放设备"},
			  {textes:"激光笔"}
	  		  ]
     },
     {
      titles: "科技楼东408室（可容纳60人）",
      isSelect:false,
	  roontext:[
	  		  {textes:"电脑投影及电视显示设备"},
			  {textes:"话筒设备及功放设备"},
			  {textes:"视频会议设备"},
			  {textes:"激光笔"},
			  {textes:"360wifi热点装置"}
	  		  ]
     }
    ]
   }
  },
  created() {
  	//页面未渲染时就执行这俩段代码
  	this.initPicker();
  	this.initHours();
  },
  methods: {
	  // onInputone(e){
		 //  this.remarks=e.target.value
		 //  console.log(this.remarks)
	  // },
	  toggleIndex(item, index) {
	  	//获取点击事件得到index值，如果相等则赋值到tabindex上面，使其相等
	  	this.tabIndex = index;
	  	this.itemIndex = -1;
	  	this.initHours(item.istoday)
	  	// console.log(this.tabIndex)
	  	// console.log(!item.istoday)
	  },
	  toggleRoom(room,index){
		  console.log(!room.isSelect)
		  if(!room.isSelect){
			  this.roomIndex=index
		  }else{
			  this.roomIndex=-1
		  }
	  },
	  toggleItem(item, index) {
	  	//如果item.disabled为false则取反为true，走if语句判定
	  	//如果item.disabled为true则取反为false，不走这段代码
	  	if (!item.disabled) {
	  		this.itemIndex = index;
	  	}
	  },
	  forMatNumber(n) {
	  	//时间如果小于10就加0，如果不小于10则不加0
	  	return n < 10 ? '0' + n : n
	  },
	  // timeFMT(val) {  
	  //  var tm = new Date(val)   
	  //  var dd = tm.getDate()
	  //  return `${dd}`  
	  //    } ,
	  //时间的判定代码函数
	  initHours(flag) {
	  	//获取时间
	  	let aDate = new Date();
	  	//获取小时数
	  	let curHour = aDate.getHours();
	  	//flag为true时，执行下面的代码
	  	if (flag) {
	  		//判断前俩个数值，操控明天和后天
	  		if(this.tabIndex==1||this.tabIndex==2){
	  			this.list[0].disabled = false
	  			this.list[1].disabled = false
	  			this.list[2].disabled = false
	  		}
	  		//判断后面的四个数值，操控后面几天
	  		if(this.tabIndex==3||this.tabIndex==4||this.tabIndex==5||this.tabIndex==6){
	  			this.list[0].disabled = true
	  			this.list[1].disabled = true
	  			this.list[2].disabled = true
	  		}
	  		//flag为false时，执行下面的代码
	  	} else {
	  		//判断当天的当前时间超过选定的时间
	  		if (curHour >= this.timer1) {
	  			this.list[0].disabled = true
	  		}
	  		if (curHour >= this.timer2) {
	  			this.list[1].disabled = true
	  		}
	  		if (curHour >= this.timer3) {
	  			this.list[2].disabled = true
	  		}
	  		
	  	}
	  
	  
	  },
	  //日期的判定代码函数
	  initPicker() {
	  	let aDate = new Date();
	  	let weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
	  	//获取到今天的年月日塞到daylist数组中
	  	this.daylist.push({
	  		year: aDate.getFullYear(),
	  		month: this.forMatNumber(aDate.getMonth() + 1),
	  		day: this.forMatNumber(aDate.getDate()),
	  		week: weekList[aDate.getDay()],
	  		istoday: false //判断是否为今天
	  	})
	  	//遍历获取到7天的年月日，并塞到数组中去
	  	for (let i = 1; i < this.afterDays * 1; i++) {
	  		aDate.setDate(aDate.getDate() + 1);
	  		this.daylist.push({
	  			year: aDate.getFullYear(),
	  			month: this.forMatNumber(aDate.getMonth() + 1),
	  			day: this.forMatNumber(aDate.getDate()),
	  			week: weekList[aDate.getDay()],
	  			istoday: true //判断是否为今天
	  		})
	  	};
	  },
	  
   checkboxChange(index) {
    this.listroom[index].isSelect = !this.listroom[index].isSelect
   },
   login(){
   	let loginRules = [
   		{name: 'name', type: 'required', errmsg: '请填写会议名称'},
   		{name: 'name1', type: 'required', errmsg: '请填写借用人姓名'},
		{name: 'tel', type: 'required', errmsg: '请输入您的手机号'},
   		{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
   		{name: 'name2', type: 'required', errmsg: '请填写会议室使用责任人'}
   	
   	]
	// console.log(this.itemIndex)
	console.log(this.roomIndex)
	// console.log(this.list[0].disabled)
	// console.log(this.list[1].disabled)
	// console.log(this.list[2].disabled)
   	let valLoginRes = this.$validate.validate(this.userInfo, loginRules)

		if(this.roomIndex<0){
			uni.showToast({
				icon: 'none',
				title: "请勾选你所需要的教室"
			})
			return false
		}
		if(this.itemIndex<0){
			uni.showToast({
				icon: 'none',
				title: "请勾选你所选择时间段"
			})
			return false
		}
		if (!valLoginRes.isOk) {
			
			uni.showToast({
				icon: 'none',
				title: valLoginRes.errmsg
			})
			return false
		}
   	uni.showToast({
   		icon: 'none',
   		title: '验证通过提交登陆'
   	})
   	uni.navigateTo({
   	    url: '../../pages/mine/mine'
   	});
   }
  },
  components: {
  }
 }
</script>

<style scoped>
 .content{
		width: 100%;
 }
 .flie_top{
	 margin-top: 10rpx;
 }
 .meeting {
  margin-left: 10rpx;
  margin-top: 10rpx;
  font-weight: bold;
  font-size: 18px;
 }
 .file_check{
	 font-size: 28rpx;
	 margin-left: 10rpx;
 }
 .files_boxes{
	 width: 100%;
	 height: 20rpx;
 }
 .newfile-days {
 	overflow: hidden;
 	padding: 10upx 0;
 	background-color: #fff;
 }
 
 .newfile-scroll {
 	white-space: nowrap;
 }
 .files_btm{
	 width: 99%;
	 margin-left: 1rpx;
	 margin-top: 5rpx;
	 border: 1px solid #169bd5;
 }
 .newfile-day {
 	display: inline-block;
 	width: 95upx;
 	text-align: center;
 	border: solid 1px #ddd;
 	margin: 0 5upx;
 	border-radius: 6upx;
 	padding: 10upx 0;
 	color: #333;
 }
 
 .newfile-week {
 	font-size: 28upx;
 	line-height: 1;
 }
 
 .newfile-date {
 	font-size: 24upx;
 	line-height: 1;
 	margin-top: 10upx;
 }
 
 .newfile-day-active {
 	color: #f00;
 	border-color: #f00;
 }
 
 .news_files_content {
 	height: 100rpx;
 	width: 100%;
 }
 .w-time-item-active{
 	background-color: #fff;
 }
 
 .news_files_timer {
 	float: left;
 	margin-left: 30rpx;
 	text-align: center;
 	line-height: 50rpx;
 	height: 100rpx;
 	width: 210rpx;
 	font-size: 30rpx;
 	border: 1px solid #000000;
 }
 .theme{
 	color: #f5a200;
 	border-color: #f5a200;
 }
 .thems{
 	color: #282c35;
 	border-color: #ddd;
 }
 .file_themet{
 	color: #bebebe;
 }
 .file_themst{
 	color: #1f72f1;
 }

 .meetinges{
	margin-left: 10rpx;
 	margin-top: 10px;
 }
 .textcolore{
 	color: #FF0000;
 }
 .newsfile_ipt{
 	float: right;
 	margin-right: 70rpx;
 	width: 70%;
 	border: 1px solid #000000;
 }
 .newsfile_ipt1{
 	float: right;
 	margin-right: 70rpx;
 	width: 65%;
 	border: 1px solid #000000;
 }
 .newsfile_ipt2{
 	float: right;
 	margin-right: 70rpx;
 	width: 57%;
 	border: 1px solid #000000;
 }
 .newsfile_ipt3{
 	width: 60%;
 	border: 1px solid #000000;
 }
 .newfiles_area{
 	margin-left: 55rpx;
 	border: 1px solid #000000;
 }
 .newfiles_btn{
 	margin-top: 10rpx;
 	width: 200rpx;
 	height: 100rpx;
 	border: 1px solid #000000;
 	background-color: #169bd5;
 	color: #F0F0F0;
 }
</style>
