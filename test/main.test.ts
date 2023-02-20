import dotenv from 'dotenv'
dotenv.config()

const expect = require('chai').expect
const request = require('supertest')(`http://localhost:${process.env.PORT}`)

describe('Health check', () => {
  it('should return 200', async () => {
    const response = await request.get('/health')
    expect(response.status).to.be.greaterThanOrEqual(200).and.lessThan(299)
  })

  it('should return a timestamp that is not in the past', async () => {
    const response = await request.get('/health')
    expect(response.body.timestamp).to.be.greaterThan(Date.now() - 1000)
  })
})

describe('Sync', () => {
  it('should return 401 if no key is provided', async () => {
    const response = await request.get('/sync')
    expect(response.status).to.be.eql(401)
  })

  it('should return 401 if an invalid key is provided', async () => {
    const response = await request.get('/sync?key=invalid')
    expect(response.status).to.be.eql(401)
  })

  it('should return 200 if a valid key is provided', async () => {
    const response = await request.get(`/sync?key=${process.env.SYNC_KEY}`)
    expect(response.status).to.be.greaterThanOrEqual(200).and.lessThan(299)
  })
})
