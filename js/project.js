const Project={
    url:'http://101.132.194.179:10010/api/item/projects',
    searchUrl:'http://101.132.194.179:10010/api/search/projects/all',
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