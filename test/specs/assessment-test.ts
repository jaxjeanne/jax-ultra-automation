import navigate from "../pageobjects/navigate";
import Assessments from "../pageobjects/assessments/assessments";

describe('Instructor Assessments', () => {
    it('can create assessment', async() => {
        const testInstance = 'https://jaxtest.blackboard.com/ultra/';
        const courseId = '_3_1'
        await navigate.goToCreateItem(testInstance, courseId)
        await Assessments.createTest();
    })
})
