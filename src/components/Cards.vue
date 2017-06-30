<<template>
    <div class="cards">
        <div class="container">
            <p class="title">Создать Страницу</p>
            <form class="form-signin">
                    <div class="form-group row">
                    <label for="id-input" class="col-2 col-form-label">ID визитки</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.id" placeholder="ID" required id="id-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="name-input" class="col-2 col-form-label">Имя</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.name" placeholder="Name" required id="name-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="email-input" class="col-2 col-form-label">Email</label>
                    <div class="col-4">
                        <input class="form-control" type="email" v-model="newcard.email" placeholder="Email" required id="email-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="password-input" class="col-2 col-form-label">Пароль</label>
                    <div class="col-4">
                        <input class="form-control" type="password"  v-model="newcard.password" required id="password-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="description-input" class="col-2 col-form-label">Подпись</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.description" placeholder="Description" id="description-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="sitebutton-input" class="col-2 col-form-label">Кнопка сайта</label>
                    <div class="col-4">
                        <input class="form-control" type="url" v-model="newcard.sitebutton" placeholder="Site URL" id="sitebutton-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="messenger-input" class="col-2 col-form-label">Messenger</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.messenger" placeholder="Messenger" id="messenger-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="telegram-input" class="col-2 col-form-label">Telegram https://telegram.org/</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.telegram" placeholder="telegram" id="telegram-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="vk-input" class="col-2 col-form-label">VK https://vk.com/</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.vk" placeholder="vk" id="vk-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="whatsapp-input" class="col-2 col-form-label">WhatsApp</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.whatsapp" placeholder="WhatsApp" id="whatsapp-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="viber-input" class="col-2 col-form-label">Viber</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.viber" placeholder="Viber" id="viber-input">
                    </div>
                    </div>

                    <div class="form-group row">
                    <label for="skype" class="col-2 col-form-label">Skype</label>
                    <div class="col-4">
                        <input class="form-control" type="text" v-model="newcard.skype" placeholder="Skype" id="skype-input">
                    </div>
                </div>

                    <div class="btn btn-lg btn-primary btn-block">
                        <button type="submit" v-on:click="addnewcard(newcard)" class="btn btn-primary">Добавить</button>
                    </div>
            </form>

            <table class="table">
                <thead>
                    <tr>
                        <th>Card ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
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
                        <td>{{card.email}}</td>
                        <td>{{card.password}}</td>
                        <td>{{card.description}}</td>
                        <td>{{card.sitebutton}}</td>
                        <td>{{card.messenger}}</td>
                        <td>{{card.telegram}}</td>
                        <td>{{card.vk}}</td>
                        <td>{{card.whatsapp}}</td>
                        <td>{{card.viber}}</td>
                        <td>{{card.skype}}</td>
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
              'email': 'des@gmail.com',
              'password': 'pass',
              'description': 'LOL',
              'sitebutton': 'xxxx',
              'messenger': 'ilo',
              'telegram': 'ilo',
              'vk': 'vk.com//dos',
              'whatsapp': 'eee',
              'viber': 'ee',
              'skype': 'des'
            },
            {
              'id': '2',
              'name': 'Dos',
              'email': 'dos@gmail.com',
              'password': 'pass',
              'description': 'ILO',
              'sitebutton': 'xxxx',
              'messenger': 'ilo',
              'telegram': 'ilo',
              'vk': 'vk.com//dos',
              'whatsapp': 'eee',
              'viber': 'ee',
              'skype': 'des'
            }
          ],

          newcard: {
            'id': '',
            'name': '',
            'email': '',
            'password': '',
            'description': '',
            'sitebutton': '',
            'messenger': '',
            'telegram': '',
            'vk': '',
            'whatsapp': '',
            'viber': '',
            'skype': ''
          }
        }
      },
      methods: {
        addnewcard: function () {
          var obj = {
            'id': '',
            'name': '',
            'email': '',
            'password': '',
            'description': '',
            'sitebutton': '',
            'messenger': '',
            'telegram': '',
            'vk': '',
            'whatsapp': '',
            'viber': '',
            'skype': ''
          }
          obj.id = this.newcard.id
          obj.name = this.newcard.name
          obj.email = this.newcard.email
          obj.password = this.newcard.password
          obj.description = this.newcard.description
          obj.sitebutton = this.newcard.sitebutton
          obj.messenger = this.newcard.messenger
          obj.telegram = this.newcard.telegram
          obj.vk = this.newcard.vk
          obj.whatsapp = this.newcard.whatsapp
          obj.viber = this.newcard.viber
          obj.skype = this.newcard.skype
          if ((obj.id !== '') && (obj.name !== '') && (obj.email !== '') && (obj.password !== '')) {
            this.cards.push(obj)
          }
        }
      }
}
</script>

<style>
.formadd {
    margin-top: 20px;
    margin-bottom: 20px;

}
</style>

