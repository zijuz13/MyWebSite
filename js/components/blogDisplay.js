const blog={
    template:`
<div>
                <div class="row tm-row">
                <div class="col-12">
                    <div class="form-inline tm-mb-80 tm-search-form">
                        <input class="form-control tm-search-input" v-model="name" @keyup.enter="searchBlog" type="text" placeholder="Search Blogs" aria-label="Search">
                        <button class="tm-search-button" @click="searchBlog" type="submit">
                            <i class="fas fa-search tm-search-icon" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row tm-row">
                <div class="col-12" style="text-align: center;align-items: center;justify-content: center">
                    <hr class="tm-hr-primary tm-mb-55">
                    <!-- Video player 1422x800 -->
                      <img :src="article.image_uri">
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div v-if="null!=article&&undefined!=article&&''!==article.title">
                            <h2 class="pt-2 tm-color-primary tm-post-title">{{article.title}}</h2>
                            <p class="tm-mb-40">{{formatDate}} posted by {{article.author}}</p>
                            <span v-html="article.content"></span>
                            <span class="d-block text-right tm-color-primary">{{categoryStr}}</span>
                        </div>
                        <div v-else>
                            <h2 class="pt-2 tm-color-primary tm-post-title" style="margin-top:0px;margin-bottom: 500px">The database does not have the relevant blog item to the specified id</h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    `,
    data(){
        return {
            Article,
            huajun,
            article:{
                title:''
            },
            name:''
        }
    },
    methods:{
    searchBlog(){
        this.$router.push({path:'home',query:{name:this.name}});
    }
    },
    created(){
        let obj=this.$route.query
        Article.fetchArticleById(obj['id']).then(({data})=>{
            this.article=data;
        })
    },
    computed: {
        formatDate() {
            return huajun.formatDate(Number(this.article.display_time + ''));
        },
        categoryStr(){
            let newArray=JSON.parse(this.article.category);
            return newArray.join(" . ");
        }
    }
}
