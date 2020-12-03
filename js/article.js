const Article={
    url:'http://localhost:10010/api/blog/blog',
    fetchArticle(data){
       return axios.get(this.url,{
           params:data
       })
    }
}