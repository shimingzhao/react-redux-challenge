const ordersWithoutOrder = (orders, order) => orders.filter(_order => _order.orderid !== order.orderid)

const orderInOrders = (orders, order) => orders.filter(_order => _order.orderid === order.orderid)[0]

const orderWithoutItem = (order, item) => order.filter(orderItem => orderItem.itemid !== item.itemid)

const itemInOrder = (order, item) => order.filter(orderItem => orderItem.itemid === item.itemid)[0]

const orderDelete = (orders, order) => orders.filter(_order => _order.orderid !== order.orderid)

const uuid = (len, radix) => {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  let uuid = [], i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    let r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

export const addToOrder = (order, item) => {
  const orderItem = itemInOrder(order, item)
  return orderItem === undefined
    ? [...orderWithoutItem(order, item), {...item, quantity: 1, itemid: uuid(8, 10)}]
    : [...orderWithoutItem(order, item), {...orderItem, quantity: orderItem.quantity + 1}]
}

export const removeFromOrder = (order, item) => {
  return item.quantity === 1
    ? [...orderWithoutItem(order, item)]
    : [...orderWithoutItem(order, item), {...item, quantity: item.quantity - 1}]
}

export const removeAllFromOrder = (order, item) => {
  return [...orderWithoutItem(order, item)]
}

export const addOrder = (orders, order) => {
  return [...orders, {...order, orderid: uuid(8, 16)}]
}

export const deleteOrder = (orders, order) => {
  return [...orderDelete(orders, order)]
}