import shortid from 'shortid'

export default ({ message, who } = {}) => ({
    message: message || 'Olá, falo aqui da Terra',
    id: shortid.generate(),
    who: who || 'other'
})