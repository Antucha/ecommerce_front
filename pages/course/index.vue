<template>
    <div>
      <section class="hero">
        <div class="container">
          <div class="row">
            <template>
              <div class="col-lg-6 offset-lg-3">
                <b-button v-if="userIsAuthor" id="show-btn" @click="showModal">Crear curso</b-button>
                <b-card v-if="loading">
                  <template #header class="card-skeleton-content">
                    <div class="card-skeleton-content">
                      <b-skeleton class="mx-1" type="avatar"></b-skeleton>
                      <b-skeleton width="100%"></b-skeleton>
                    </div>

                  </template>


                  <br>
                  <b-card-text>
                    <b-skeleton width="100%"></b-skeleton>
                    <b-skeleton width="100%"></b-skeleton>
                    <b-skeleton width="100%"></b-skeleton>
                  </b-card-text>

                </b-card>

              </div>
              <div v-if="!loading" class="courses-container col-lg-6 offset-lg-3 w-100 d-flex flex-wrap">
                <b-card no-body class="overflow-hidden mt-1 mb-1" style="max-width: 540px;" v-for="(course,index) in curses" :key="index">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img :src="course.imgUrl" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body :title="course.name">
                        <b-card-text>
                          {{course.abstract}}
                        </b-card-text>
                        <b-form-rating v-model="course.starRating"></b-form-rating>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>

            </template>
          </div><!--/ row -->
        </div><!--/ container -->
      </section>
      <b-modal ref="my-modal" hide-footer title="">
      <div class="d-block text-center">
        <h3><span v-if="userIsAuthor">Crea</span><span v-else>Califica</span> un curso</h3>
        <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Nombre del curso:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          :disabled="!userIsAuthor"
          v-model="courseModel.name"
          placeholder="Nombre del curso"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Url de la imagen:" label-for="input-2">
        <b-form-input
          id="input-2"
          :disabled="!userIsAuthor"
          v-model="courseModel.imgUrl"
          placeholder="Url de la imagen del curso"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Resumen del curso:" label-for="input-2">
        <b-form-input
          id="input-2"
          :disabled="!userIsAuthor"
          v-model="courseModel.abstract"
          placeholder="Resumen del curso"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-card v-if="!userIsAuthor" class="mt-3" header="Brinda tu calificación">
      <b-form-rating v-model="ratingUSer"></b-form-rating>
    </b-card>
  </div>
      </div>
      <b-button v-if="userIsAuthor" class="mt-3" variant="outline-danger" block @click="createCourse()">Crear curso</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Cerrar modal</b-button>
    </b-modal>
    </div>
</template>

  <script>
    import {HTTP} from "../../config/HttpBase";
    import { mapMutations, mapGetters } from 'vuex'
    import { axios } from "axios";

  export default {

    data() {
      return {
        tweets: [],
        ratingUSer: 0,
        password: '',
        error: '',
        courseModel: {
          name: '',
          imgUrl: '',
          abstract: ''
        },
        loading: true,
        dex: 'PancakeSwap',
        loginData: {
          email: null,
          password: null
        },
        geeTest: '',
        curses: [
        ],
        notCourses: false
      }
    },
    methods: {
      createCourse(){
        let token = this.userInfo.token;
        if(this.courseModel.name == ''||
        this.courseModel.imgUrl =='' ||
        this.courseModel.abstract ==''){
          console.log('userIsAuthor: ', this.userIsAuthor)
          this.$bvToast.toast('Rellenar todos los campos', {
            title: `Crear curso`,
            variant: 'danger',
            solid: true
          })
        }else{

         const  body = {
              headers: {Authorization: `Bearer ${token}`},
              courseModel: this.courseModel
            }
          HTTP.post('/api/course', body,{
            headers: {Authorization: `Bearer ${token}`}
          })
          .then(response => {
            this.getAllCourses()
            this.hideModal()
            console.log('Curso creado: ', response)
          })
          .catch(e => {
            console.error(e)
          })
        }
      },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      getAllCourses(){
        const token = this.userInfo.token;

          HTTP.get('/api/course',{
            headers: {Authorization: `Bearer ${token}`}
          })
          .then(response => {
            console.log('Cursos extraidos: ', response)
            this.curses = response.data.data
            this.loading = false;
            if(this.curses.length==0){
              this.notCourses = true;
            }
          })
          .catch(e => {
            console.error(e)
          })

      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async validateImage(imgUrl){
      try{
        console.log('imgurl: ', imgUrl)
        const data = await axios.get(imgUrl)
        console.log('data img: ', data)

      }catch(e){
        return 0;
      }
    }
    },
    mounted() {
      this.getAllCourses()
    },
    computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      isLogged: 'isLogged',
      getToken: 'getToken',
      userInfo: 'userInfo',
      userIsAuthor: 'userIsAuthor'
    }),

  },
  }
  </script>
