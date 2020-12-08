<template>
	<view class="content">
		<view class="newmine_show" v-for="item in parson">
			<view>
				<text>会议名称:{{item.designation}}</text>
			</view>
			<view>
				<text>预约人:{{item.name}}</text>
			</view>
			<view>
				<text>会议地点:{{item.place}}</text>
			</view>
			<view>
				<text>会议状态:xxx</text>
			</view>
			<view>
				<text>会议时间:{{item.comtime}}</text>
			</view>
		</view>
		<button type="default" @click="aaa" class="new_btn">取消预约</button>
		<clxDialog :isShow='show' @dialogConfirm='dialogConfirm' @dialogCancel='dialogCancel' :content="dialogContent"></clxDialog>
	</view>
</template>

<script>
		import clxDialog from "../../components/dialog/clx-dialog.vue"
	export default {
		data() {
			return {
				cofing1:"",
				cofing2:"",
				cofing3:"",
				cofing4:"",
				parson:[],
				title: 'Hello',
				show: false,
				dialogContent:'确定要取消预约吗?'
			}
		},
		onLoad(option) {
			// let consfing=JSON.parse(option.txt)
			console.log(option)
			let conesfing=option.txt
			let cofing=conesfing.split("test=")
			this.cofing1=JSON.parse(cofing[0])
			this.cofing2=JSON.parse(cofing[1])
			this.cofing3=JSON.parse(cofing[2])
			this.cofing4=JSON.parse(cofing[3])
			this.comment()
		},
		methods: {
			comment(){
				this.parson.push({
					designation:this.cofing1,
					name:this.cofing2,
					place :this.cofing3,
					comtime:this.cofing4
				})
				// console.log(parson)
			},
			aaa(){
				// this.show=true
				this.show=true
			},
			
			dialogConfirm() {
				this.show = false
				this.parson=[]
			},
			dialogCancel() {
				this.show = false
			}
			
			
		},
		components:{
			clxDialog
		}
	}
</script>

<style scoped>
	.new_btn{
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
