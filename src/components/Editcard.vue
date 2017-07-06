<template>
    <div class="cards">
        <div class="container">
            <form class="editcardform align-self-center col-8">
                    <div class="titleform form-group col-9">
                        <h1>Редактировать визитку</h1>
                    </div>                    
                    <div class="form-group row">
                        <label for="name-input" class="col-3 col-form-label col-form-label-sm">Имя</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].name" placeholder="Введите имя" required id="name-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email-input" class="col-3 col-form-label col-form-label-sm">Email</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="email" v-model="cards[0].mail" placeholder="Введите Email" required id="email-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="description-input" class="col-3 col-form-label col-form-label-sm">Подпись</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].desc" placeholder="Введите подпись" id="description-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="sitebutton-input" class="col-3 col-form-label col-form-label-sm">Кнопка сайта</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].site" placeholder="http://???" id="sitebutton-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="messenger-input" class="col-3 col-form-label col-form-label-sm">Messenger</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].messenger" placeholder="ms.me/???" id="messenger-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="telegram-input" class="col-3 col-form-label col-form-label-sm">Telegram</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].telegaram" placeholder="t.me\???" id="telegram-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="vk-input" class="col-3 col-form-label col-form-label-sm">VK</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].vk" placeholder="vk.me\???" id="vk-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="whatsapp-input" class="col-3 col-form-label col-form-label-sm">WhatsApp</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].whatsapp" placeholder="+???" id="whatsapp-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="viber-input" class="col-3 col-form-label col-form-label-sm">Viber</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].viber" placeholder="+???" id="viber-input">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="skype" class="col-3 col-form-label col-form-label-sm">Skype</label>
                        <div class="col-5">
                            <input class="form-control form-control-sm" type="text" v-model="cards[0].skype" placeholder="???" id="skype-input">
                        </div>
                    </div>
                    <button v-on:click="endEdit" type="button" v-if="cards[0].name  && varifem(cards[0].mail)" class="btn btn-primary col-8 btn-block" >Сохранить</button>
                    <a class="btn btn-primary col-8 btn-block" :href="'/getInfo/' + cards[0].id">Отмена</a>
                    <button v-on:click="deletecard" type="button" class="btn btn-danger col-8 btn-block">Удалить</button>  
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
          ],
          edit: false
        }
      },
      mounted: function () {
        this.$http.get('/getInfo/' + this.$route.params.id).then(response => {
          this.cards = response.body
          console.log(this.cards)
        }, response => {
          console.log(response)
        })
      },
      methods: {
        varifem: function (obj) {
          var emvarif = /^\w+@\w+\.\w{2,4}$/i
          if (emvarif.test(obj)) {
            return true
          }
        },
        endEdit: function () {
          this.$http.put('/update/' + this.cards[0].id, this.cards[0]).then(response => {
            console.log(this.response)
          }, response => {
            console.log(response)
          })
        },
        deletecard: function () {
          this.$http.delete('/delete/' + this.cards[0].id).then(response => {
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
.editcardform{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
}
</style>

