

export function searchByAttr(wrapper,element){
    return wrapper.find(`[data-test="${element}"]`);
}