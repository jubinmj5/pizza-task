<template>
  <div class="section-begin pa-4">
    <v-row class="justify-center text-center">
      <v-col cols="12" class="text-left text-primary">
        <h2>Order Details</h2>
      </v-col>
      <v-col
        cols="12"
      sm="6"
        md="3"
        class="item-center"
        width 
      >
        <v-card title="Order Received"
        >
        
        <div class="text-center text-caption">{{orderReceivedCount}}</div>
      </v-card>

      </v-col>

     
 

      <v-col
        cols="12"
        md="3"
        class="item-center"
      >
        <v-card title="Order Preparing"
        >
        
        <div class="text-center text-caption">{{orderPreparingCount}}</div>
      </v-card>

      </v-col>
      <v-col
        cols="12"
        md="3"
        class="item-center"
      >
        <v-card title="Ready to Serve"
        >
        
        <div class="text-center text-caption">{{readytoServeCount}}</div>
      </v-card>

      </v-col>

      <v-col
        cols="12"
        md="3"
        class="item-center"
      >
        <v-card title="Total Orders"
        >
        
        <div class="text-center text-caption">{{totalOrderCount}}</div>
      </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return { 
    };
  },
  computed: {
    orderReceivedCount() {
      return this.$store.getters.orderData.filter(x=>x.status=='Order Received').length
    },
    orderPreparingCount() {
      return this.$store.getters.orderData.filter(x=>x.status=='Order Preparing').length
    },
    readytoServeCount() {
      return this.$store.getters.orderData.filter(x=>x.status=='Ready to Serve').length
    },
    totalOrderCount() {
      return this.$store.getters.orderData.length
    },
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    getData() {

      // this.cardData[0].count=this.orderReceivedCount
    }
  }
};
</script>
