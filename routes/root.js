'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return "hello world"
  })
}

// 다른 표현 방식
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     reply.code(200)
//     .send('hello world')
//   })
// }