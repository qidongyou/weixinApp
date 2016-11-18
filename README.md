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

