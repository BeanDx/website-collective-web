function getUrlQueryParams () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
}

function getParentOrigin () {
    const params = getUrlQueryParams()
    return params.parentOrigin || null
}

function onSignButtonClick (action) {

    window.parent && window.parent.postMessage({action}, getParentOrigin())
}