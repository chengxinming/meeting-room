<template>
	<view class="aaa">
		<Tabtwo></Tabtwo>
		<view class="Text_mine">
			<Newmine></Newmine>
		</view>
		
		
	</view>
</template>

<script>
	import Tabtwo from "@/components/Tab/Tabtwo.vue"
	import Newmine from "@/components/new_mine/new_mine.vue"
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
	
		},
		components:{
			Tabtwo,Newmine
		}
	}
</script>

<style>
	.Text_mine{
		margin-top: 50px;
	}
</style>
