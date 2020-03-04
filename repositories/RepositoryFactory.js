import RepositoryUtils from './RepositoryUtils'

const repositories = {
    'utils': RepositoryUtils,
}

export default  {
    get: name => {
       return  repositories.hasOwnProperty(name) ?  repositories[name] : false
    }
}
