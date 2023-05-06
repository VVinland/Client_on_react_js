export const  detectDarkMode = ()=>{
    if(window.matchMedia && window.matchMedia('(preferens-color-scheme: dark').matches){
        return 'dark';
    }else{
        return 'light';
    }
}  