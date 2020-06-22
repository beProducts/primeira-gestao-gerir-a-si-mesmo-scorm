<template>
  <div class="be-toolbar">
    <div class="wrapper">
      <div>
        <p class="center-align">
          <a href="javascript:void(0);" @click="openNavigation">
            <MapMarker />
            <span class="text">Mapa</span>
          </a>
        </p>
      </div>
      <div v-if="scormMode !== 'ON'">
        <p class="center-align">
          <a href="javascript:void(0);" @click="openHelpBar">
            <HelpCircle />
            <span class="text">Ajuda</span>
          </a>
        </p>
      </div>
      <div v-if="scormMode !== 'ON'">
        <p class="center-align">
          <a href="javascript:void(0);" @click="toggleCommentBar">
            <ChatIcon />
            <span class="text">Comentar</span>
          </a>
        </p>
      </div>
    </div>

    <!-- Be Navigation Bar -->
    <div class="be-navigation" ref="beNavigation">
      <div class="header-toolbar">
        <div class="account-functions">
          <a v-if="scormMode !== 'ON'" href="javascript:void(0);" class="close" @click="goToRoute('/profile');">
            <span>Perfil</span> <AccountEdit />
          </a>
          <span v-if="scormMode !== 'ON'" class="separator">|</span>
          <a v-if="scormMode !== 'ON'" href="javascript:void(0);" class="close" @click="logoff">
            <span>Sair</span> <Logout />
          </a>
        </div>
        <a href="javascript:void(0);" class="close" @click="closeNavigation">
          <span>Fechar</span> <CloseIcon />
        </a>
      </div>
      <div class="nav-body">
        <div class="be-menu-main">
          <div class="nav-body-item">
            <NavMenuItem
              text="Sobre gerir a si mesmo"
              src="menu-icon-19.png"
              asrc="menu-icon-19-active.png"
              route="/sobre-gerir-a-si-mesmo"
              :selected="route19Selected"
              :checked="route19Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O que já sei sobre mim"
              src="menu-icon-20.png"
              asrc="menu-icon-20-active.png"
              route="/o-que-ja-sei-sobre-mim"
              :selected="route20Selected"
              :checked="route20Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O olhar do outro sobre mim"
              src="menu-icon-21.png"
              asrc="menu-icon-21-active.png"
              route="/o-olhar-do-outro-sobre-mim"
              :selected="route21Selected"
              :checked="route21Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Meu olhar sobre quem sou Eu"
              src="menu-icon-22.png"
              asrc="menu-icon-22-active.png"
              route="/meu-olhar-sobre-quem-sou-eu"
              :selected="route22Selected"
              :checked="route22Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Meu olhar sobre a minha história"
              src="menu-icon-23.png"
              asrc="menu-icon-23-active.png"
              route="/meu-olhar-sobre-a-minha-historia"
              :selected="route23Selected"
              :checked="route23Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Análise"
              src="menu-icon-24.png"
              asrc="menu-icon-24-active.png"
              route="/analise"
              :selected="route24Selected"
              :checked="route24Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Impacto dos sentimentos"
              src="menu-icon-25.png"
              asrc="menu-icon-25-active.png"
              route="/impacto-dos-sentimentos"
              :selected="route25Selected"
              :checked="route25Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Mindset de liderança"
              src="menu-icon-26.png"
              asrc="menu-icon-26-active.png"
              route="/mindset-de-lideranca"
              :selected="route26Selected"
              :checked="route26Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Ansiedade e Normose"
              src="menu-icon-27.png"
              asrc="menu-icon-27-active.png"
              route="/ansiedade-e-normose"
              :selected="route27Selected"
              :checked="route27Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="O efeito Dunning-kruger"
              src="menu-icon-28.png"
              asrc="menu-icon-28-active.png"
              route="/o-efeito-dunning-kruger"
              :selected="route28Selected"
              :checked="route28Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Síndrome do Impostor"
              src="menu-icon-29.png"
              asrc="menu-icon-29-active.png"
              route="/sindrome-do-impostor"
              :selected="route29Selected"
              :checked="route29Check"
              @changeRoute="closeNavigation" />
          </div>
          <div class="nav-body-item">
            <NavMenuItem
              text="Os próximos 15 dias"
              src="menu-icon-30.png"
              asrc="menu-icon-30-active.png"
              route="/os-proximos-15-dias"
              :selected="route30Selected"
              :checked="route30Check"
              @changeRoute="closeNavigation" />
          </div>
        </div>
      </div>
      <div class="be-progress">
          <div class="background-bar"></div>
          <div class="progress-bar">
              <div class="progress-label">Você percorreu <span>{{ percent }}</span>% da jornada</div>
              <div class="loadded-bar" :style="`width: ${percent}vw;`"></div>
          </div>
      </div>
    </div>

    <!-- Be Help Bar -->
    <div class="be-help-bar" ref="beHelpBar">
      <div class="modal-content">
        <div class="container">
          <header>
            <h3>Ajuda sobre a jornada?</h3>
            <a href="javascript:void(0);" class="closeHelpBar" @click="closeHelpBar">
              <CloseIcon />
            </a>
          </header>
          <div id="help-content" ref="helpTextContainer"></div>
        </div>
      </div>
    </div>

    <!-- Be Comment Bar -->
    <div class="be-comment-bar" ref="beCommentBar">
      <div id="loading-comment-container" class="state">
        <img :src="LoadingImage" alt="Loading" />
      </div>
      <div id="first-comment-container" class="state hidden">
          <header>
            <div class="title">Comentários</div>
            <a href="javascript:void(0);" @click="closeCommentBar" class="close">
              <CloseIcon />
            </a>
          </header>
          <section id="first-comment">
            <div id="no-comments">
              <p class="chat-icon"><MessageReplyTextIcon /></p>
              <p>
                <strong>Nenhum comentário</strong><br>
                Seja o primeiro a enviar um comentário
              </p>
            </div>
          </section>
          <div class="button-comments" @click="requestNewComment">
            <a href="javascript:void(0)" class="new-comment">
                <PencilIcon />
            </a>
          </div>
      </div>
      <div id="form-comment-container" class="state hidden">
        <header>
          <div class="title">Postar um comentário</div>
          <a href="javascript:void(0);" class="close" @click="cancelNewComment">
            <CloseIcon />
          </a>
        </header>
        <section id="form-comment">
          <div class="user-avatar">
            <div>
              <div class="avatar" :style="{ 'background-image': 'url(' + LoadingImage + ')' }"></div>
            </div>
            <div class="author">Loading...</div>
          </div>
          <div class="input-comment">
            <textarea id="user-comment" placeholder="Insira seu texto" v-on:keyup="validateCommentForm($event)"></textarea>
          </div>
        </section>
        <div id="input-comment-send">
          <button id="btnCommentSend" disabled @click.stop.prevent="submitCommentForm">Enviar</button>
        </div>
      </div>
      <div id="list-comment-container" class="state hidden">
        <header>
          <div class="title">Comentários</div>
          <a href="javascript:void(0);" class="close" @click="closeCommentBar">
            <CloseIcon />
          </a>
        </header>
        <section id="comment-list">
          <div class="comment-list-container"></div>
        </section>
        <div class="button-comments" @click="requestNewComment">
          <a href="javascript:void(0)" class="new-comment">
            <PencilIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Mixins
