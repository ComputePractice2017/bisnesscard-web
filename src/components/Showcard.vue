<template>
    <div class="userpage">
        <div class="header d-flex justify-content-between">
            <a href='/' class="logo">visitcard.me</a>
            <a class="settings btn btn-primary" :href="'/editcard/' + cards[0].id">Настройки</a>
        </div>
        <div class="cardcontainer container d-flex justify-content-center">
            <div class="layer col-6 col-xs-4 col-md-4 rounded card">
                <div class="cardheader card-block">
                    <span v-if="cards[0].photo" class="photo"><img src="../assets/user.png" class="img-thumbnail rounded-circle" data-html2canvas-ignore="true"></span>
                    <p v-if="cards[0].name" class="name">{{cards[0].name}}</p>
                    <p v-if="cards[0].desc" class="description">{{cards[0].desc}}</p>
                </div>
            <a v-if="cards[0].site" class="stbtn btn btn-primary" :href="'http://'+cards[0].site"><span>Мой сайт</span></a>
                <div class="btns card-block">
                    <a v-if="cards[0].messenger" target="_blank" :href="'http://m.me/'+cards[0].messenger"><img src="../assets/messeger.svg" alt="messenger_btn"><span>Messenger</span></a>
                    <a v-if="cards[0].telegaram" target="_blank" :href="'http://t.me/'+cards[0].telegaram"><img src="../assets/telegram.svg" alt="telegram_btn"><span>Telegram</span></a>
                    <a v-if="cards[0].vk" target="_blank" :href="'http://vk.me/'+cards[0].vk"><img src="../assets/vk.svg" alt="vk_btn"><span>VK</span></a>
                    <a v-if="cards[0].whatsapp" target="_blank" :href="'whatsapp://send?text=hey&amp;phone='+cards[0].whatsapp"><img src="../assets/whatsapp.svg" alt="whatsapp_btn"><span>WhatsApp</span></a>
                    <a v-if="cards[0].viber" target="_blank" :href="'viber://add?number='+cards[0].viber"><img src="../assets/viber.svg" alt="viber_btn"><span>Viber</span></a>
                    <a v-if="cards[0].skype" target="_blank" :href="'skype:' + cards[0].skype + '?chat'"><img src="../assets/skype.svg" alt="skype_btn"><span>Skype</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
  name: 'cards',
  data () {
        return {
          cards: [
            {
              'id': '1',
              'name': 'Des',
              'mail': 'des@gmail.com',
              'desc': 'LOL',
              'site': 'xxxx',
              'messenger': 'ilo',
              'telegaram': 'ilo',
              'vk': 'dos',
              'whatsapp': 'eee',
              'viber': 'ee',
              'skype': 'des'
            }
          ]
        }
      },
      mounted: function () {
        this.$http.get('/getInfo/' + this.$route.params.id).then(response => {
          this.cards = response.body
          console.log(this.cards)
        }, response => {
          console.log(response)
        })
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userpage{
    height:auto;
}
p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

.name {
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
}

.description {
    font-size: 14px;
    font-weight: 300;
    margin: 0px;
    color: #404040;
}

.btns {
    padding: 0px;
}

.userpage .header {
    padding-top: 15px;
    padding-bottom: 15px;
    box-sizing: border-box;
    padding-right: 5%;
    padding-left: 5%;
}
.header .logo{
    font-size: 16px;
    font-weight: 300;
    text-decoration: none;
    color: white; 
    text-shadow: black 0.2em 0.2em 0.3em;
}

.btns a {
    font-size: 14px;
    font-weight: 300;
    text-decoration: none;
    color: #404040;
    outline: none;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 32px;
    width: 68px;
    margin-left: 14px;
    margin-right: 14px;
    text-align: center;
    transition: margin 0.3s ease;
}
.cardcontainer {
    padding: 0px;
    margin: auto;
}
.layer {
    display: block;
    padding: 0px;
    margin-top: 60px;
    margin-bottom: 40px;
    background-color: #F4F4F4;
}

.stbtn {
    display: block;
    margin: 0px 10px 0px 10px;
}

.photo {
    text-align: center;
    margin-top: -62px;
    display: block;
}
</style>
