<template>
    <div class="cards">
        <div class="container">
            <form class="addcardform align-self-center col-8 alert alert-error">
                    <div class="titleform form-group col-9">
                        <h1>Создать визитку</h1>
                    </div>                    
                    <div class="form-group row">
                        <label for="name-input" class="col-3 col-form-label col-form-label-sm">Имя</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.name" placeholder="Введите имя" required id="name-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email-input" class="col-3 col-form-label col-form-label-sm">Email</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="email" v-model="newcard.mail" placeholder="Введите Email" required id="email-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="description-input" class="col-3 col-form-label col-form-label-sm">Подпись</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.desc" placeholder="Введите подпись" id="description-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="sitebutton-input" class="col-3 col-form-label col-form-label-sm">Кнопка сайта</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.site" placeholder="http://???" id="sitebutton-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="messenger-input" class="col-3 col-form-label col-form-label-sm">Messenger</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.messenger" placeholder="ms.me/???" id="messenger-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="telegram-input" class="col-3 col-form-label col-form-label-sm">Telegram</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.telegaram" placeholder="t.me\???" id="telegram-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="vk-input" class="col-3 col-form-label col-form-label-sm">VK</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.vk" placeholder="vk.me\???" id="vk-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="whatsapp-input" class="col-3 col-form-label col-form-label-sm">WhatsApp</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.whatsapp" placeholder="+???" id="whatsapp-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="viber-input" class="col-3 col-form-label col-form-label-sm">Viber</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.viber" placeholder="+???" id="viber-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="skype" class="col-3 col-form-label col-form-label-sm">Skype</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="newcard.skype" placeholder="???" id="skype-input">
                        </div>
                    </div>
                    <button v-on:click="addnewcard(newcard)" type="button" class="btn btn-primary col-8 btn-block" >Добавить</button>                   
            </form>

            <table class="table">
                <thead>
                    <tr>
                        <th>Card ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Site Button</th>
                        <th>Messenger</th>
                        <th>Telegram</th>
                        <th>Vk</th>
                        <th>WhatsApp</th>
                        <th>Viber</th>
                        <th>Skype</th>
                    </tr>
                </thead>
                 <tbody>
                    <tr v-for="card in cards">
                        <td>{{card.id}}</td>
                        <td>{{card.name}}</td>
                        <td>{{card.mail}}</td>
                        <td>{{card.desc}}</td>
                        <td><a :href="'http://' + card.site">{{card.site}}</a></td>
                        <td><a :href="'http://m.me/' + card.messenger">{{card.messenger}}</a></td>
                        <td><a :href="'https://t.me/' + card.telegaram">{{card.telegaram}}</a></td>
                        <td><a :href="'https://vk.me/' + card.vk">{{card.vk}}</a></td>
                        <td><a :href="'whatsapp://send?text=hey&amp;phone=' + card.whatsapp">{{card.whatsapp}}</a></td>
                        <td><a :href="'viber://add?number=' + card.viber">{{card.viber}}</a></td>
                        <td><a :href="'skype:' + card.skype + '?chat'">{{card.skype}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
  name: 'cards',
  data () {
        return {
          cards: null,
          newcard: {
            'name': '',
            'mail': '',
            'desc': '',
            'site': '',
            'messenger': '',
            'telegaram': '',
            'vk': '',
            'whatsapp': '',
            'viber': '',
            'skype': ''
          }
        }
      },
      methods: {
        addnewcard: function () {
          if (this.cards === null) {
            this.cards = []
          }
          var obj = {
            'name': '',
            'mail': '',
            'desc': '',
            'site': '',
            'messenger': '',
            'telegaram': '',
            'vk': '',
            'whatsapp': '',
            'viber': '',
            'skype': ''
          }
          var emvarif = /^\w+@\w+\.\w{2,4}$/i
          obj.name = this.newcard.name
          if (emvarif.test(this.newcard.mail)) {
            obj.mail = this.newcard.mail
          }
          obj.desc = this.newcard.desc
          obj.site = this.newcard.site
          obj.messenger = this.newcard.messenger
          obj.telegaram = this.newcard.telegaram
          obj.vk = this.newcard.vk
          obj.whatsapp = this.newcard.whatsapp
          obj.viber = this.newcard.viber
          obj.skype = this.newcard.skype
          if ((obj.name !== '') && (obj.email !== '')) {
            this.cards.push(obj)
          }
          this.$http.post('/create', obj).then(response => {
            console.log(this.response)
          }, response => {
            console.log(response)
          })
        }
      }
}
</script>

<style scoped>
.titleform{
    text-align: center;
}
.addcardform{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
}
</style>

