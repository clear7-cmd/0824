import axjos from 'axios'
import qs from 'qs'
axjos.interceptors.response.use(res=>{
    console.log('=================='+res.config.url+'=====================');
    console.log(res);
    return res
})
const api = '/api'
export const addition = (data)=>{
   return axjos({
       url:api+'/api/menuadd',
       method:'post',
       data:data
   })
}
export const rend = (data)=>{
    return axjos({
        url:api+'/api/menulist',
        method:"get",
        params:data
    })
}
export const info = (data)=>{
    return axjos({
        url:api+'/api/menuinfo',
        method:"get",
        params:data
    })
}
export const dit = (data)=>{
    return axjos({
        url:api+'/api/menuedit',
        method:"post",
        data:data
    })
}
export const menudelete = (data)=>{
    return axjos({
        url:api+'/api/menudelete',
        method:"post",
        data:data
    })
}
export const roleadd = (data)=>{
    return axjos({
        url:api+'/api/roleadd',
        method:"post",
        data:data
    })
}
export const rolelist = ()=>{
    return axjos({
        url:api+'/api/rolelist',
        method:"get",
    })
}
export const roleinfo = (id)=>{
    return axjos({
        url:api+'/api/roleinfo',
        method:"get",
        params:id
    })
}
export const roledelete = (id)=>{
    return axjos({
        url:api+'/api/roledelete',
        method:"post",
        data:id
    })
}
export const roleedit = (data)=>{
    return axjos({
        url:api+'/api/roleedit',
        method:"post",
        data:data
    })
}
export const useradd = (data)=>{
    return axjos({
        url:api+'/api/useradd',
        method:"post",
        data:data
    })
}
export const usercount = ()=>{
    return axjos({
        url:api+'/api/usercount',
        method:"GET",
    })
}
export const userlist = (data)=>{
    return axjos({
        url:api+'/api/userlist',
        method:"GET",
        params:data
    })
}
export const userinfo = (uid)=>{
    return axjos({
        url:api+'/api/userinfo',
        method:"GET",
        params:uid
    })
}
export const useredit = (data)=>{
    return axjos({
        url:api+'/api/useredit',
        method:"POST",
        data:data
    })
}
export const userdelete = (data)=>{
    return axjos({
        url:api+'/api/userdelete',
        method:"POST",
        data:data
    })
}
// 添加
export const cateadd = (data)=>{
    var form  = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/cateadd',
        method:"POST",
        data:form
    })
}
// 获取列表
export const catelist = (data)=>{
    return axjos({
        url:api+'/api/catelist',
        method:"GET",
        params:data
    })
}
// 获取一条数据
export const cateinfo = (data)=>{
    return axjos({
        url:api+'/api/cateinfo',
        method:"GET",
        params:data
    })
}
// 修改
export const cateedit = (data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axjos({
        url:api+'/api/cateedit',
        method:"post",
        data:form
    })
}
// 删除
export const catedelete = (data)=>{
    return axjos({
        url:api+'/api/catedelete',
        method:"post",
        data:data
    })
}
//添加
export const specsadd = (data)=>{
    return axjos({
        url:api+'/api/specsadd',
        method:"post",
        data:data
    })
}
//获取总数
export const specscount = ()=>{
    return axjos({
        url:api+'/api/specscount',
        method:"get",
    })
}
// 分页页面
export const specslist = (data)=>{
    return axjos({
        url:api+'/api/specslist',
        method:"get",
        params:data
    })
}
//添加一条数据
export const specsinfo = (id)=>{
    return axjos({
        url:api+'/api/specsinfo',
        method:"get",
        params:id
    })
}
//编辑
export const specsedit = (data)=>{
    return axjos({
        url:api+'/api/specsedit',
        method:"post",
        data:data
    })
}
//删除
export const specsdelete = (data)=>{
    return axjos({
        url:api+'/api/specsdelete',
        method:"post",
        data:data
    })
}
//管理员登录
export const userlogin = (data)=>{
    return axjos({
        url:api+'/api/userlogin',
        method:"post",
        data:data
    })
}