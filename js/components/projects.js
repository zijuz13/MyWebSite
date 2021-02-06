const map={
    '持久层':'persistency',
    '前端':'front-end',
    '框架':'framework'
}
const projects={
    template:`
     <div>
            <!-- Search form -->
            <div style="margin-left: auto">
            <el-input placeholder="Enter Project Names(Powered By Elasticsearch)--Zijun Zhou" v-model="title" @keyup.enter.native="fetchData" style="margin-bottom: 20px;width:45%" >
                <el-button @click="fetchData" slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-row v-for="(v,k,i) in aggs" v-if="null!=v&&undefined!=v&&0!=v.length" :key="i">
                <div style="display:inline-block; width:100px;margin-bottom: 10px">{{map[k]}}:</div> <el-button @click="handlerFilter(k,item1)" style="display: inline-block" plain :type="(onlyIfPresent(k,item1))?'success':'info'" v-for="(item1,q) in v" :key="q" ><font style="color: darkgreen">{{item1}}</font></el-button>
<!--                <el-button plain :type="(onlyIfPresent(k))?'success':'info'" v-for="(v,k,i) in aggs" :key="i" @click="handlerFilter(k)"><font style="color: darkgreen">{{k+'('+ v+')'}}</font></el-button>-->
            </el-row>
            <div>
            </div>
            <transition name="el-fade-in-linear">
                <el-row v-loading="show">
            <div class="row tm-row">
                <article v-for="(item,i) in items" :key="i" class="col-12 col-md-6 tm-post">
                    <hr class="tm-hr-primary">
                    <a href="javascript:void(0)" @click="toProject(item.id)" class="effect-lily tm-post-link tm-pt-60">
                        <div class="tm-post-link-inner">
                            <img :src="item.image" alt="Image" class="img-fluid">
                        </div>
                        <span class="position-absolute tm-new-badge">New</span>
                        <h2 class="tm-pt-30 tm-color-primary tm-post-title">{{item.name}}</h2>
                    </a>
                    <p class="tm-pt-30">
                       Main Framework: {{item.salepoint}}
                    </p>
                    <hr>
                    <p class="tm-pt-30">
                    Designed and Implemented All By Zijun Zhou
                    </p>
                </article>
            </div>
                </el-row>
            </transition>
            </div>
            <div class="row tm-row tm-mt-100 tm-mb-75">
                <div class="tm-prev-next-wrapper">
                    <div class="mb-2 tm-mr-20"></div>
                </div>
                <div class="tm-paging-wrapper">
                    <nav class="tm-paging-nav d-inline-block">
                        <el-pagination
                                :page-size.sync="listQuery.limit"
                                :current-page.sync="listQuery.page"
                                :total="total"
                                layout="total, prev, pager, next, jumper">
                        </el-pagination>
                        <ul>
                        </ul>
                    </nav>
                </div>
            </div>
            </div>
    `,
    data(){
        return {
            name:'test',
            Project,
            listQuery:{
                page:1,
                limit:6,
                name:'',
                filter:{
                    '持久层':[],
                    '前端':[],
                    '框架':[]
                }
            },
            map,
            items:[],
            totalPages:0,
            total:0,
            huajun,
            title:'',
            show:true,
            aggs:{}
        }
    },
    created(){
        let obj=this.$route.query
        this.title=obj['name'];
        this.fetchData();
    },
    methods:{
        formatDate(data){
            return new Date(Number(data+''));
        },
        fetchData(){
            const listQuery=JSON.parse(JSON.stringify(this.listQuery));
            listQuery['name']=this.title;
            // listQuery['filter'].category=this.listQuery.filter.category.join(",");
            this.show=true;
            Project.fetchProjects(listQuery)
                .then(({data:{items,totalPages,total,aggs,specs}})=>{
                    this.totalPages=totalPages;
                    this.items=items;
                    this.total=total;
                    this.show=false;
                    this.aggs=specs;
                })
        },
        handlerFilter(k,v){
            if(this.onlyIfPresent(k,v)){
                const listQuery=JSON.parse(JSON.stringify(this.listQuery));
                Object.keys(listQuery.filter).forEach((key)=>{
                    let value=listQuery.filter[key];
                    if(key===k){
                        listQuery.filter[key]=value.filter(fk=>{
                            return fk!==v;
                        })
                    }
                })
                this.listQuery=listQuery;
            }else{
                this.listQuery.filter[k].push(v);
            }
        },
        toProject(id){
          this.$router.push({path:'projectDisplay',query:{id}})
        },
        //返回filter中是否有此元素
        onlyIfPresent(k,v){
            let flag=false;
            Object.keys(this.listQuery.filter).forEach((key)=> {
                if (key === k) {
                    this.listQuery.filter[key].forEach(v1 => {
                        if (v1 === v) {
                            flag=true;
                        }
                    })
                }
            } );
            return flag;
        }
    },
    watch:{
        listQuery:{
            deep:true,
            handler(){
                this.fetchData();
            }
        }
    }
}
