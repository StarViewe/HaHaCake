//创建假接口
function createFakeUserList() {
    return [
        {
            userId: 1,
            username: 'admin',
            password: '123456',
            desc: '超级管理员',
            roles:['超级管理员'],
            buttons:['cuser.detail'],
            routes:['content/homepage'],
            token: 'AdminToken',
            introduction: '我是超级管理员',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        },
        {
            userId: 2,
            username: 'test',
            password: '123456',
            desc: '普通用户',
            roles:['普通用户'],
            buttons:['cuser.detail'],
            routes:['content/homepage'],
            token: 'NormalToken',
            introduction: '我是普通用户',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        }
    ]
}//此函数执行会返回一个含有两个用户信息的数组

export default [
    //登录接口
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }) => {
            //获取请求体携带的用户名和密码
            const { username, password } = body;
            //调用获取用户信息函数，判断是否存在此用户
            const checkUser = createFakeUserList().find(
                item => item.username === username && item.password === password,
            );
            //用户不存在
            if (!checkUser) {
                return {
                    code: 201,
                    data: { message: '账号或密码错误！' }
                }
            }
            //用户存在，返回用户信息
            const {token} = checkUser;
            return { code: 200, data: { token } }
        },
    },
    //获取用户信息
    {
        url:'api/user/info',
        method:'get',
        response:(request) =>{
            //获取请求头携带token
            const token = request.headers.token;
            //查看是否存在此token用户信息
            const checkUser = createFakeUserList().find((item)=>item.token === token);
            //用户不存在
            if (!checkUser) {
                return {
                    code: 201,
                    data: { message: '获取用户信息失败' }
                }
            }
            //用户存在，返回用户信息
            return { code: 200, data: { checkUser } }
        }
    }
]