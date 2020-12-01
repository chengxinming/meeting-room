<template>
	<view class="tab_bar">
		<view class="Tab_mark">
			<text @click="mark">预约会议</text>
		</view>
		<view class="Tab_mine">
			<text @click="mine">我的预约</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
		mark(){
			uni.navigateTo({
			    url: '../../pages/make/make'
			});
		},
		mine(){
			uni.navigateTo({
			    url: '../../pages/mine/mine'
			});
		}
		}
	}
</script>
	
<style scoped>
	.tab_bar{
		position: absolute;
		bottom: 0px;		
		height: 35px;
		width: 100%;
		position: fixed;
	}
	.Tab_mark{
		float: left;
		margin-left: 93rpx;
		width: 80px;
		height: 35px;
		color: #FFFFFF;
		font-size: 15px;
		line-height: 35px;
		text-align: center;
		border-radius: 10%;
		background-color: #169bd5;
	}
	.Tab_mine{
		float: left;
		margin-left: 250rpx;
		width: 80px;
		height: 35px;
		font-size: 15px;
		line-height: 35px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 10%;
		background-color: #169bd5;
	}
</style>