import mixin from '../mixins/mixin';

// UI Compoenents
import NavMenuItem from './NavMenuItem.vue';

// Icons
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import ChatIcon from "vue-material-design-icons/Chat.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import MessageReplyTextIcon from "vue-material-design-icons/MessageReplyText.vue";
import PencilIcon from "vue-material-design-icons/Pencil.vue";
import Logout from "vue-material-design-icons/Logout.vue";
import AccountEdit from "vue-material-design-icons/AccountEdit.vue";

// Images
import LoadingImage from "../assets/images/loading.gif";

export default {
  name: 'Toolbar',
  mixins: [mixin],
  components: {
    MapMarker,
    HelpCircle,
    ChatIcon,
    CloseIcon,
    MessageReplyTextIcon,
    PencilIcon,
    Logout,
    NavMenuItem,
    AccountEdit,
  },
  data() {
    return {
      scormMode: process.env.VUE_APP_SCORM_MODE,
      route19Check: false,
      route20Check: false,
      route21Check: false,
      route22Check: false,
      route23Check: false,
      route24Check: false,
      route25Check: false,
      route26Check: false,
      route27Check: false,
      route28Check: false,
      route29Check: false,
      route30Check: false,
      
      route19Selected: false,
      route20Selected: false,
      route21Selected: false,
      route22Selected: false,
      route23Selected: false,
      route24Selected: false,
      route25Selected: false,
      route26Selected: false,
      route27Selected: false,
      route28Selected: false,
      route29Selected: false,
      route30Selected: false,
      
      percent: 0,
      LoadingImage: LoadingImage,
    };
  },
  mounted() {
    this.setSelectedMenu();
    this.setChecksMenu();
  },
  methods: {
    openNavigation() {
      this.setChecksMenu();
      this.$refs.beNavigation.classList.remove('animated', 'fadeIn', 'fadeOut');
      this.$refs.beNavigation.style.display = 'block';
      this.$refs.beNavigation.classList.add('animated', 'fadeIn');
    },
    closeNavigation(){
      let $element = this.$refs.beNavigation;
      $element.classList.remove('animated', 'fadeIn', 'fadeOut');
      $element.classList.add('animated', 'fadeOut');
      setTimeout(function(){
        $element.style.display = 'none';
      }, 800)
    },
    setSelectedMenu(){
      const pageId = this.$route.meta.pageId || 0;
      switch(pageId){
        case 96: this.route19Selected = true; break;
        case 33: this.route20Selected = true; break;
        case 34: this.route21Selected = true; break;
        case 35: this.route22Selected = true; break;
        case 36: this.route23Selected = true; break;
        case 37: this.route24Selected = true; break;
        case 38: this.route25Selected = true; break;
        case 39: this.route26Selected = true; break;
        case 40: this.route27Selected = true; break;
        case 41: this.route28Selected = true; break;
        case 42: this.route29Selected = true; break;
        case 97: this.route30Selected = true; break;
      }
    },
    setChecksMenu() {
      this.getUserChecks().then( (data) => {
        if(data.status === true){
          this.percent = ((data.userChecks.length / process.env.VUE_APP_QUANTITY_OF_SESSION) * 100).toFixed(0);

          data.userChecks.forEach((e) => {
            const objectId = parseInt(e.objectId, 10);
            switch(objectId){
              case 96: this.route19Check = true; break;
              case 33: this.route20Check = true; break;
              case 34: this.route21Check = true; break;
              case 35: this.route22Check = true; break;
              case 36: this.route23Check = true; break;
              case 37: this.route24Check = true; break;
              case 38: this.route25Check = true; break;
              case 39: this.route26Check = true; break;
              case 40: this.route27Check = true; break;
              case 41: this.route28Check = true; break;
              case 42: this.route29Check = true; break;
              case 97: this.route30Check = true; break;
            }
          });
        }
      })
    },
    openHelpBar() {
      this.getHelpBarText().then((data) => {
        if(data.status === true){
          this.$refs.helpTextContainer.innerHTML = data.helpText;
          this.$refs.beHelpBar.classList.add('open');
        }
      })
    },
    closeHelpBar() {
      let $element = this.$refs.beHelpBar;
      $element.classList.remove('open');
    },
    toggleCommentBar() {
      if(this.$refs.beCommentBar.classList.contains('open')){
        this.closeCommentBar();
      }else{
        this.openCommentBar();
      }
    },
    openCommentBar() {
      // Cleaning and loading
      const $element = this.$refs.beCommentBar;
      $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
      $element.querySelector('#loading-comment-container').classList.remove('hidden');

      // Loading comments
      this.loadCommentList();

      // Open
      this.$refs.beCommentBar.classList.add('open');
    },
    closeCommentBar() {
      this.$refs.beCommentBar.classList.remove('open');
    },
    loadCommentList() {
      const pageId = this.$route.meta.pageId || 0;
      const $element = this.$refs.beCommentBar;

      this.getCommentList(pageId).then( (data) => {
        if(data.status === true){
          const commentList = data.commentList;
          if(commentList.length === 0){
            // Show first comment screen
            $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
            $element.querySelector('#first-comment-container').classList.remove('hidden');
          }else{
            // Fill HTML
            $element.querySelector('#comment-list .comment-list-container').innerHTML = data.html;

            // Show comment list screen
            $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
            $element.querySelector('#list-comment-container').classList.remove('hidden');
          }
        }
      });
    },
    requestNewComment() {
      // Get vars
      const productId = process.env.VUE_APP_PRODUCT_ID;
      const productUserKey = `product-${productId}-user`;
      const $element = this.$refs.beCommentBar;
      const userData = JSON.parse(localStorage.getItem(productUserKey));

      // Prepare screen
      $element.querySelector('.user-avatar .avatar').style.backgroundImage = `url(${userData.urlPhoto})`;
      $element.querySelector('.user-avatar .author').innerText = userData.fullName;

      // Show screen
      $element.querySelectorAll('.state').forEach((e) => e.classList.add('hidden'));
      $element.querySelector('#form-comment-container').classList.remove('hidden');
    },
    cancelNewComment() {
      this.loadCommentList();
    },
    validateCommentForm(event) {
      // Get vars
       const $element = this.$refs.beCommentBar;

      if(event.target.value === ''){
        $element.querySelector('#btnCommentSend').disabled = true;
      }else{
        $element.querySelector('#btnCommentSend').disabled = false;
      }
    },
    submitCommentForm(){
      const pageId = this.$route.meta.pageId || 0;
      const $element = this.$refs.beCommentBar;
      const commentText = $element.querySelector('#user-comment').value;

      this.sendCommentForm(pageId, commentText).then(() => {
        this.loadCommentList();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary: $PRIMARY;

  /* Toolbar */
  .be-toolbar{
    height: 10vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: $primary;

      .wrapper{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .wrapper > div{
        width: 25%;
      }
      .wrapper > div p{
        text-align: center;
        margin: 0;
      }
      .wrapper > div p a{
        text-decoration: none;
        color: #FFFFFF;
        font-family: 'sanukOT', sans-serif;
        display: flex;
        flex-direction: column;

        span{
          font-size: 2rem;
        }
        span.text{
          font-size: 1rem;
          margin-top: 0.4rem;
        }
      }
  }

  /* Help bar */
  .be-help-bar{
    z-index: 1003;
    display: none;
    opacity: 0;
    width: 100%;
    max-height: 45%;
    border-radius: 0;
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: -100%;
    background-color: #fafafa;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    transition: 2s;
    font-family: 'sanukOT', sans-serif;
  }
  .be-help-bar.open{
    z-index: 1003;
    display: block;
    opacity: 1;
    bottom: 0;
  }
  .be-help-bar .container{
    margin: 0 auto;
    width: 70%;
  }
  .be-help-bar .container header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .closeHelpBar{
      font-size: 1.5rem;
      margin-top: -0.5rem;
      color: #000000;
    }
  }

  /* Comment Bar */
  .be-comment-bar{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 400px;
    min-width: 0;
    z-index: 49;
    visibility: hidden;
    outline: 0;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #FFFFFF;
    transition: ease 0.5s;
    transform: translate3d(100%,0,0);
    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
    font-family: 'sanukOT', sans-serif;
    max-width: 100%;
  }
  .be-comment-bar .hidden{
    display: none !important;
  }
  .be-comment-bar.open{
    transform: translate3d(0px, 0px, 0px);
    visibility: visible;
  }
  .be-comment-bar header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $primary;
    color: #FFFFFF;
    height: 60px;
  }
  .be-comment-bar header div.title{
    display: flex;
    justify-content: center;
    font-size: 24px;
    text-align: center;
    flex: 1;
    font-size: 1.6rem;
  }
  .be-comment-bar header a.close{
    text-align: center;
    color: #FFFFFF;
    font-size: 2.5rem;
  }
  .be-comment-bar .button-comments{
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
  .be-comment-bar .button-comments .new-comment{
    background-color: $primary;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color .3s;
    cursor: pointer;
    font-size: 2rem;
  }
  .be-comment-bar .button-comments .new-comment span{
    margin-top: -0.5rem;
  }

  /* Comment Bar :: Loading screen */
  .be-comment-bar #loading-comment-container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Comment Bar :: First comment screen */
  .be-comment-bar #first-comment-container{
    height: 100%;
  }
  .be-comment-bar #first-comment{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc( 100% - 160px );
  }
  .be-comment-bar #first-comment p{
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
  }
  .be-comment-bar #first-comment p.chat-icon{
    font-size: 5rem;
  }

  /* Comment Bar :: Post comment screen */
  .be-comment-bar #form-comment-container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .be-comment-bar #form-comment-container .input-comment{
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    margin-bottom: auto;
  }
  .be-comment-bar #form-comment-container .input-comment textarea{
    width: 100%;
    line-height: normal;
    overflow-y: hidden;
    padding: 0.5rem;
    resize: none;
    min-height: 3rem;
    box-sizing: border-box;
    min-height: 180px;
  }
  .be-comment-bar #form-comment-container #form-comment{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 108px);
  }
  .be-comment-bar #form-comment-container #user-comment{
    min-height: 180px;
    height: 180px;
  }
  .be-comment-bar #form-comment-container #input-comment-send{
    width: 100%;
    height: 48px;
  }
  .be-comment-bar #form-comment-container #input-comment-send button{
    width: 100%;
    text-transform: uppercase;
    font-size: 1.35rem;
    height: 3rem;
    cursor: pointer;
    border: none;
    transition: background-color .2s ease-out;
    background-color: $primary;
    color: #FFFFFF;
  }
  .be-comment-bar #form-comment-container #input-comment-send button:hover{
    opacity: 0.9;
  }
  .be-comment-bar #form-comment-container #input-comment-send button[disabled]{
    background-color: rgb(155, 146, 160);
    color: #CDCDCD;
  }
  .be-comment-bar #form-comment-container .user-avatar{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px;
    border-bottom: 1px solid rgb(227, 227, 227);
  }
  .be-comment-bar #form-comment-container .user-avatar .author{
    color: rgb(51, 51, 51);
    font-size: 18px;
    margin-left: 18px;
  }
  .be-comment-bar #form-comment-container .user-avatar .avatar{
    border-radius: 50%;
    width: 48px;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Comment Bar :: Comment list screen */
  .be-comment-bar #list-comment-container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .be-comment-bar #list-comment-container #comment-list{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 108px);
  }
  .be-comment-bar #list-comment-container #comment-list .comment-list-container{
    display: block;
    flex-direction: column;
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    position: relative;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }

  /* Navigation */
  .be-navigation{
      width: 100%;
      height: 100%;
      background-color: $primary;
      position: fixed;
      z-index: 150;
      display: none;
      top: 0;
      left: 0;
      font-family: 'sanukOT', sans-serif;
  }
  .be-navigation .nav-body{
    height: 82%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .be-navigation .header-toolbar{
    height: 8%;
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 2vw;
  }
  .be-navigation .header-toolbar .account-functions{
    display: flex;
  }
  .be-navigation .header-toolbar .account-functions span.separator{
    color: #FFFFFF;
    padding: 0 10px;
  }
  .be-navigation .header-toolbar a.close{
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  .be-navigation .header-toolbar a.close span.material-design-icon{
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }
  .be-navigation .be-menu-main{
    width: 98vw;
    height: 98%;
    display: flex;
    flex-wrap: wrap;
    flex: auto;
    overflow: auto;
  }
  .be-navigation .nav-body-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    flex-basis: 14%;
  }

  .be-navigation .be-progress{
    height: 10%;
    box-sizing: border-box;
    position: relative;
  }
  .be-navigation .be-progress .background-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6.5vh;
    background-color: #75657E;
  }
  .be-navigation .be-progress .progress-bar{
    display: flex;
    position: absolute;
    height: 10vh;
    flex-direction: column;
  }
  .be-navigation .be-progress .progress-label{
    height: 3.5vh;
    color: #FFFFFF;
    text-align: right;
    padding: 0 0.3vw;
    font-size: 1.2vw;
  }
  .be-navigation .be-progress .progress-bar .loadded-bar{
    height: 6.5vh;
    background-color: #FFC03C;
    transition: 1.5s;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    .be-navigation .be-menu-item span{
      font-size: 2.5vh;
      line-height: 120%;
    }
    .be-navigation .be-progress{
      height: 7vh;
    }
    .be-navigation .be-progress .progress-label{
      font-size: 1.8vh;
      height: 2vh;
    }
    .be-navigation .be-progress .background-bar{
      height: 5vh;
    }
    .be-navigation .be-progress .progress-bar .loadded-bar{
      height: 5vh;
    }
    .be-navigation .be-main .protagonist .be-menu-item{
      margin-bottom: 3vh;
    }
  }

  @media screen and (max-width: 768px){
    .be-navigation .be-menu-main{
      width: 90vw;
    }
  }

  @media screen and (max-width: 667px){
    .be-toolbar{
      height: auto;
      z-index: 900;
    }
    .be-toolbar .wrapper{
      width: 100%;
    }
  }

  @media (max-width: 375px) and (orientation: portrait) {
    .be-navigation{
      overflow-y: auto;
      z-index: 1000;
    }
    .be-navigation .be-menu-item .menu-image img{
      width: 10vh;
    }
    .be-navigation .be-menu-item span{
      font-size: 4.5vw;
      padding: 0;
    }
    .be-navigation .be-menu-item .menu-image .menu-item-check{
      width: 8vw;
    }
    .be-navigation .be-progress{
      display: none;
    }
    .be-help-bar .container{
      width: 85%;
    }
  }
</style>

<style>
  .be-comment-bar #list-comment-container .comment-cell{
      display: block;
      text-align: left;
      border: 0;
      border-bottom: 1px solid rgb(227, 227, 227);
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-header{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 18px 18px 9px;
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-header .comment-avatar{
      display: inline-block;
      padding: 18px;
      border-bottom: 1px solid rgb(227, 227, 227);
      margin-right: 18px;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      line-height: 48px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-header .comment-infos{
      display: flex;
      flex-direction: column;
  }
  .be-comment-bar #list-comment-container .comment-cell .comment-content{
      color: rgb(102, 102, 102);
      font-size: 1rem;
      padding: 9px 18px 18px;
  }
</style>