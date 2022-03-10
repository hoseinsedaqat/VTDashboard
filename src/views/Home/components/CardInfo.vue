<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" sm="12" lg="3" xl="3">
          <v-card class="mx-1 cardStyle">
            <div class="d-flex justify-content-between my-1 bb-1">
              <div class="bg-cardOne">
                <v-icon class="white">{{ "mdi-chat" }}</v-icon>
              </div>
              <div class="d-flex flex-column white">
                <span>Number</span>
                <h3>150GB</h3>
              </div>
            </div>
            <div class="my-1 white d-flex">
              <v-icon class="white">
                {{ "mdi-refresh" }}
              </v-icon>
              <p class="mx-1 font-size1">Update Now</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="12" lg="3" xl="3">
          <v-card class="mx-1 cardStyle">
            <div class="d-flex justify-content-between my-1 bb-1">
              <div class="bg-cardTwo">
                <v-icon class="white">{{ "mdi-star" }}</v-icon>
              </div>
              <div class="d-flex flex-column white">
                <span>Followers</span>
                <h3>+45K</h3>
              </div>
            </div>
            <div class="my-1 white d-flex">
              <v-icon class="white">
                {{ "mdi-waveform" }}
              </v-icon>
              <p class="mx-1 font-size1">Last Research</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="12" lg="3" xl="3">
          <v-card class="mx-1 cardStyle">
            <div class="d-flex justify-content-between my-1 bb-1">
              <div class="bg-cardThree">
                <v-icon class="white">{{ "mdi-account" }}</v-icon>
              </div>
              <div class="d-flex flex-column white">
                <span>Users</span>
                <h3>150,000</h3>
              </div>
            </div>
            <div class="my-1 white d-flex">
              <v-icon class="white">
                {{ "mdi-trophy" }}
              </v-icon>
              <p class="mx-1 font-size1">Customer feedback</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="12" lg="3" xl="3">
          <v-card class="mx-1 cardStyle">
            <div class="d-flex justify-content-between my-1 bb-1">
              <div class="bg-cardFour">
                <v-icon class="white">{{ "mdi-molecule" }}</v-icon>
              </div>
              <div class="d-flex flex-column white">
                <span>Errors</span>
                <h3>23</h3>
              </div>
            </div>
            <div class="my-1 white d-flex">
              <v-icon class="white">
                {{ "mdi-watch" }}
              </v-icon>
              <p class="mx-1 font-size1">In the last hours</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
};
</script>
