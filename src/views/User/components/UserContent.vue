<template>
  <div>
    <h3 class="mx-2">User Profile</h3>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" lg="8" xl="8" sm="12">
          <v-card class="cardStyle white">
            <h5>Edit Profile</h5>
            <v-form class="my-1">
              <!-- One -->
              <div class="form d-flex">
                <div class="form-group mx-1">
                  <label for="company" class="d-block font-muted">Company:</label>
                  <input
                    type="text"
                    class="input-style white width-100 cursor__disable mt-1"
                    :disabled="true"
                    value="Fun Coders "
                  />
                </div>
                <div class="form-group">
                  <label for="company" class="d-block font-muted">User Name:</label>
                  <input
                    type="text"
                    class="input-style white width-100 mt-1"
                    value="Hosein"
                  />
                </div>
                <div class="form-group mx-1">
                  <label for="company" class="d-block font-muted">Email Address:</label>
                  <input
                    type="email"
                    placeholder="hsedaqat1378@gmail.com"
                    class="input-style white width-100 mt-1"
                  />
                </div>
              </div>
              <!-- Two -->
              <div class="form d-flex mt-2">
                <div class="form-group mx-1 width-100">
                  <label for="company" class="d-block font-muted">First Name:</label>
                  <input
                    type="text"
                    class="input-style white width-100 mt-1"
                    value="Hosein"
                  />
                </div>
                <div class="form-group width-100">
                  <label for="company" class="d-block font-muted">Last Name:</label>
                  <input
                    type="text"
                    class="input-style white width-100 mt-1"
                    value="Sedaqat"
                  />
                </div>
              </div>
              <!-- Three -->
              <div class="form d-flex mt-2">
                <div class="form-group mx-1 width-100">
                  <label for="Address" class="d-block font-muted">Address:</label>
                  <input
                    type="text"
                    class="input-style white width-100 mt-1"
                    value="Iran , Hormozgan Province BandarAbbass"
                  />
                </div>
              </div>
              <!-- Four -->
              <div class="form d-flex mt-2">
                <div class="form-group mx-1">
                  <label for="company" class="d-block font-muted">City:</label>
                  <input
                    type="text"
                    class="input-style white width-100 mt-1"
                    value="Bandar Abbas"
                  />
                </div>
                <div class="form-group">
                  <label for="company" class="d-block font-muted">Country:</label>
                  <input
                    type="text"
                    class="input-style white width-100 mt-1"
                    value="Iran"
                  />
                </div>
                <div class="form-group mx-1">
                  <label for="company" class="d-block font-muted">Postal Card:</label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    class="input-style white width-100 mt-1"
                  />
                </div>
              </div>
              <!-- Five -->
              <div class="form d-flex mt-2">
                <div class="form-group mx-1 width-100">
                  <label for="Address" class="d-block font-muted">About Me:</label>
                  <textarea class="input-style white width-100 mt-1" style="resize: none">
                              Hi, I'm Hosein as You Know I Front-End Developer
                              And I Smash on Keyboard for Create Something Cool Happens 😀
                            </textarea
                  >
                </div>
              </div>
              <div class="form mt-1">
                <button class="mx-1 btn" style="width: 20%">Save</button>
              </div>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4" xl="4" sm="12">
          <v-card class="cardStyle white">
            <div class="user-info d-flex flex-column align-center justify-content-center">
              <v-img
                class="my-1"
                src="../../../assets/Images/anime6.png"
                width="50px"
                height="50px"
              ></v-img>
              <span>Hosein Sedaqat</span>
              <h4 class="font-muted my-1">Front End Develoepr</h4>
              <p class="font-muted">
                Do not be scared of the truth because we need to restart the human
                foundation in truth And I love you like Kanye loves Kanye I love Rick
                Owens’ bed design but the back is...
              </p>
              <div class="div-social-icon my-1 d-flex">
                <button class="btn-user mx-1">
                  <v-icon class="white">
                    {{ "mdi-facebook" }}
                  </v-icon>
                </button>
                <button class="btn-user">
                  <v-icon class="white">
                    {{ "mdi-twitter" }}
                  </v-icon>
                </button>
                <button class="btn-user mx-1">
                  <v-icon class="white">
                    {{ "mdi-google" }}
                  </v-icon>
                </button>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:'UserContent'
});
</script>
