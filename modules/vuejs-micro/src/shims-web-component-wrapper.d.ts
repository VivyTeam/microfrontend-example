// https://github.com/vuejs/vue-web-component-wrapper/issues/28
declare module "@vue/web-component-wrapper" {
  export default function wrap(Vue: any, Component: any): any;
}
