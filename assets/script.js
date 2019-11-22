const isEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

const isEmpty = value => !value || String(value).trim() === ''

const ajax = async (uri, { method = 'GET', payload } = {}) => {
  if (!fetch) throw new Error('too_old')

  const request = await fetch(uri, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: payload ? JSON.stringify(payload) : null
  })

  const result = await request.json()

  return result
}

const init = () => {
  console.log('nothing.')
}

window.addEventListener('DOMContentLoaded', init)
