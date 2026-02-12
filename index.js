require('dotenv').config()
const express = require('express')

const app = express()

const githubData = {
  login: 'Yukta-Nagpal',
  id: 96064455,
  node_id: 'U_kgDOBbnTxw',
  avatar_url: 'https://avatars.githubusercontent.com/u/96064455?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/Yukta-Nagpal',
  html_url: 'https://github.com/Yukta-Nagpal',
  followers_url: 'https://api.github.com/users/Yukta-Nagpal/followers',
  following_url:
    'https://api.github.com/users/Yukta-Nagpal/following{/other_user}',
  gists_url: 'https://api.github.com/users/Yukta-Nagpal/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/Yukta-Nagpal/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/Yukta-Nagpal/subscriptions',
  organizations_url: 'https://api.github.com/users/Yukta-Nagpal/orgs',
  repos_url: 'https://api.github.com/users/Yukta-Nagpal/repos',
  events_url: 'https://api.github.com/users/Yukta-Nagpal/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/Yukta-Nagpal/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: null,
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2021-12-13T14:03:52Z',
  updated_at: '2025-02-26T05:37:48Z'
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, (req, res) => {
  console.log(`Example port listening at ${process.env.PORT}`)
})
