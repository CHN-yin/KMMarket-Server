# 数据模型设计

## 用户

```js
{
  -id: 'xxx',
  username: '15298764567', // 主键， 唯一
  password: '123456',
  red: {
    value: '红包',
    num: 0
  }
}
```

## 地址

```js
{
  -id: 'xxx',
  username: '15298764567', // 和用户产生关联
  city: 'xx城市',
  distinguish： 'xx区县',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: 'zhangsan',
  phone: '17898763333'
}
```

## 商店

```js
{
  -id: 'xxx',
  name: '商店名称',
  imgUrl: '商店logo',
  sales: 10000,
  expressLimit: 0,
  expressPrice: 0,
  slogan: '活动标语'
}
```

## 商品

```js
{
  -id: 'xxx',
  shopId: '对应的商店id',
  name: '商品名称',
  imgUrl: '商品图片',
  sales: 10,
  price: 33.6,
  oldPrice: 50.6,
  tabs: ['all', 'seckill']
}
```

## 订单

== 订单和商品、地址不是引用关系，是复制关系！！！ ==

```js
{
  username: '15699878888',
  _id: 'xxx',
  shopId: '商店的id',
  shopName: '商店的名称',
  isCanceled: fales, // 订单是否取消
  // 复制地址信息
  address: {
    username: '15298764567',
    city: 'xx城市',
    distinguish： 'xx区县',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: 'zhangsan',
    phone: '17898763333'
  },
  // 复制商品信息
  products: [
    {
      product: {
        shopId: '对应的商店id',
        name: '商品名称',
        imgUrl: '商品图片',
        sales: 10,
        price: 33.6,
        oldPrice: 50.6,
        tabs: ['all', 'seckill']
      },
      orderSales: 3 // 下单数量
    },
    {
      product: {
        shopId: '对应的商店id',
        name: '商品名称',
        imgUrl: '商品图片',
        sales: 10,
        price: 33.6,
        oldPrice: 50.6,
        tabs: ['all', 'seckill']
      },
      orderSales: 3 // 下单数量
    },
  ]
}

```

## 头部

 ```js

{
  errno: 0,
  data: {
    nav: [{
        imgUrl: '导航栏图片',
        desc: '超市便利'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      }
    ],
    banner: [
      {
        imgUrl: '幻灯片图片'
      },
      {
        imgUrl: 'https://img30.360buyimg.com/mobilecms//jfs/t1/104770/12/35759/52529/64d98b67F17346b5a/36814a466961edf9.jpg'
      }
    ]
  },
  "message": "errno !== 0 时的错误信息"
}

 ```