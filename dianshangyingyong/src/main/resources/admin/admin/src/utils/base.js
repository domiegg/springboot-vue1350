const base = {
    get() {
        return {
            url : "http://localhost:8080/dianshangyingyong/",
            name: "dianshangyingyong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianshangyingyong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电商应用系统"
        } 
    }
}
export default base
