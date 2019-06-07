React Delivery GraphQL
======================================

This project developed as a form of study using some libraries that the job market asked for today, containing a good structure of files and organization of code. Run the application and be happy.


- Create React App by [create-react-app](https://github.com/facebook/create-react-app)
- React by [react](https://babeljs.io)
- Redux for state management among others, by [redux](https://redux.js.org/)
- React Router Dom by [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- GraphQL - React by [graphql-apollo-react](https://www.apollographql.com/docs/react/)
- Styled Components by [styled-components](https://www.styled-components.com/)
- TestCafé by [testcafe](https://devexpress.github.io/testcafe/documentation/test-api/)


## Getting Started

```sh
# clone it
  git clone https://github.com/caioorg/react-delivery-graphql
  cd react-delivery-graphql

# Make it your own
  rm -rf .git && git init
  
# Install dependencies
  yarn install

# Copy archive .env
  In the project root has an .env.local.example file, duplicate the file with the following filename .env.local
  
# Generate key Google Maps API
  For the search engine to work you need to generate a key on the Google Maps API site - https://developers.google.com/maps/documentation/geocoding/start (free). After the key generation, access the .env.local file and change the key: REACT_APP_KEY_API by adding the key value generated in it.
  Example: REACT_APP_KEY_API=ABSbkbkbBKKASDKJBasdJSV

# Start project development
  yarn start

# Run the tests
  yarn run test

# If you want to start production
  yarn build

```

## License

MIT
