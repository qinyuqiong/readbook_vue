import Vue from 'vue';
import {
  Card, Col, Row, Container, Header, Footer, Main, Menu, MenuItem, Tag, Pagination,
} from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component(Card.name, Card);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(Container.name, Container);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(Main.name, Main);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Menu.name, Menu);
Vue.component(Tag.name, Tag);
Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
