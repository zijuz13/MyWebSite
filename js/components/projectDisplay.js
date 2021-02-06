const project={
    template:`
<div>
                <div class="row tm-row">
                <div class="col-12">
                    <div class="form-inline tm-mb-80 tm-search-form">
                        <input class="form-control tm-search-input" v-model="name" type="text" placeholder="Search Projects" @keyup.enter="searchProject" aria-label="Search">
                        <button class="tm-search-button" type="submit" @click="searchProject">
                            <i class="fas fa-search tm-search-icon" aria-hidden="true"></i>
                        </button>
                        </div>
                </div>
            </div>
            <div class="row tm-row">
                <div class="col-12" style="text-align: center;align-items: center;justify-content: center">
                    <hr class="tm-hr-primary tm-mb-55">
                    <!-- Video player 1422x800 -->
                    <video style="width: 600px;height: 300px" :src="project.video" controls class="tm-mb-40">
                        <source type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <h2 class="pt-2 style tm-color-primary tm-post-title">{{project.name}}</h2>
                            <p>Designed By Zijun Zhou</p>
                            <p v-for="(item,i) in description" :key="i">{{(i+1)+'.'+item}}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    `,
    data(){
        return {
            Project,
            fucker:'asdas',
            huajun,
            project:{

            },
            description:[],
            name:''
        }
    },
    methods:{
     searchProject(){
         this.$router.push({path:'projects',query:{name:this.name}});
     }
    },
    created(){
        let obj=this.$route.query
        Project.fetchProjectById(obj['id']).then(({data})=>{
            this.project=data;
            this.description=data.description.split("\\");
        })
    }
}
