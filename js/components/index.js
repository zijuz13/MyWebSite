const index={
    template:`
<div>
            <!-- Search form -->
            <div style="margin-left: auto">
            <el-input placeholder="Enter Keywords(Powered By Elasticsearch)--Zijun Zhou" v-model="title" @keyup.enter.native="fetchData" style="margin-bottom: 20px;width:45%" >
                <el-button @click="fetchData" slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-row>
                <el-button plain :type="(onlyIfPresent(k))?'success':'info'" v-for="(v,k,i) in aggs" :key="i" @click="handlerFilter(k)"><font style="color: darkgreen">{{k+'('+ v+')'}}</font></el-button>
            </el-row>
            <div>
            </div>
                <el-dialog
                        title="Notification"
                        :visible.sync="dialogVisible"
                        width="38%"
                        >
                    <p style="font-size:30px" v-for="(item,i) in notification.content" :key="i">{{'- '+item}}</p>
                    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogVisible=false"><font style="color:white">Confirm</font></el-button>
  </span>
                </el-dialog>
            <transition name="el-fade-in-linear">
                <el-row v-loading="show">
            <div class="row tm-row">
                <article v-for="(item,i) in items" :key="i" class="col-12 col-md-6 tm-post">
                    <hr class="tm-hr-primary">
                    <a href="javascript:void(0)" @click="toBlog(item.id)" class="effect-lily tm-post-link tm-pt-60">
                        <div class="tm-post-link-inner">
                            <img :src="item.image_uri" alt="Image" class="img-fluid">
                        </div>
                        <span class="position-absolute tm-new-badge">New</span>
                        <h2 class="tm-pt-30 tm-color-primary tm-post-title">{{item.title}}</h2>
                    </a>
                    <p class="tm-pt-30">
                       {{item.content_short}}
                    </p>
                    <div class="d-flex justify-content-between tm-pt-45">
                        <span class="tm-color-primary">{{item.specs.category.join(", ")}}</span>
                        <span class="tm-color-primary">{{huajun.formatDate(Number(item.display_time+''))}}</span>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <span>{{item.commentstatus?'36 comments':'Comment Options Disabled'}}</span>
                        <span>by {{item.author}}</span>
                    </div>
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
<!--                    <span class="d-inline-block mr-3">Page</span>-->
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
            Article,
            dialogVisible:false,
            listQuery:{
                page:1,
                limit:6,
                name:'',
                filter:{
                    category:[]
                }
            },
            items:[],
            totalPages:0,
            total:0,
            huajun,
            title:'',
            show:true,
            aggs:{},
            notification:{}
        }
    },
    created(){
        let obj=this.$route.query
        if(obj&&obj.name&&''!==obj.name){
            this.title=obj['name'];
        }else {
            this.getNotification()
        }
        this.fetchData();
    },
    methods:{
        toBlog(id){
            this.$router.push({path:'blogDisplay',query:{id}})
            console.log(this)
        },
        getNotification() {
            Article.getNotification().then(({data})=>{
                if(!data.hide){
                    this.dialogVisible=true;
                    data.content=data.content.split("\\")
                    this.notification=data;
                }
            })
        },
        formatDate(data){
            return new Date(Number(data+''));
        },
        fetchData(){
            const listQuery=JSON.parse(JSON.stringify(this.listQuery));
            listQuery['name']=this.title;
            listQuery['filter'].category=this.listQuery.filter.category.join(",");
            this.show=true;
            Article.fetchArticle(listQuery)
                .then(({data:{items,totalPages,total,aggs}})=>{
                    this.totalPages=totalPages;
                    this.items=items;
                    this.total=total;
                    this.show=false;
                    this.aggs=aggs;
                })
        },
        handlerFilter(category){
            if(this.onlyIfPresent(category)){
                const listQuery=Object.assign({},this.listQuery);
                listQuery.filter.category=listQuery.filter.category.filter(item=>{
                    return !(item===category);
                })
                this.listQuery=listQuery;
            }else{
                this.listQuery.filter.category.push(category);
            }
        },
        //返回filter中是否有此元素
        onlyIfPresent(category){
            return this.listQuery['filter'].category.find(item=>{
                return item===category;
            })!==undefined;
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
