


import type{App} from 'vue';
// intersectionObserver 
// MutationObsever :  
// ResizeObserver:  
function useResize(el: HTMLElement, cb: Function) {
    let resize = new ResizeObserver((entries)=> {
        console.log(entries)
        cb(entries[0].contentRect);
    });
    resize.observe(el)
}

// <div  v-reszie="xxx"> </div>
const install = (app: App) => {
    app.directive('reszie', {
        mounted(el, binding) {
            useResize(el, binding.value)

        }
    })

}
useResize.install = install;

export default useResize;

