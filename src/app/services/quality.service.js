import httpServices from './http.service'

const qualityEndpoint = 'quality/'

const qualityService = {
  update: async (id, content) => {
    const { data } = await httpServices.put(qualityEndpoint + id, content)
    return data
  },
  get: async (id) => {
    const { data } = await httpServices.get(qualityEndpoint + id)
    return data
  },
  fetchAll: async () => {
    const { data } = await httpServices.get(qualityEndpoint)
    return data
  },
  create: async (content) => {
    const { data } = await httpServices.post(qualityEndpoint, content)
    return data
  },
  delete: async (id) => {
    const { data } = await httpServices.delete(qualityEndpoint + id)
    return data
  },
}

export default qualityService
