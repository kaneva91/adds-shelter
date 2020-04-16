Ad Shelter is an web application representing a web site for advertisments.

The functionality supports ads overview and user profile management with uses CRUD operations.

Every logged user is allowed to create and delete own ads, also to ads and remove ads to his favourites, only if the user is not the creator of the particular advertisment/ 

The front-end part is build on Vue, using route protection directives, mixins,custom filters and form validations(using vuelidate).

The back-end part is build on node js, using Express(usig the MVC pattern) with Jason Web Token verification on the protected back-end routes and bcrypt for password hashing.

MongoDB withMongoose ORM is being used for a database storage.



# app-client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
