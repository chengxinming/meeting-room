<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	 uni-checkbox .uni-checkbox-input {
		 width: 19px;
		 height: 19px;
	      border-radius: 50% !important;
	      color: #ffffff !important;
	    }
	    
	    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
	      border: none !important;
	      background: #1f72f1;
	      border-color: #1f72f1;
	    }
	    
	    uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
	        width: 20rpx;
	        height: 20rpx;
	        line-height: 20rpx;
	        text-align: center;
	        font-size: 18rpx;
	        color: #fff;
	        background: transparent;
	        transform: translate(-70%, -50%) scale(1);
	        -webkit-transform: translate(-70%, -50%) scale(1);
	    }
</style>
