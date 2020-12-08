+<template>
	<view class="content">
		<view class="new_roombtm">
			<text class="new_file_txt">*</text>
			<text class="new_file_tst">学院现可用会议室</text>
		</view>
		<view>
			<!-- //遍历5次checkbox -->
			<view class="files_top"  >
				<checkbox-group >
					<view v-for="(room,index) in listroom" :key="index" class="new_files_btm">
						<block >
							<view  class="newfile_top">
								<label @tap="handleClick(room,index)">
									<checkbox :checked="room.isSelect"/>
								</label>
								<text class="new_science">{{room.titles}}</text>
							</view>
							<view v-show="room.isSelect">
								<!-- //遍历时间控件 -->
								<view class="newfile-days">
									<block  >
										<view v-for="(day,i) in room.daylist" :class="day.classes">
											<!-- <view class="newfile-scroll"> -->
												<view class="newfile-day" @click="chechWeek(room,i,day)" :class="room.tabIndexs==i?'theme':'thems'">
													<view class="newfile-week">{{day.week}}</view>
													<view class="newfile-date">{{day.month}}/{{day.day}}</view>
												</view>
											<!-- </view> -->
												<view class="news_files_timer" v-for="(item,k) in day.islist" 
												 @click="selectTime(day,k,item)" :class="day.isSelectTime==k?'theme':'thems'"
												 v-if="room.tabIndexs==i && update" >
												 <text>{{item.timer}}--{{item.timers}}</text>
													<view>
														<text :class="item.disabled?'file_themet':'file_themst'" class="news_files_topes">{{item.disabled?"无法选中":"余一"}}</text>
													</view>
												</view>
										</view>
									</block>
								</view>
								<!-- 遍历所需要的东西 -->
								<checkbox-group v-for="(itemex,index) in room.roontext" :key="index" class="new_mgl" >
									<label>
										<checkbox />
									</label>
									<text class="new_science">{{itemex.textes}}</text>
								</checkbox-group>
							</view>
						</block>
						<view class="new_box">
							
						</view>
					</view>
				</checkbox-group>
			</view>
			<!-- //非空验证 正则验证 -->
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text class="text_size">会议名称</text>
				<input type="text" value="" class="newsfile_ipt" v-model="userInfo.name" @input="onInputone"/>
			</view>
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text class="text_size">借用人姓名</text>
				<input type="text" value="" class="newsfile_ipt1" v-model="userInfo.name1" />
			</view>
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text class="text_size">借用人联系方式</text>
				<input type="text" value="" class="newsfile_ipt2" v-model="userInfo.tel" />
			</view>
			<view class="meetinges">
				<text class="textcolore">*</text>
				<text class="text_size">会议室使用责任人（请填写老师姓名）</text>
				<input type="text" value="" class="newsfile_ipt3" v-model="userInfo.name2" @input="onInputtwo"/>
			</view>
			<view class="meetinges">
				<text class="text_size">如有其他布置需求，请详细描述并告知学院综合办公室</text>
				<textarea value="" placeholder="请输入你的需求" rows="30" cols="50" class="newfiles_area" />
				<button type="default" class="newfiles_btn" @tap="login">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	// import TimeSelect from './time_select.vue'
	export default {
		data() {
			return {
				daylist: [], //空数组为日期赋值
				tabIndex: 0,
				keyIndex:0,
				itemIndex: -1,
				roomIndex: -1,
				timer1: 8, //选定的时间
				timer2: 14, //选定的时间
				timer3: 19, //选定的时间
				afterDays: 7, //遍历的天数
				userInfo: {},
				inputlist: {},
				update:true,
				remarks1:"",
				remarks2:"",
				remarks3:"",
				getyear:"",
				list:[{
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
					}],
				listroom:[{
							titles: "科技楼北400室(可容纳20人)",
							isSelect: false,
							tabIndexs: 0,
							itemIndexs: 0,
							roontext: [{
								textes: "触屏电视设备"
							}]
						},
						{
							titles: "科技楼北403C室（可容纳15人）",
							isSelect: false,
							tabIndexs: 0,
							itemIndexs: 0,
							roontext: [{
								textes: "投影设备"
							}]
						},
						{
							titles: "科技楼北408室（可容纳40人）",
							isSelect: false,
							tabIndexs: 0,
							itemIndexs: 0,
							roontext: [{
									textes: "电脑及投影设备"
								},
								{
									textes: "话筒设备及功放设备"
								},
								{
									textes: "视频会议设备"
								},
								{
									textes: "激光笔"
								}
							]
						},
						{
							titles: "科技楼北410室（可容纳90人）",
							isSelect: false,
							tabIndexs: 0,
							itemIndexs: 0,
							roontext: [{
									textes: "电脑投影及电视显示设备"
								},
								{
									textes: "话筒设备及功放设备"
								},
								{
									textes: "激光笔"
								}
							]
						},
						{
							titles: "科技楼东408室（可容纳60人）",
							isSelect: false,
							tabIndexs: 0,
							itemIndexs: 0,
							roontext: [{
									textes: "电脑投影及电视显示设备"
								},
								{
									textes: "话筒设备及功放设备"
								},
								{
									textes: "视频会议设备"
								},
								{
									textes: "激光笔"
								},
								{
									textes: "360wifi热点装置"
								}
							]
						}
					]
				}
			},
			created() {
					//页面未渲染时就执行这俩段代码
					this.initPicker();
					this.init();
					// this.initHours()
				},
				methods: {
					onInputone(e){
							  //获取到input框的值
							  this.remarks1=e.target.value
							  console.log(this.remarks1)
					},
					onInputtwo(e){
							  //获取到input框的值
							  this.remarks2=e.target.value
							  console.log(this.remarks2)
					},
					handleClick(val,index){
						val.isSelect = !val.isSelect
						console.log(val.isSelect)
						console.log(val.titles)
						if(val.isSelect){
							this.itemIndex=-1
							
						}else{
							this.itemIndex=1
							val.daylist[0].isSelectTime=-1
							this.login(val.daylist[0])
						}
						this.remarks3=val.titles
						this.initHours(val.daylist[0].istoday,val.daylist[0])
						
					},
					selectTime(val,index,item){
						this.update = false
						val.isSelectTime=-1
						if(!item.disabled){
							val.isSelectTime = index
							this.itemIndex=index;
						}else{
							this.itemIndex=-1
						}
						setTimeout(()=>{
							this.update = true;
						},10)
						if(this.itemIndex==-1){
							
						}else{
							let items=this.itemIndex
							this.getyear=val.year+'-'+val.month+'-'+val.day+"   "+val.islist[items].timer+'-'+val.islist[items].timers
						}
						
					},
					
					chechWeek(room,i,day){
						room.tabIndexs = i
						day.isSelectTime=-1
						
						if(day.isSelectTime==-1){
							this.itemIndex=-1
						}
						this.tabIndex=i
						// console.log(this.tabIndex)
						// console.log(day)
						this.initHours(day.istoday,day)
						
						// console.log(room.daylist)
					},
					init(){
							let datalist = JSON.stringify(this.daylist)
							 this.listroom.map(res=>res.daylist = JSON.parse(datalist))
					},
					forMatNumber(n) {
						//时间如果小于10就加0，如果不小于10则不加0
						return n < 10 ? '0' + n : n
					},
					initHours(flag,day) {
						//获取时间
						// console.log(day)
						let aDate = new Date();
						//获取小时数
						let curHour = aDate.getHours();
						//flag为true时，执行下面的代码
								if (flag) {
									//判断前俩个数值，操控明天和后天
									if(this.tabIndex==1||this.tabIndex==2){
										day.islist[0].disabled = false
										day.islist[1].disabled = false
										day.islist[2].disabled = false
									}
									//判断后面的四个数值，操控后面几天
									if(this.tabIndex==3||this.tabIndex==4||this.tabIndex==5||this.tabIndex==6){
										day.islist[0].disabled = true
										day.islist[1].disabled = true
										day.islist[2].disabled = true
									}
									//flag为false时，执行下面的代码
								} else {
									//判断当天的当前时间超过选定的时间
										if (curHour >= this.timer1) {
											day.islist[0].disabled = true
										}
										if (curHour >= this.timer2) {
											day.islist[1].disabled = true
										}
										if (curHour >= this.timer3) {
											day.islist[2].disabled = true
										}
									
								}
					
					},
					//日期的判定代码函数
					initPicker() {
						// console.log(this.listroom)
						// console.log(this.daylist)
						let aDate = new Date();
						let weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
						//获取到今天的年月日塞到daylist数组中
								this.daylist.push({
									year: aDate.getFullYear(),
									month: this.forMatNumber(aDate.getMonth() + 1),
									day: this.forMatNumber(aDate.getDate()),
									week: weekList[aDate.getDay()],
									islist:this.list,
									isSelectTime:-1,
									istoday: false ,//判断是否为今天
									classes:"newfile_potnt"
								})
							//遍历获取到7天的年月日，并塞到数组中去
							for (let i = 1; i < this.afterDays * 1; i++) {
								aDate.setDate(aDate.getDate() + 1);
								this.daylist.push({
									year: aDate.getFullYear(),
									month: this.forMatNumber(aDate.getMonth() + 1),
									day: this.forMatNumber(aDate.getDate()),
									week: weekList[aDate.getDay()],
									islist:this.list,
									isSelectTime:-1,
									istoday: true ,//判断是否为今天
									classes:"newfile_potn"+i
								})
						}
						
					},

					checkboxChange(index) {
						this.listroom[index].isSelect = !this.listroom[index].isSelect
						// this.toggleIndex()
					},
					login(day){
						console.log(day)
						console.log(this.itemIndex)
						let loginRules = [
							{name: 'name', type: 'required', errmsg: '请填写会议名称'},
							{name: 'name1', type: 'required', errmsg: '请填写借用人姓名'},
							{name: 'tel', type: 'required', errmsg: '请输入您的手机号'},
							{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
							{name: 'name2', type: 'required', errmsg: '请填写会议室使用责任人'}
						
						]
						// console.log(this.remarks1)
						// console.log(this.remarks2)
						console.log(this.getyear)
						let valLoginRes = this.$validate.validate(this.userInfo, loginRules)
						let reamarks=this.remarks1
						let reamarkes=this.remarks2
						let remarksthr=this.remarks3
						
						
						let getyears=this.getyear
						console.log(getyears)
							if(this.listroom[0].isSelect || this.listroom[1].isSelect||this.listroom[2].isSelect|| this.listroom[3].isSelect||this.listroom[4].isSelect){
								
								
							}else{
								uni.showToast({
									icon: 'none',
									title: "请勾选你所需要的教室"
								})
								return false
							}
							if(day.isSelectTime<0||this.itemIndex<0){
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
								    url: '/pages/new_mine/new_mine?txt='+JSON.stringify(reamarks)
									+'test='+JSON.stringify(reamarkes)
									+'test='+JSON.stringify(remarksthr)
									+'test='+JSON.stringify(getyears)
								});
							
						
					}

			}	
		}
