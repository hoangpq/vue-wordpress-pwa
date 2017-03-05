webpackJsonp([9],{32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n.n(r),i=n(5),c=n(8),a=n(35).default,s={cacheRequest:function(e,t,n){return new Promise(function(r,o){a.get(e,t,n).then(function(e){r(e)}).catch(function(e){c.a.dispatch("showNotification","Oops! Looks like you are offline or the service is unavailable"),o(e)})})},getSettings:function(e){return this.cacheRequest(e,o.a.wpDomain+"wp-json?fields=",86400).then(function(e){c.a.commit(i.a,e.body)}).catch(function(e){return Promise.reject(e)})},getMenuByName:function(e,t){var n=this;return this.cacheRequest(e,o.a.wpDomain+"wp-json/wp-api-menus/v2/menus/?name="+t,86400).then(function(t){n.getMenu(e,t.body[0].term_id)}).catch(function(e){Promise.reject(e)})},getMenu:function(e,t){return this.cacheRequest(e,o.a.wpDomain+"wp-json/wp-api-menus/v2/menus/"+t,86400).then(function(e){c.a.commit(i.b,e.body)}).catch(function(e){return Promise.reject(e)})},getCategory:function(e,t,n){var r=o.a.wpDomain+"wp-json/wp/v2/categories/"+t;if(!t&&n)r=o.a.wpDomain+"wp-json/wp/v2/categories/?slug="+n+"&fields=id,name,slug,parent,link";else if(!t&&!n)return Promise.resolve("");return this.cacheRequest(e,r,300).then(function(e){return Promise.resolve(e.body)}).catch(function(e){return Promise.reject(e)})},getCategoryChildren:function(e,t){return this.cacheRequest(e,o.a.wpDomain+"wp-json/wp/v2/categories?parent="+t,300).then(function(e){return Promise.resolve(e.body)}).catch(function(e){return Promise.reject(e)})},getPostsFromCategories:function(e,t,n){var r=o.a.wpDomain+"wp-json/wp/v2/posts?categories="+t+"&per_page="+n+"&fields=id,slug,date,better_featured_image,excerpt";return this.cacheRequest(e,r,300).then(function(e){return Promise.resolve(e.body)}).catch(function(e){return Promise.reject(e)})},getPosts:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"desc",c=o.a.wpDomain+"wp-json/wp/v2/posts?categories="+t+"&page="+n+"&order="+i+"&per_page="+r+"&fields=id,title,slug,date,better_featured_image,excerpt";return this.cacheRequest(e,c,300).then(function(e){return Promise.resolve({posts:e.body,totalPages:e.headers.map["x-wp-totalpages"][0]})}).catch(function(e){return Promise.reject(e)})},getPost:function(e,t,n){var r=o.a.wpDomain+"wp-json/wp/v2/posts/"+t+"?fields=id,title,slug,tags,date,better_featured_image,content,rest_api_enabler,pure_taxonomies";return!t&&n&&(r=o.a.wpDomain+"wp-json/wp/v2/posts/?slug="+n+"&fields=id,title,slug,tags,date,better_featured_image,content,rest_api_enabler,pure_taxonomies"),this.cacheRequest(e,r,900).then(function(e){return Promise.resolve(e.body)}).catch(function(e){return Promise.reject(e)})},getPage:function(e,t,n){var r=o.a.wpDomain+"wp-json/wp/v2/pages/"+t;return!t&&n&&(r=o.a.wpDomain+"wp-json/wp/v2/pages/?slug="+n),this.cacheRequest(e,r,900).then(function(e){return Promise.resolve(e.body)}).catch(function(e){return Promise.reject(e)})}};t.default=s},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n.n(r),i={localforage:"",store:"",storeCacheTime:"",currentTime:"",networkFirstStrategy:function(e,t,n){return new Promise(function(r,o){e.$http.get(t).then(function(e){i.storeCacheTime.setItem(t,i.currentTime+n),i.store.setItem(t,{body:e.body,headers:e.headers}).then(r(e)).catch(function(e){return o(e)})}).catch(function(e){i.store.getItem(t).then(function(e){return r(e)}).catch(function(e){return o(e)})})})},offlineFirstStrategy:function(e,t,n){return new Promise(function(r,o){i.storeCacheTime.getItem(t).then(function(c){c<i.currentTime?i.networkFirstStrategy(e,t,n).then(function(e){r(e)}).catch(function(e){return o(e)}):i.store.getItem(t).then(function(c){c?r(c):i.networkFirstStrategy(e,t,n).then(function(e){return r(e)}).catch(function(e){return o(e)})}).catch(function(c){i.networkFirstStrategy(e,t,n).then(function(e){return r(e)}).catch(function(e){return o(e)})})}).catch(function(c){i.networkFirstStrategy(e,t,n).then(function(e){return r(e)}).catch(function(e){return o(e)})})})},get:function(e,t,r){return new Promise(function(c,a){i.currentTime=Math.floor(Date.now()/1e3),n.e(10).then(function(){i.localforage=n(34),i.store=i.localforage.createInstance({name:o.a.loadDbName}),i.storeCacheTime=i.localforage.createInstance({name:o.a.loadDbName+"_cacheTime"}),r?i.offlineFirstStrategy(e,t,r).then(function(e){e?c(e):a()}).catch(function(e){return a(e)}):i.networkFirstStrategy(e,t,0).then(function(e){e?c(e):a()}).catch(function(e){return a(e)})}.bind(null,n)).catch(n.oe)})}};t.default=i}});