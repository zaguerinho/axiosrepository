import Repository from './Repository'

const resource = '/ping'

export default {
    ping() {
        return Repository.get(resource)
    }

}