</script>

<style scoped>
	.new_roombtm{
		width: 87%;
		margin-left: 15px;
		margin-top: 15px;
		border-bottom: 1px solid #E5E5E5;
	}
	.text_size{
		font-size: 14px;
		font-weight: 600;
	}
	.new_file_tst{
		font-size: 16px;
		/* margin-left: 15px; */
	}
	.new_file_txt{
		/* margin-left: 15px; */
		color: #FF0000;
	}
	
	.new_mgl{
		margin-left: 10px;
		margin-top: 5px;
	}
	.newfile-days{
		/* width: 100%; */
		height: 120px;
		font-size: 14px;
		margin-left: -7px;
		
	}
	.new_science{
		font-size: 14px;
	}
	.files_top{
		margin-left: 20rpx;
		/* margin-top: 0rpx; */
	}
	.newfile_top{
		width: 90%;
		margin-top: 10rpx;
	}
	.new_box{
		height: 10rpx;
	}
	.new_files_btm{
		width: 90%;
		border-bottom: 1px solid #E5E5E5;
	}
	/* .newfile-scroll{
		border-bottom: 1px solid #E5E5E5;
	} */
	.newfile-day{
		width: 47px;
		height: 37px;
		/* border: 1rpx solid #333333; */
		position: absolute;
		text-align: center;
		/* line-height: 40px; */
		/* background-color: #E5E5E5; */
	}
	.newfile-week{
		font-size: 13px;
	}
	.newfile-date{
		font-size: 13px;
	}
	.news_files_topes{
		position: relative;
		top: 0px;
		font-size: 15px;
	}
	.newfile_potnt{
		position: relative;
		top: 10rpx;
		left: 9px;
		background-color: #007AFF;
	}
	.newfile_potn1{
		position: relative;
		top: 10rpx;
		left: 58px;
		background-color: #007AFF;
	}
	.newfile_potn1>.news_files_timer{
		position: relative;
		left: -49px;
	}
	.newfile_potn2{
		position: relative;
		top: 10rpx;
		left: 106px;
		background-color: #007AFF;
	}
	.newfile_potn2>.news_files_timer{
		position: relative;
		left: -97px;
	}
	.newfile_potn3{
		position: relative;
		top: 10rpx;
		left: 155px;
		background-color: #007AFF;
	}
	.newfile_potn3>.news_files_timer{
		position: relative;
		left: -146px;
	}
	.newfile_potn4{
		position: relative;
		top: 10rpx;
		left: 203px;
		background-color: #007AFF;
	}
	.newfile_potn4>.news_files_timer{
		position: relative;
		left: -194px;
	}
	.newfile_potn5{
		position: relative;
		top: 10rpx;
		left: 252px;
		background-color: #007AFF;
	}
	.newfile_potn5>.news_files_timer{
		position: relative;
		left: -243px;
	}
	.newfile_potn6{
		position: relative;
		top: 10rpx;
		left: 301px;
		background-color: #007AFF;
	}
	.newfile_potn6>.news_files_timer{
		position: relative;
		left: -292px;
	}

	.news_files_content{
		float: left;
	}
	.news_files_timer{
		margin-top: 60px;
		font-size: 14px;
		margin-left: 8px;
		width: 100px;
		height: 40px;
		float: left;
		text-align: center;
		/* line-height: 50px; */
		border: 1rpx solid #333333;
	}
	.theme {
		color: #FFFFFF;
		border-color: #FFFFFF;
		background-color: #5497ff;
	}

	.thems {
		color: #282c35;
		border-color: #ddd;
		/* background-color: #999999; */
	}

	.file_themet {
		color: #bebebe;
	}

	.file_themst {
		color: #9dcb94;
	}
	.meetinges{
		width: 95%;
		margin-left: 12px;
		margin-top: 15px;
	}
	.textcolore{
		color: #FF0000;
	}
	.newsfile_ipt{
		float: right;
		font-size: 14px;
		margin-right: 70rpx;
		width: 70%;
		border: 1rpx solid #d0d0d0;
	}
	.newsfile_ipt1{
		float: right;
		font-size: 14px;
		margin-right: 70rpx;
		width: 65%;
		border: 1rpx solid #d0d0d0;
	}
	.newsfile_ipt2{
		float: right;
		font-size: 14px;
		margin-right: 70rpx;
		width: 57%;
		border: 1rpx solid #d0d0d0;
	}
	.newsfile_ipt3{
		width: 60%;
		font-size: 14px;
		border: 1rpx solid #d0d0d0;
	}
	.newfiles_area{
		margin-left: 25rpx;
		font-size: 14px;
		border: 1rpx solid #d0d0d0;
	}
	.newfiles_btn{
		margin-top: 10px;
		/* margin-bottom: 50px; */
		width: 168px;
		line-height: 44px;
		font-size: 18px;
		font-weight: 500;
		color: #fff;
		text-align: center;
		cursor: pointer;
		height: 44px;
		border-radius: 44px;
		background-image: linear-gradient(to bottom,#ff785b);
		box-shadow: 0 4px 9px 0 #fbc1ba;
	}
</style>
