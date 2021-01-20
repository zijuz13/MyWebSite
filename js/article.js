const Article={
    url:'https://www.huajun123.com/api/blog/blog',
    searchUrl:'https://www.huajun123.com/api/search/blogs/all',
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
