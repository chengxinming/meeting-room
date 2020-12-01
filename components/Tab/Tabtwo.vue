<template>
	<view class="tab_bar">
		<view class="Tab_profile">
			<text @click="profile">我的会议</text>
		</view>
		<view class="Tab_history">
			<text @click="history">历史会议</text>
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
		profile(){
			uni.navigateTo({
			    url: '../../pages/profile/profile'
			});
		},
		history(){
			uni.navigateTo({
			    url: '../../pages/history/history'
			});
		}
		}
	}
</script>
	
<style scoped>
	.tab_bar{
		position: absolute;
		top: 0px;	
		width: 100%;
		height: 35px;
		position: fixed;
	}
	.Tab_profile{
		float: left;
		width: 45%;
		height: 35px;
		color: #FFFFFF;
		font-size: 15px;
		line-height: 35px;
		text-align: center;
		border-radius: 10%;
		background-color: #169bd5;
		overflow: hidden;
	}
	.Tab_history{
		float: right;
		width: 45%;
		height: 35px;
		font-size: 15px;
		line-height: 35px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 10%;
		background-color: #169bd5;
		overflow: hidden;
	}
</style>
