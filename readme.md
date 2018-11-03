### Vue-Anime

Simple Vue bindings for Anime.js

#### Install

```bash
$ npm install --save vue-animejs
```

```js
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)
```

#### Usage

> Adds a simple directive named `v-anime` that passes all arguments directly to [anime.js](https://github.com/juliangarnier/anime/)
```html
<div v-anime="{ rotate: '1turn', backgroundColor: '#FFF', duration: 2000, loop: true }"></div>
```

> Also adds this.$anime to your components
```js
export default {
  name: "my-component",
  data() {
    return {};
  },
  mounted() {
    const targets = this.$el;
    this
      .$anime
      .timeline()
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      })
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      });
      /* ... etc ... */
  },
}
```
