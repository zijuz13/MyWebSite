const navibar={
    template:`
          <nav class="navbar navbar-expand-lg navbar-dark pl-0 pr-0">
        <a class="navbar-brand m-0" href="web.html"><span class="fa fa-gamepad"></span> Huajun</a>
        <!-- if logo is image enable this   
            <a class="navbar-brand" href="#web.html">
                <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            </a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-lg-4" :class="{active:ifActive('web')}">
              <a class="nav-link pl-0 pr-0" href="web.html">Home</a>
            </li>
            <li class="nav-item mr-lg-4" :class="{active:ifActive('about')}">
              <a class="nav-link pl-0 pr-0" href="about.html">About</a>
            </li>
            <li class="nav-item mr-lg-4" :class="{active:ifActive('work')}">
              <a class="nav-link pl-0 pr-0" href="services.html">Work Experience</a>
            </li>
            <li class="nav-item" :class="{active:ifActive('contact')}">
              <a class="nav-link pl-0 pr-0" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    `,
    props:{
      name:{
          type:String,
          default:'',
          required:true
      }
    },
    methods:{
        ifActive(str){
            return this.name===str;
        }
    }
}
