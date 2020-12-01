<template>
	<view class="content">
		<Newmark></Newmark>
		<Filemarks></Filemarks>
		<text>mark</text>
	</view>
</template>

<script>
	import Newmark from "@/components/new_mark/new_mark.vue"
	import Filemarks from "@/components/file_marks/file_marks.vue"
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
			Newmark,Filemarks
		}
	}
</script>

<style>
</style>
