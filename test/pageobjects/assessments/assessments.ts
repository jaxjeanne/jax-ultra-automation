import Page from "../page";

export class Assessments extends Page {
    get addTestOption() {
        return $('.js-content-create-menu').$('a.js-assessment-test');
    }

    get addAssignmentOption() {
        return $('.js-content-create-menu').$('a.js-assessment-assignment');
    }

    get assessTitleHeader() {
        return $('input.panel-title');
    }

    get visibility() {
        return $('button[name="visibility-content"]');
    }

    get visible() {
        return $('a.visible-option')
    }

    get hidden() {
        return $('a.hidden-option')
    }

    async setVisibility(visible: boolean) {
        await this.visibility.click();
        if (visible == true) {
        await this.visible.click();
        }
        else await this.hidden.click();


    }
    async createTest() {
        await this.addTestOption.click();
        await this.assessTitleHeader.setValue("Assessment")
        await this.setVisibility(true);
        return this;
    }

    async createAssignment() {
        await this.addAssignmentOption.click();
        return this;
    }
}
export default new Assessments();
