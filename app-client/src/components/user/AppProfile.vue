<template>
  <section>
    <h1>Profie Details</h1>
    <div class="row">
      <div class="col-75">
        <div class="container">
          <div class="row">
            <div class="col-50">
              <h3>User Information</h3>
              <div>
                <span class="label">First Name :</span>
                <span class="label-data">{{userData.firstName}}</span>
              </div>
              <div>
                <span class="label">Last Name :</span>
                <span class="label-data">{{userData.lastName}}</span>
              </div>
              <div>
                <span class="label">Email :</span>
                <span class="label-data">{{userData.email}}</span>
              </div>
            </div>

            <div class="col-40">
              <button>Back to home</button>
              <button @click="deleteHandler">Delete Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import authStore from "../store/auth";
import userService from "../mixins/user-service";

export default {
  name: "AppProfile",
  mixins: [userService],
  data: function() {
    return {
      userId: authStore.user._id,
      userData: null
    };
  },
  created() {
    this.getProfileDetails(this.userId).then(
      resp => (this.userData = resp.data)
    );
  },
  methods: {
    deleteHandler() {
      
      if (
        confirm(
          "If you delete your profile, your ads will be deleted, too. Are you sure?"
        )
      ) {
        userService.methods.deleteProfile(this.userId).then(() => {
          authStore.clearUser();
          this.$router.push("/");
        });
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

section {
  max-width: 800px;
  margin: 50px auto;
  padding: 40px;
}
h1 {
  margin-bottom: 30px;
}

button {
  border-radius: 6px;
  margin: 10px auto;
  margin-right: 20px;
  width: 200px;
  height: 40px;
  display: block;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
  justify-content: columns;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-40 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 15px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

.label {
  margin: 20px;
  display: inline-block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #4caf50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btn:hover {
  background-color: #45a049;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>