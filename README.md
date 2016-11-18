# weixinApp 微信小程序toDoList

## 列表页面

简单的列表页面和数据添加，此时有一些问题

* setData在清除一些用户交互的页面的时候有些问题。
* inputA 是一个输入框，当我提交数据的时候，需要清除表单的数据，setData不能清除很好的清除。



## 添加数据
使用**wx.setStorageSync(KEY,DATA)**.
```javascript
try {
    wx.setStorageSync('key', 'value')
} catch (e) {
}

```

## 删除数据
使用 **wx.removeStorageSync(KEY)**
```javascript
try {
  wx.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}

```


## 详情页面
此时用到路由机制
```html
<navigator url="../test/logs" >
	查看
</navigator>
```

## 模块化的测试

## 使用了一些ES语法

## 微信wx.request

>wx.request发起的是https请求。**一个微信小程序，同时只能有5个网络请求连接。**

在测试wx.request的时候.

* wx.request  post传参数，开发者服务器取不到参数

```php
// 在php内嵌入此句也不适合。
header('Access-Control-Allow-Origin:*');
// 可能要在nginx 服务器上配置一些参数，可以让微信小程序调用
```
* 基本上get是没有问题的。（url各种带参数是没有问题的）
* 其他的API没有测试,用的不多,如果有需要再进行测试。
```javascript
var count = 0
var maxRequest = 100
var getRequest = function(){

	wx.request({
		// 此域名必需要配置
		url: 'https://test.com/t/wxRes', //仅为示例，并非真实的接口地址
		success: function(res) {
			count++
			if(count < maxRequest){
				getRequest()
			} 
		},
		fail: function(res){
			console.log(res)
		}
	})
}
// https请求 
for(var i = 0; i< 5;i++){
	getRequest()
}
// 如果直接for10次的话，肯定有错误。这里只能for5次
```

## 其他相关文章

* [segmentfault相关文档](https://segmentfault.com/a/1190000007003240)






