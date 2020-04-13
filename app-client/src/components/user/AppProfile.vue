<template>
  <section>
    <h1>Profie Details</h1>
    <div class="row">
      <div class="col-75">
        <div class="container">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-50">
                <h3>User Information</h3>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" />
                <label for="email">Last Name</label>
                <input type="text" id="email" />
                <label for="email">Email</label>
                <input type="text" id="email" />
              </div>

              <div class="col-50">
                <h3>Profile Picture</h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    {{userData}}
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
      userService.methods.deleteProfile(this.userId).then(() => {
        authStore.clearUser();
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>


* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
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
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
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
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>