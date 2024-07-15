<template>
    <header>
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 left-item">
                        <ul></ul>
                    </div>
                    <div class="col-lg-5 right-item">
                        <ul>
                            <li>
                                <a href="/"><i class="fas fa-language"></i> العربية</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav id="nav-head" class="header-nav">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 nav-img">
                        <a href="/Home">
                            <img src="../../images/logo.png" alt="Logo" />
                        </a>
                        <a data-toggle="collapse" data-target="#menu" href="#menu">
                            <i class="fas d-block d-md-none small-menu fa-bars"></i>
                        </a>
                    </div>
                    <div id="menu" class="col-md-9 d-none d-md-block nav-item">
                        <ul>
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/universitiesGuide">Universities Guidebooks</a></li>
                            <li><a href="/AdmissionStatus">Admissions Status</a></li>
                            <li><a href="/Scholarships">Scholarships</a></li>
                            <li><a href="/CertificatesCalculator">Certificates Calculator</a></li>
                            <li><a href="/News">News</a></li>
                            <li><a href="/signup">signup</a></li>
                            <li><a href="/ContactUs">Contact Us</a></li>
                            <li><p>{{name}}</p></li>
                            <li><button v-if="name" class="btn btn-sm btn-primary" @click="out">out</button></li>
                            <!-- <li class="auth-buttons">
                                <a href="/profile" class="btn btn-primary">
                                    <i class="fas fa-user-circle"></i> Profile
                                </a>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return{
            name:'',
        }
    },
    methods:{
        out(){
            localStorage.removeItem('name');
            this.name = '';
        }
    },
    created(){
        this.name = localStorage.getItem('name');
    }
};
</script>

<style scoped>
    a{
        color:white;
    }

    li p{
        color: red;
    }
</style>