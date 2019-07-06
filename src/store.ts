// import Vue from 'vue';
// import Vuex from 'vuex';
// import router from '@/router'
// Vue.use(Vuex);


// export default new Vuex.Store({
//     state : {
//       hasState: false,
//       tab: 'gmd',
//       page: 'dashboard',
//       baseRepo: '',
//       gitRepo: '',
//       comparedRepoGroups: new Array(),
//       comparedRepos: new Array(),
//       trailingAverage: 180,
//       startDate: new Date('1 February 2011'),
//       endDate: new Date(),
//       compare: 'rolling',
//       showBelowAverage: false,
//       rawWeekly: false,
//       showArea: true,
//       showDetail: false,
//       showTooltip: true,
//       byDate: false
//     },
//     mutations: {
//       setBaseRepo (state, payload) {
//         state.gitRepo = payload.gitURL
//         state.baseRepo = payload.gitURL
//         state.hasState = true
//         let repo = window.AugurAPI.Repo(payload)
//         if (!window.AugurRepos[repo.toString()]) {
//           window.AugurRepos[repo.toString()] = repo
//         } else {
//           repo = window.AugurRepos[repo.toString()]
//         }
//       },
//       setGitRepo (state, payload) {
//         state.gitRepo = payload.gitURL
//         state.baseRepo = payload.gitURL
//         state.hasState = true
//         let repo = null
//         let repoName = gitUrlToString(payload)
//         if (!window.AugurRepos[repoName]) {
//           repo = window.AugurAPI.Repo(payload)
//           window.AugurRepos[repo.toString()] = repo
//         } else {
//           repo = window.AugurRepos[repoName]
//         }
//         state.baseRepo = repo.toString()
//       },
//       setRepo (state, payload) {
//         let repoName = gitUrlToString(payload)
//         let repo = null
//         // let repo = window.AugurAPI.Repo(payload)
//         if (!window.AugurRepos[repoName]) {
//           repo = window.AugurAPI.Repo(payload)
//           window.AugurRepos[repo.toString()] = repo
//         } else {
//           repo = window.AugurRepos[repoName]
//         }
//         // state.queryObject = {}
//         state.hasState = true
//         if (repo.owner && repo.name && !state.gitRepo) {
//           state.baseRepo = repo.toString()
//           let title = repo.owner + '/' + repo.name + '- Augur'
//           // state.tab = 'gmd'
//           // state.queryObject['repo'] = repo.owner + '+' + repo.name
//         }
//         if (payload.gitURL) {
//           // state.queryObject['git'] = window.btoa(repo.gitURL)
//           // state.tab = 'git'
//           state.gitRepo = repo.gitURL
//           state.tab = state.tab ? state.tab : 'git'
//         }
//       },
//       // removeComparedRepo (state, payload) {
//       //   state.comparedRepos
//       // },
//       addComparedRepo (state, payload) {
//         state.compare = 'zscore'
//         state.hasState = true
//         let repo = window.AugurAPI.Repo(payload)
//         if(!state.comparedRepos.includes(repo.toString()) && state.baseRepo != repo.toString()){
//           if (!window.AugurRepos[repo.toString()]) {
//             window.AugurRepos[repo.toString()] = repo
//           } else {
//             repo = window.AugurRepos[repo.toString()]
//           }
//           state.hasState = true
//           if (repo.owner && repo.name) {
//             state.comparedRepos.push(repo.toString())
//             let title = repo.owner + '/' + repo.name + '- Augur'
//           }
//           if (payload.gitURL) {
//             state.gitRepo = repo.gitURL
//           }
//           if (state.comparedRepos.length == 1) {
//             if (!router.currentRoute.params.comparedrepo) {

