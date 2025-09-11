<template>
  <div class="container">
    <h2 class="title">{{ product.title }}</h2>
    <div class="box">
      <p>{{ product.price }} $</p>
      <p>{{ product.amount }}</p>
    </div>
    <div class="box">
        <p class="available" v-if="product.available">Available</p>
        <p class="not-available" v-else>Not in stock</p>
        <button>Add to cart</button>
    </div>
    <div v-show="userPermissions.update || userPermissions.write">
        <button v-if="userPermissions.update" @click="onEdit">Edit</button>
        <button @click="deleteItem(product.id)" v-if="userPermissions.write">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters('users', ['userPermissions']),
    ...mapGetters('auth', ['getUser']),
  },
  methods: {
    ...mapActions('users', ['loadUserPermissions']),
    ...mapActions('products', ['deleteItem']),
    onEdit() {
        // console.log(this.product.id);
        
        this.$router.push({
            name:'edit',
            params: {
                id: this.product.id
            }
        })
    }
  },
  created () {
    this.loadUserPermissions();
  },
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
  text-align: center;
  width: 250px;
  .title {
    flex-grow: 1;
  }
  .box {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: space-around;
    flex-shrink: 1;
  }
  .available {
    color: green;
  }
  .not-available {
    color: red;
  }
}
</style>
