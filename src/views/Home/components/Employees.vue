<template>
  <div>
    <v-simple-table class="cardStyle white">
      <template v-slot:default class="white">
        <thead>
          <tr>
            <th class="text-center white">#</th>
            <th class="text-center white">Name</th>
            <th class="text-center white">JOB POSITION</th>
            <th class="text-center white">SALARY</th>
            <th class="text-center white">MILESTONE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,idx) in eid" :key="(item,idx)">
            <td class="text-center white">
              <img
                :src="item.img"
                width="30px"
                height="30px"
                alt=""
                style="border-radius: 50%"
              />
            </td>
            <td class="text-center white">{{ item.name }}</td>
            <td class="text-center white">{{ item.position }}</td>
            <td class="text-center white">{{ item.salary }}</td>
            <td class="text-center white">{{ item.mileStone }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EID from '@/Utils/EmployessInformationData'
export default Vue.extend({
  name:'Employees',
  data(){
    return{
      eid:EID
    }
  }
});
</script>