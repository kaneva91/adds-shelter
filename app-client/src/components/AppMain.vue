<template>
    <div>
        Main
    </div>
</template>

<script>

import axios from 'axios';
export default {
    data : function(){
        return {
            resp : null
        }

    },
    created (){
      axios
      .get('https://localhost:9999/api/user/login')
      .then(response => {
          console.log(response)
      })
    }
}
</script>