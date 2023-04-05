/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

export default class Page {

    /**
    * Opens the desired page on your local instance
    * @param route path of the sub page (e.g. /path/to/page.html)
    */
    public openlocal (route: string) {
        return browser.url(`https://mylearn.int.bbpd.io${route}`)
    }

     /**
    * Navigates to Admin page on Kubernetes test instance
    * @param route path of the sub page (e.g. /path/to/page.html)
    */
     public openKubeInstance (route: string) {
        return browser.url(`https://mylearn.int.bbpd.io${route}`)
    }

}
