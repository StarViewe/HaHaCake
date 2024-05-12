import { UserInfo } from "os";

//登录接口需要参数的ts类型
export interface loginForm{
    username: string;
    password: string;
}

interface dataType{
    message: string | undefined;
    token:string
}

//登录接口返回的数据的ts类型
export interface loginResponseData{
    code: number;
    data: dataType;
}

//定义服务器返回用户信息相关的ts类型
interface userInfo{
    userId:number,
    username:string,
    password:string,
    desc:string,
    roles:string[],
    buttons:string[],
    routes:string[] ,
    token:string,
    introduction:string,
    avatar:string
}
interface user {
    checkUser:userInfo
}
export interface userResponseData{
    code: number;
    data: user
}