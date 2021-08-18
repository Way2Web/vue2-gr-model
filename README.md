# Vue 2 directive for two-way binding Graphite components

A custom Vue directive that makes two-way binding [Graphite components](https://graphitedesignsystem.com) easier.

## Usage

Install the directive with this command.

```sh
npm install @graphiteds/vue2-gr-model
```

Next, import the directive into your app and enable it like this.

```js
import GraphiteModelDirective from '@graphiteds/vue2-gr-model';

Vue.use(GraphiteModelDirective);
Vue.config.ignoredElements = [/^gr-/];

// Your init here
new Vue({ ... });
```

Now you can use the `v-gr-model` directive to keep your data in sync!

```html
<gr-input v-gr-model="name"></gr-input>
```

## Why is this necessary?

Currently, there's [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830) in Vue 2. You can handle two-way binding manually, but's it rather verbose.

```html
<!-- This doesn't work -->
<gr-input v-model="name"></gr-input>

<!-- This works, but it's a bit longer -->
<gr-input :value="name" @gr-change="name = $event.target.value"></gr-input>
```

This utility solves this problem by creating a custom directive that works just like `v-model` but for Graphite components.

## Attribution

### Shoelace

This code is based and inspired on [vue-sl-model](https://github.com/shoelace-style/vue-sl-model) from [Shoelace](https://shoelace.style/).

```
Copyright (c) 2020 A Beautiful Site, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
