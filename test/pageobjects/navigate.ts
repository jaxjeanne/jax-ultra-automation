export class navigate {

// Test instances based on testing needed
    async saasInstance(route: string) {
        return browser.url(`https://jaxtest.blackboard.com${route}`)
    }

    async k8Instance(route: string) {
        return browser.url(`https://jaxtest.blackboard.com${route}`)
    }

// Main Course Navigation
    async goToCourseOutline (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/outline`)
    }
    async goToCreateItem (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/create`)
    }
    async goToAssessment (url: string, courseId: string, assessId: string) {
        return browser.url(`${url}/courses/${courseId}/assessment/test/${assessId}?courseId=${courseId}&gradeitemView=details`)
    }

    // Tab view Navigation
    async goToCalendar (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/calendar`)
    }
    async goToDiscussions (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/engagement`)
    }
    async goToGradebookItems (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/grades?gradebookView=list&listViewType=assignments`)
    }
    async goToGradebookStudents (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/grades?gradebookView=list&listViewType=students`)
    }
    async goToMessages (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/grades?gradebookView=list&listViewType=students`)
    }
    async goToAnalytics (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/analytics/courseActivity`)
    }

// Question Bank panels
    async goToQBmanage (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/outline/banks`)
    }
    async goToQBedit (url: string, courseId: string, bankId: string) {
        return browser.url(`${url}/courses/${courseId}/outline/banks/editBank/${bankId}`)
    }
    async goToQBreuse (url: string, courseId: string) {
        return browser.url(`${url}/courses/${courseId}/calendar`)
    }


}
export default new navigate();
