const sidebar={
    template:`
    <header class="tm-header" id="tm-header">
        <div class="tm-header-wrapper">
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="tm-site-header">
                <div class="mb-3 mx-auto tm-site-logo"><i class="fas fa-times fa-2x"></i></div>            
                <h1 class="text-center">Welcome to Zijun Zhou's Blogs</h1>
            </div>
            <nav class="tm-nav" id="tm-nav">            
                <ul>
                    <li class="tm-nav-item" :class="{active:ifActive('home')}"><a href="index.html" class="tm-nav-link">
                        <i class="fas fa-home"></i>
                        Home
                    </a></li>
                    <li class="tm-nav-item" :class="{active:ifActive('projects')}"><a href="projects.html" class="tm-nav-link">
                        <i class="fas fa-pen"></i>
                        Projects
                    </a></li>
            <li class="tm-nav-item" :class="{active:ifActive('manage')}"><a href="projects.html" class="tm-nav-link">
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
            <p class="tm-mb-80 pr-5 text-white">
            The whole project is constructed by Zijun Zhou. The front-end pages use some components from Element-UI.For more information about me, please press the 'About Me'
    button! Thank you in advance for considering my application! Github:Github:github.com/zijuz13.
            </p>
        </div>
    </header>
    `,
    data(){
      return {
      }
    },
    props:{
      name:{
          type:String,
          required:true,
          default:''
      }
    },
    methods:{
     ifActive(str){
         console.log(this.name);
         return str===this.name;
     }}
}
