import request from '../utils/request';
export function test() {
  return request({
    url: '/mock/test',
    method: 'post'
  });
}
