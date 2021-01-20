const Project={
    url:'https://www.huajun123.com/api/item/projects',
    searchUrl:'https://www.huajun123.com/api/search/projects/all',
    fetchProjects(data){
        // data.status='published'
        return axios.post(this.searchUrl,
           data
        )
    },
    fetchProjectById(id){
        return axios.get(this.url+"/"+id);
    }
}
