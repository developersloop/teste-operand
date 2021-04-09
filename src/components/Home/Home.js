import DialogEditUser from '../Dialog/DialogEditUser.vue'
export default {
  name: 'Home',
  components: {
    DialogEditUser,
  },
  data () {
    return {
      showDialogEditUser: false,
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'center',
          filterable: true,
          value: 'name',
        },
        { 
          text: 'Lastname', 
          align: 'center',
          value: 'lastname',
          filterable: true, 
        },
        { 
          text: 'Email', 
          align: 'center',
          value: 'email',
          filterable: true,
        },
        { 
          text: 'Username', 
          align: 'center',
          value: 'username',
          filterable: true,
        },
        { 
          text: 'Actions', 
          align: 'center',
          value: 'actions', 
          sortable: false 
        },
      ],
      items: [],
    }
  },
  methods: {
    initialize () {
      this.items = [
        {
          id: 1,
          name: 'Regia',
          lastname: 'mikaelle',
          email: 'regia@hotmail.com',
          username: 'mika'
        },
        {
          id: 2,
          name: 'Vitor',
          lastname: 'Vicente',
          email: 'vitor@hotmail.com',
          username: 'loop'
        },
      ]  
    },
    editItem (item) {
      this.showDialogEditUser = true
      console.log(item)
    }  
  },
  created () {
    this.initialize()
  },
}
