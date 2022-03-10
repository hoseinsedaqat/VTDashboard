<template>
  <div style="margin: 1rem 0">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6" sm="12">
          <v-card class="cardStyle">
            <h3 class="white">Global Sales by Top Locations</h3>
            <span class="white">All products that were shipped</span>
            <v-simple-table class="cardStyle">
              <template class="white">
                <tbody>
                  <tr v-for="(cData, idx) in gid" :key="(cData, idx)">
                    <td class="text-center white">
                      <img :src="cData.img" alt="" />
                    </td>
                    <td class="text-center white">{{ cData.name }}</td>
                    <td class="text-center white">{{ cData.count }}</td>
                    <td class="text-center white">{{ cData.precent }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6" sm="12">
          <v-card
            style="background-color: #27293d; padding: 1rem; color: #fff; height: 100%"
          >
            <img
              src="@/assets/Images/Screenshot 2022-02-17 at 20-23-04 Vue Black Dashboard PRO - Premium Vuejs Bootstrap 4 Admin Template designed by Creative T[...].png"
              alt=""
              width="100%"
              height="100%"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GID from "@/Utils/GlobalInformatonData";
export default Vue.extend({
  name: "GlobalInformation",
  data() {
    return {
      gid: GID,
    };
  },
});
</script>