//               let owner = state.gitRepo ? null : state.baseRepo.substring(0, state.baseRepo.indexOf('/'))
//               let repo = state.gitRepo ? state.gitRepo : state.baseRepo.slice(state.baseRepo.indexOf('/') + 1)
//               let name = state.tab + "compare"
//               router.push({
//                 name,
//                 params: {owner, repo, comparedowner: payload.owner, comparedrepo: payload.name}
//               })
//             }
//           } else {
//             let groupid = (state.gitRepo ? String(state.gitRepo) + '+' : String(state.baseRepo) + "+")
//             state.comparedRepos.forEach((repo) => {
//               groupid += (String(repo) + '+')
//             })
//             let name = state.tab + "group"
//             router.push({
//               name,
//               params: {
//                 groupid
//               }
//             })
//           }
//         }
//       },
//       setDates (state, payload) {
//         if (payload.startDate) {
//           state.startDate = new Date(payload.startDate)
//         }
//         if (payload.endDate) {
//           state.endDate = new Date(payload.endDate)
//         }
//       },
//       setCompare (state, payload) {
//         state.compare = payload.compare
//       },
//       setTab (state, payload) {
//         state.tab = payload.tab
//         state.hasState = true
//       },
//       setVizOptions (state, payload) {
//         if (payload.trailingAverage) {
//           state.trailingAverage = parseInt(payload.trailingAverage, 10)
//         }
//         if (typeof payload.rawWeekly !== 'undefined') {
//           state.rawWeekly = payload.rawWeekly
//         }
//         if (typeof payload.showBelowAverage !== 'undefined') {
//           state.showBelowAverage = payload.showBelowAverage
//         }
//         if (typeof payload.showArea !== 'undefined') {
//           state.showArea = payload.showArea
//         }
//         if (typeof payload.showTooltip !== 'undefined') {
//           state.showTooltip = payload.showTooltip
//         }
//         if (typeof payload.showDetail !== 'undefined') {
//           state.showDetail = payload.showDetail
//         }
//       },
//       resetComparedRepos (state) {
//         state.comparedRepos = []
//         router.push({
//           name: state.tab,
//           params: {owner: state.baseRepo.substring(0, state.baseRepo.indexOf('/')), repo: state.baseRepo.slice(state.baseRepo.indexOf('/') + 1)}
//         })
//       },
//       resetBaseRepo (state) {
//         state.baseRepo = ''
//       },
//       resetTab (state) {
//         state.tab = ''
//       },
//       reset (state) {
//         state = {
//           baseRepo: '',
//           hasState: false,
//           tab: 'gmd',
//           page: 'dashboard',
//           gitRepo: '',
//           comparedRepoGroups: new Array(),
//           comparedRepos: new Array(),
//           trailingAverage: 180,
//           startDate: new Date('1 January 2005'),
//           endDate: new Date(),
//           compare: 'each',
//           showBelowAverage: false,
//           rawWeekly: false,
//           showArea: true,
//           showDetail: false,
//           showTooltip: true,
//           byDate: false
//         }
//         window.history.pushState(null, 'Augur', '/')
//       } // end reset
//     } // end mutations
//   })

//   function gitUrlToString(optipns:{githubURL?:string, gitURL?:string}){
//     let owner = null
//     let name = null
//     if (optipns.githubURL) {
//       let splitURL = optipns.githubURL.split('/')
//       if (splitURL.length < 3) {
//         owner = splitURL[0]
//         name = splitURL[1]
//       } else {
//         owner = splitURL[3]
//         name = splitURL[4]
//       }
//     }

//     if (optipns.gitURL) {
//       if (optipns.gitURL.includes('github.com')) {
//         let splitURL = optipns.gitURL.split('/')
//         owner = splitURL[1]
//         name = splitURL[2].split('.')[0]
//       } else {
//         let splitURL = optipns.gitURL.split('/')
//         owner = splitURL[0]
//         name = splitURL[1]
//       }
//     }

//     if (owner && name) {
//       return owner + '/' + name
//     } else {
//       return JSON.stringify(optipns)
//     }
//   }