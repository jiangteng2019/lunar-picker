### 概述
- lunar-picker 是一款微信小程序农历日期选择器组件，内部使用 picker-view 、picker-view-column 组件封装；涉及到农历日期的换算使用了calendar.js。

![avatar](https://images.cnblogs.com/cnblogs_com/engeng/2086212/o_211228104352_lunar-picker1.png)
![avatar](https://images.cnblogs.com/cnblogs_com/engeng/2086212/o_211228104227_lunar-picker2.png)

### 使用
lunar-picker 的使用与微信官方 picker 日期选择器类似。

1. 将components、js文件夹下载到对应的项目目录
2. 在需要使用农历日期选择器的页面json文件中 (**注意路径**)

```
  "usingComponents": {
    "lunar-picker": "../../components/lunar-picker"
  },
```


3.在wxml中

```
<view slot="footer" class="footer_style" >
    <lunar-picker bindconfirm="handleLunarDateConfirm" value="{{ pickedLunarDate }}">
        <view>{{ pickedLunarDate }}</view>
    </lunar-picker>
</view>
```
### 属性


属性名 | 类型 | 默认值 | 说明
---|---|---|---
value | string | 当天 | 若不提供value或格式有误，将使用当天的农历日期作为默认日期
bindchange | eventhandle | | 滚动触发的 change 事件
bindconfirm | eventhandle | | 点击确定触发的 confirm 事件



```
event.detail =  {
    Animal: "狗"
    IDayCn: "廿一"
    IMonthCn: "五月"
    Term: null
    astro: "巨蟹座"
    cDay: 4
    cMonth: 7
    cYear: 2018
    date: "2018-7-4"
    festival: null
    format: "2018 戊戌 五月 廿一"
    gzDay: "丁酉"
    gzMonth: "戊午"
    gzYear: "戊戌"
    isLeap: false
    isTerm: false
    isToday: false
    lDay: 21
    lMonth: 5
    lYear: 2018
    lunarDate: "2018-5-21"
    lunarFestival: null
    nWeek: 3
    ncWeek: "星期三"
}
```

### 注意
农历日期的统一格式为：
```
"2021 辛丑 正月 初一"
```
中间使用空格分隔，暂不支持自定义。

