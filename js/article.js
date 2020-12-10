const Article={
    url:'http://localhost:10010/api/blog/blog',
    searchUrl:'http://localhost:10010/api/search/blogs/all',
    fetchArticle(data){
        data.status='published'
       return axios.get(this.searchUrl,{
           params:data
       })
    },
    fetchArticleById(id){
        return axios.get(this.url+"/"+id);
    }
}