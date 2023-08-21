export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getDOM = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getDOM });
    };
}
