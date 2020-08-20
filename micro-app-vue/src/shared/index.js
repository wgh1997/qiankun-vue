// micro-app-vue/src/shared/index.js
class Shared {
    /**
     * 获取 Token
     */
    getToken() {
        // 子应用独立运行时，在 localStorage 中获取 token
        return localStorage.getItem("token") || "";
    }
    /**
     * 设置 Token
     */
    setToken(token) {
        // 子应用独立运行时，在 localStorage 中设置 token
        localStorage.setItem("token", token);
    }
}
let SharedModule = /** @class */ (() => {
    class SharedModule {
        /**
         * 重载 shared
         */
        static overloadShared(shared) {
            console.log(shared,'我是重载 shared')
            SharedModule.shared = shared;
        
        }
        /**
         * 获取 shared 实例
         */
        static getShared() {
            return SharedModule.shared;
        }
    }
    SharedModule.shared = new Shared();
    return SharedModule;
})();
class emitFnc{
}
let emitFncModul = /** @class */ (() => {
    
    class emitFncModul {
        /**
         * 重载 emitFnc
         */
        static overloadShared(emitFnc) {
            console.log(emitFnc,'我是重载 emitFnc')
            emitFncModul.emitFnc = emitFnc;
        
        }
        /**
         * 获取 emitFnc 实例
         */
        static getShared() {
            return emitFncModul.emitFnc;
        }
    }
    emitFncModul.emitFnc = new emitFnc();
    return emitFncModul;
})();
// console.log(emitFncModul.getShared(),'我是什么')
export  {
    SharedModule,
    emitFncModul
};
