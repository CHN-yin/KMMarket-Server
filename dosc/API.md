# API 设计

## 注册

### url 

`/api/user/register`

### method 

`post`

### request body

``` js
{
  username: '',
  password: ''
}
```

### response body

``` js
{
  errno: 0,
  message: 'errrno !== 0 错误信息'
}
```

## 登录

### url 

`/api/user/login`

### method 

`post`

### request body

``` js
{
  username: '',
  password: ''
}
```

### response body

``` js
{
  errno: 0,
  message: 'errrno !== 0 错误信息'
}
```
## 忘记密码

### url 

`/api/user/changepwd`

### method 

`post`

### request body

``` js
{
  username: '',
  password: ''
}
```

### response body

``` js
{
  errno: 0,
  message: 'errrno !== 0 错误信息'
}
```

## 获取用户信息

### url 

`/api/user/userInfo`

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: {
    username: 'xxx',
    nickname: 'xxx',
    imgUrl: '头像',
    red: {
      value: '红包',
      num: 0
    },
    coupon: {
      value: '优惠券',
      num: 0
    },
    bean: {
      value: '金豆',
      num: 0
    },
    iou: {
      value: '白条',
      num: 0
    }
  }
  message: 'errrno !== 0 错误信息'
}
```

## 创建收货地址

### url 

`/api/user/address`

### method 

`post`

### request body

``` js
{
  username: '18739202937'
  city: 'xx城市',
  distinguish: 'xx区县',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '15678679869'
}
```

### response body

``` js
{
  errno: 0,
  data: {
    _id: '收货地址的id',
    username: '18739202937',
    city: 'xx城市',
    distinguish: 'xx区县',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '15678679869'
  },
  message: 'errno !== 0 错误信息'
}
```

## 获取收货地址列表

### url 

`/api/user/address`

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: [
    {
      _id: '收货地址的id',
      city: 'xx城市',
      distinguish: 'xx区县',
      department: 'xx小区',
      houseNumber: '门牌号',
      name: '张三',
      phone: '15678679869'
    }
  ]
  message: 'errno !== 0 错误信息'
}
```

## 获取单个收货地址

### url 

`/api/user/address/:id`   （':id' 是一个动态参数，服务端可获取具体的参数值）

示例：`/api/user/address/1`

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: {
    id: '收货地址的id',
    city: 'xx城市',
    distinguish: 'xx区县',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '15678679869'
  }
  message: 'errno !== 0 错误信息'
}
```

## 更新收货地址

### url 

`/api/user/address/:id`   （':id' 是一个动态参数，服务端可获取具体的参数值）

示例：`/api/user/address/1`

### method 

`patch`

### request body

``` js
{
  city: 'xx城市',
  distinguish: 'xx区县',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '15678679869'
}
```

### response body

``` js
{
  errno: 0,
  message: 'errno !== 0 错误信息'
}
```

## 删除收货地址

### url 

`/api/user/address/:id`


### method 

`delete`

### request body

``` js
{
  username: '',
  _id: '收货地址id'
}
```

### response body

``` js
{
  errno: 0,
  message: 'errno !== 0 错误信息'
}
```

## 附近商店

### url 

`/api/shop/hot-list`

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: [
    {
      _id: '商店 id',
      name: '商店名称',
      imgUrl: '商店的图片 url',
      sales: 10000, // 月售
      expressLimit: 0, // 起送价格
      slogan: 'VIP 尊享满 89 元减 4 元运费券'
    }
  ]
  message: 'errno !== 0 错误信息'
}
```

## 商店详情

### url 

`/api/shop/:id` （':id' 是一个动态参数，服务端可获取具体的参数值）

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: {
    _id: '商店 id',
    name: '商店名称',
    imgUrl: '商店的图片 url',
    sales: 10000, // 月售
    expressLimit: 0, // 起送价格
    slogan: 'VIP 尊享满 89 元减 4 元运费券',
    tabs: ['all', 'seckill']
  }
  message: 'errno !== 0 错误信息'
}
```

## 查询（某个）商店的商品列表

### url 

`/api/shop/:id/products`

### query

`tab=全部商品`

举例 `/api/shop/1/products?tab=all`

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: [
    {
      _id: '商品的id',
      name: '商品的名称',
      imgUrl: 'xxx.png',
      sales: 10, // 月售
      price: 33.6, // 优惠价格
      oldPrice: 53.6 // 原价
    }
  ]
  message: 'errno !== 0 错误信息'
}
```

## 创建订单

### url 

`/api/order`

### method 

`post`

### request body

``` js
{
  addressId: '收货地址的 id',
  shopId: '商店的 id',
  shopName: '商店的名称',
  isCanceled: true, // 订单是否被取消，true 已取消，fales 已下单
  products: [
    {
      id: '商品的id',
      num: 3, // 购买数量
    }
  ]
}
```

### response body

``` js
{
  errno: 0,
  data: {
    _id: '订单 id'
  }
  message: 'errno !== 0 错误信息'
}
```

## 获取首页头部内容

### url 

`/api/header`

### method 

`get`

### request body

无

### response body

``` js
{
  errno: 0,
  data: {
    nav: [
      { imgUrl: '导航栏图片', desc: '导航栏名称' },
      { imgUrl: '', desc: '' },
    ],
    banner: [
      { imgUrl: '幻灯片图片' },
      { imgUrl: '' },
    ]
  }
  message: 'errno !== 0 错误信息'
}
```
