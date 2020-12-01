<template>
	<view class="content">
		<view class="newmine_show" >
			<view>
				<text>会议名称:xxxx</text>
			</view>
			<view>
				<text>预约人:xxxx</text>
			</view>
			<view>
				<text>会议地点:xxxx</text>
			</view>
			<view>
				<text>会议状态:xxxx</text>
			</view>
			<view>
				<text>会议时间:xxxx</text>
			</view>
		</view>
		<Filemark @confirm="onConfirm" v-show="isshowes"></Filemark>
	</view>
</template>

<script>
	import Filemark from "../file_marks/file_marks.vue"
	export default {
		data() {
			return {
				isshowes:false
			}
		},
		methods: {
			
		},
		components:{
			Filemark
		}
	}
</script>

<style scoped>
</style>
