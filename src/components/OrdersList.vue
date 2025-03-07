<template>
  <v-container class="mt-4" fluid>
    <v-row>
      <v-col cols="12" class="text-primary">
        <h2>Order Details</h2>
      </v-col>
      <v-col :cols="12">
        <v-data-table
          :headers="customHeaders"
          :items="orderData"
          item-value="id"
          :items-per-page="10"
          class="elevation-1 border"
        >
          <template v-slot:top>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" persistent max-width="700px">
              <v-card class="pa-2">
                <v-card-title>
                  <span class="text-h5 text-primary">Change Order Status</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <!-- {{ currentItem }} -->
                    <v-row>
                      <v-col cols="12" md="6" sm="6">
                        <v-text-field
                          v-model="currentItem.customer"
                          variant="underlined"
                          density="compact"
                          readonly
                          label="Customer name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" sm="6">
                        <v-text-field
                          v-model="currentItem.quantity"
                          variant="underlined"
                          density="compact"
                          readonly
                          label="No. of Items Ordered"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" sm="6">
                        <v-text-field
                          v-model="currentItem.total_price"
                          variant="underlined"
                          density="compact"
                          readonly
                          label="Total Price (Rs.)"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" sm="6">
                        <!-- <v-text-field
                          v-model="currentItem.protein"
                          label="Protein (g)"
                        ></v-text-field> -->
                        <v-select
                          label="Change Status of the Order"
                          :items="orderStatusList"
                          color="warning"
                          variant="outlined"
                          density="compact"
                          v-model="currentItem.status"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="cancel">
                    Cancel
                  </v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <!-- Optional: Add a default slot to display custom rows -->
          <template v-slot:[`item.customer`]="{ item }">
            <span>{{ item.customer }}</span>
          </template>
          <template v-slot:[`item.quantity`]="{ item }">
            <span>{{ item.quantity }}</span>
          </template>
          <template v-slot:[`item.total_price`]="{ item }">
            <span>{{ item.total_price }}</span>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <span class="text-warning">{{ item.status }}</span>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon
              class="me-2 text-primary"
              size="small"
              title="Change status"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      customHeaders: [
        {
          title: "Customer Name",
          align: "start",
          key: "customer",
        },
        {
          title: "No. of Items Ordered",
          align: "center",
          key: "quantity",
        },
        {
          title: "Total Price (Rs.)",
          align: "center",
          key: "total_price",
        },
        {
          title: "Status",
          align: "center",
          key: "status",
        },
        { title: "Actions", align: "end", key: "actions", sortable: false },
      ],
      orderStatusList: ["Order Received", "Order Preparing", "Ready to Serve"],
      dialog: false,
      currentItem: {},
    };
  },
  computed: {
    orderData() {
      return this.$store.getters.orderData;
    },
  },
  methods: {
    editItem(item) {
      this.currentItem = JSON.parse(JSON.stringify(item));
      this.dialog = true;
    },
    save() {
      this.$store.dispatch("updateOrder", this.currentItem).then(() => {
        this.dialog = false;
        this.currentItem = {};
      });
    },
    cancel() {
      this.dialog = false;
      this.currentItem = {};
      // this.orderData = this.$store.getters.orderData
    },
  },
};
</script>