<style scoped lang="css">


.hero {
  padding: 6.25rem 0px !important;
  margin: 0px !important;

}
.cardbox {
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 0px !important;
}

/* ------------------------------- */
/* Cardbox Heading
---------------------------------- */
.cardbox .cardbox-heading {
  padding: 16px;
  margin: 0;
}
.cardbox .btn-flat.btn-flat-icon {
 border-radius: 50%;
 font-size: 24px;
 height: 32px;
 width: 32px;
 padding: 0;
 overflow: hidden;
 color: #fff !important;
 background: #b5b6b6;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}
.cardbox .float-right .dropdown-menu{
  position: relative;
  left: 13px !important;
}
.cardbox .float-right a:hover{
  background: #f4f4f4 !important;
}
.cardbox .float-right a.dropdown-item {
  display: block;
  width: 100%;
  padding: 4px 0px 4px 10px;
  clear: both;
  font-weight: 400;
  font-family: 'Abhaya Libre', serif;
  font-size: 14px !important;
  color: #848484;
  text-align: inherit;
  white-space: nowrap;
  background: 0 0;
  border: 0;
}

/* ------------------------------- */
/* Media Section
---------------------------------- */
.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.media .mr-3{
  margin-right: 1rem !important;
}
.media img{
  width: 48px !important;
  height: 48px !important;
  padding: 2px;
  border: 2px solid #f4f4f4;
}
.media-body {
  -ms-flex: 1;
  flex: 1;
  padding: .4rem !important;
}
.media-body p{
  font-family: 'Rokkitt', serif;
  font-weight: 500 !important;
  font-size: 14px;
  color: #88898a;
}
.media-body small span{
  font-family: 'Rokkitt', serif;
  font-size: 12px;
  color: #aaa;
  margin-right: 10px;
}


/* ------------------------------- */
/* Cardbox Item
---------------------------------- */
.cardbox .cardbox-item {
    position: relative;
    display: block;
    white-space: pre-wrap;
}
.cardbox .cardbox-item img{
}
.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}
.fw {
    width: 100% !important;
	height: auto;
}


/* ------------------------------- */
/* Cardbox Base
---------------------------------- */
.cardbox-base{
 border-bottom: 2px solid #f4f4f4;
}
.cardbox-base ul{
 margin: 10px 0px 10px 15px!important;
 padding: 10px !important;
 font-size: 0px;
  display: inline-block;
}
.cardbox-base li {
  list-style: none;
  margin: 0px 0px 0px -8px !important;
  padding: 0px 0px 0px 0px !important;
  display: inline-block;
}

.cardbox-base li a{
  margin: 0px !important;
  padding: 0px !important;
}
.cardbox-base li a svg{
 position: relative;
 top: 4px;
 font-size: 16px;
 color: #8d8d8d;
 margin-right: 15px;
}
.cardbox-base li a span{
 font-family: 'Rokkitt', serif;
 font-size: 14px;
 color: #8d8d8d;
 margin-left: 20px;
 position: relative;
 top: 5px;
}
.cardbox-base li a em{
 font-family: 'Rokkitt', serif;
 font-size: 14px;
 color: #8d8d8d;
 position: relative;
 top: 3px;
}
.cardbox-base li a img{
  width: 25px;
  height: 25px;
  margin: 0px !important;
  border: 2px solid #fff;
}


/* ------------------------------- */
/* Cardbox Comments
---------------------------------- */
.cardbox-comments{
  padding: 10px 40px 20px 40px !important;
  font-size: 0px;
  text-align: center;
  display: inline-block;
}
.cardbox-comments .comment-avatar img{
  margin-top: 1px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
}
.cardbox-comments .comment-body {
  overflow: auto;
}
.search {
 position: relative;
 right: -60px;
 top: -40px;
 margin-bottom: -40px;
 border: 2px solid #f4f4f4;
 width: 100%;
 overflow: hidden;
}
.search input[type="text"] {
 background-color: #fff;
 line-height: 10px;
 padding: 15px 60px 20px 10px;
 border: none;
 border-radius: 4px;
 width: 350px;
 font-family: 'Rokkitt', serif;
 font-size: 14px;
 color: #8d8d8d;
 height: inherit;
 font-weight: 700;
}
.search button {
 position: absolute;
 right: 0;
 top: 0px;
 border: none;
 background-color: transparent;
 color: #bbbbbb;
 padding: 15px 25px;
 cursor: pointer;

 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}
.search button i {
 font-size: 20px;
 line-height: 30px;
 display: block;
}


/* ------------------------------- */
/* Author
---------------------------------- */
.author a{
 font-family: 'Rokkitt', serif;
 font-size: 16px;
 color: #00C4CF;
}
.author p{
 font-family: 'Rokkitt', serif;
 font-size: 16px;
 color: #8d8d8d;
}
</style>
