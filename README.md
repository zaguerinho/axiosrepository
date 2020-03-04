# axiosrepository
axios repository pattern javascript

```javascript
import Repositories from './repositories/RepositoryFactory'
...
const reponame = 'utils'
    const utils = Repositories.get(reponame)
    if (utils !== false) {
      utils.ping()
      .then(response =>{
        console.log(response)
      })
      .catch(error => {
        console.error("And error has ocurred while pinging", error)
      })
      .finally( () => {
         console.log("ended.")
      })
    } else {
      console.error('Invalid repo', reponame)
    }
```
