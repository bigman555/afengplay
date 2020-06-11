(function(Vue,axios){
    //配置域名baseURL
    const Axios = axios.create({
        baseURL:"https://apimusic.linweiqin.com/",
        timeout:10000,
    });
    // 调加请求拉截器
    Axios.interceptors.request.use(function(config){
        app.islonding=true
        return config;
    },function(error){
        return Promise.reject(error)
    })
    //返回拉截器，只获取data
    Axios.interceptors.response.use(function (response) {
        app.islonding=false
        return response.data
    },function(error){
        return Promise.reject(error)
    })
    window.Axios = Axios
})(Vue,axios)