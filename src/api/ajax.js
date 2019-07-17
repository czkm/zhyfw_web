/*
ajax 请求函数模块
*/
import axios from 'axios'
/**
 * 向外部暴漏一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为post
 */
export default function HAxios(url = '', data = {}, token) {
  // 返回值 Promise对象 （异步返回的数据是response.data，而不是response）
  return new Promise(function(resolve, reject) {
    // （利用axios）异步执行ajax请求
    // 这个内部的promise用来保存axios的返回值(promise对象)

    const promise = axios
      .post(url, data, // 传入参数
        {
          headers: {
            'Content-Type': 'application/json',
            'token': token
          }
        },

      )
    promise.then(res => {
      // 成功回调resolve()
      // resolve(res.data)
      resolve(res)
    })
      .catch(e => {
        // 失败回调reject()
        reject(e)
      })
  })
}
