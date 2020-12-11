const Article={
    url:'http://localhost:10010/api/blog/blog',
    searchUrl:'http://localhost:10010/api/search/blogs/all',
    fetchArticle(data){
        // data.status='published'
       return axios.post(this.searchUrl,
           huajun.stringify(data)
       )
    },
    fetchArticleById(id){
        return axios.get(this.url+"/"+id);
    }
}