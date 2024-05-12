//进行axios的二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
//第一步：利用axios的create方法，创建一个axios实例（其他配置：基础路径，超时时间）
let request = axios.create({
    //基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,//基础路径会携带/api
    //超时时间
    timeout: 10000
})
//第二步：request示例添加 拦截器
request.interceptors.request.use((config)=> {
    //配置对象config内包含请求体headers，常给服务器端携带公共参数
    //必须返回配置对象
    //可以完成请求条等功能
    return config;
});
//第三步：response示例添加 拦截器
request.interceptors.response.use((response)=>{
    //成功回调
    //简化数据(不.data会返回很多东西,一般只需要服务器返回的数据)
    return response.data
},(error)=>{
    //失败回调，一般处理http网络错误
    //定义一个变量存储网络错误信息
    let message = '';
    //http状态码
    let status = error.response.status;
    switch(status){
        case 400:
            message = '请求错误';
            break;
        case 401:
            message = '未授权，请登录';
            break;
        case 403:
            message = '拒绝访问';
            break;
        case 404:
            message = '请求地址错误';
            break;
        case 408:
            message = '请求超时';
            break;
        default:
            message = '网络出错'
            break;
    }
    //提示错误信息
    ElMessage({
        type: 'error',
        message
    });
    return Promise.reject(error);
})
export default request;
//实际上axios和request是同一个东西，只不过request封装了拦截器等其他功能
//不能再在请求路径里加/api，否则就会多出一个/api