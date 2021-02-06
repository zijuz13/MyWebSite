const sidebar={
    template:`
    <div>
    <header class="tm-header" id="tm-header">
        <div class="tm-header-wrapper">
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="tm-site-header">
                <div class="mb-3 mx-auto tm-site-logo"><i class="fas fa-times fa-2x"></i></div>
                <h1 class="text-center">Welcome to Zijun Zhou's Personal Website</h1>
            </div>
            <nav class="tm-nav" id="tm-nav">
                <ul>
                    <li class="tm-nav-item" :class="{active:ifActive('home')}"><a href="javascript:void(0)" v-on:click="to1('home')" class="tm-nav-link">
                        <i class="fas fa-home"></i>
                        {{name==='blogs'?'All Blogs':'Home'}}
                    </a></li>
                    <li class="tm-nav-item" :class="{active:ifActive('projects')}"><a href="javascript:void(0)" v-on:click="to1('projects')" class="tm-nav-link">
                        <i class="fas fa-pen"></i>
                        Projects
                    </a></li>
                    <li class="tm-nav-item" :class="{active:ifActive('manage')}"><a href="https://www.huajun.link/manage/index.html" class="tm-nav-link">
                        <i class="fas fa-pen"></i>
                        Manage
                    </a></li>
                    <li class="tm-nav-item" :class="{active:ifActive('about')}"><a href="web.html" class="tm-nav-link">
                        <i class="fas fa-users"></i>
                        About Me
                    </a></li>
                    <li class="tm-nav-item" :class="{active:ifActive('contact')}"><a href="contact.html" class="tm-nav-link">
                        <i class="far fa-comments"></i>
                        Contact Me
                    </a></li>
                    <li class="tm-nav-item" :class="{active:ifActive('visitor')}"><a href="web.html" class="tm-nav-link">
                        <i class="fas fa-users"></i>
                        Visitor Statistics
                    </a></li>
                </ul>
            </nav>
            <div class="tm-mb-65">
                <a rel="nofollow" href="https://fb.com" class="tm-social-link">
                    <i class="fab fa-facebook tm-social-icon"></i>
                </a>
                <a href="https://twitter.com" class="tm-social-link">
                    <i class="fab fa-twitter tm-social-icon"></i>
                </a>
                <a href="https://instagram.com" class="tm-social-link">
                    <i class="fab fa-instagram tm-social-icon"></i>
                </a>
                <a href="https://linkedin.com" class="tm-social-link">
                    <i class="fab fa-linkedin tm-social-icon"></i>
                </a>
            </div>
            <p align="center" class="tm-mb-80 pr-5 text-white">
                The whole project is constructed by Zijun Zhou. The front-end pages use some components from Element-UI.For more information about me, please press the 'About Me'
                button! Thank you in advance for considering my application!
            </p>
            <p align="center" class="tm-mb-80 pr-5 text-white"><div style="display: block">Github:&nbsp;&nbsp;<a href="https://github.com/zijuz13">github.com/zijuz13</a></div>Note: Not all the source code of my projects
            has been committed to this Github account.And some extra functions of my website are coming soon.</p>
        </div>
    </header>
    <div class="container-fluid">
     <main class="tm-main">
        <router-view></router-view>
                    <footer class="row tm-row">
                <hr class="col-12">
                <div class="col-md-6 col-12 tm-color-gray">
                    Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-external-link">Zijun Zhou(周子骏)</a>
                </div>
                <div class="col-md-6 col-12 tm-color-gray tm-copyright">
                    Powered By RabbitMQ, Vue.js, Element UI, Webpack, Vue-cli, SpringBoot, MySQL, Redis, Elasticsearch, Quartz, WebDriver, Docker in CentOS, Spring Cloud, etc.
                </div>
            </footer>
            </main>
    </div>
    </div>
    `,
    data(){
      return {
          name:'home'
      }
    },
    methods:{
        ifActive(str) {
            return str === this.name;
        },
        to1(str){
            this.name=str;
            this.$router.push({path:str});
        }
    }
}
