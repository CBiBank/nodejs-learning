// 存放全局共用api 譬如文件上传 下载等
import api from '@/utils/http'

export default {
  checkFileChange(params = {}, config = {}) {
    return api.get('/checkFileChange', params, config)
  }
}
