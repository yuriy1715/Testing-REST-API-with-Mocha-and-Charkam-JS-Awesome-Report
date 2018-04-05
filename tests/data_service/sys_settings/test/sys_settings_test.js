const chakram = require('chakram');
let expect = chakram.expect;
let post = chakram.post;
const beforeModule = require('../../../../utils/before.js');
const dataModule = require('..//data//dataForTests.js');
const connectionConfig = require('../../../../core/connection.json');

beforeModule.loginModule();
const url = connectionConfig.applicationUrl;

describe("tests for ExampleService1, compare data", () => {

    it("should return data for correct  TestDataForService1", () => {
        let send = dataModule.TestDataForService1.data;
        let expectedResult = dataModule.TestDataForService1.expectedResult;
        return post(url + "your/service", send)
            .then((response) => {
                expect(response).to.have.status(200);
                expect(response).to.comprise.of.json(expectedResult);
            });
    });

    it("should return data for correct TestDataForService12", () => {
        let send = dataModule.TestDataForService12.data;
        let expectedResult = dataModule.TestDataForService12.expectedResult;
        return post(url + "your/service", send)
            .then((response) => {
                expect(response).to.have.status(200);
                expect(response).to.comprise.of.json(expectedResult);
            });
    });

    it("should return data for incorrect", () => {
        let send = dataModule.TestDataForService3.data;
        let expectedResult = dataModule.TestDataForService3.expectedResult;
        return post(url + "your/service", send)
            .then((response) => {
                expect(response).to.have.status(200);
                expect(response).to.comprise.of.json(expectedResult);
            });
    });
});

describe("tests for ExampleService2, compare data", () => {

    it("should return data for edit data", () => {
        let send = dataModule.TestDataForService4.data;
        let expectedResult = dataModule.TestDataForService4.expectedResult;
        return post(url + "your/service", send)
            .then((response) => {
                expect(response).to.have.status(200);
                expect(response).to.comprise.of.json(expectedResult);
            });
    });
});
