import Mock from 'mockjs'
import test from './test.js'
Mock.mock('/mock/test', 'post', () => {
  return test.page1
})