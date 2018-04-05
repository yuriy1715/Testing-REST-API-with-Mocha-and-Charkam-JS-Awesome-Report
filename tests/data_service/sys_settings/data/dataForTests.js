module.exports = {
        TestDataForService1: {
            data: {
                sysSettingsNameCollection: 'TestDataForService1'
            },
            expectedResult: {
                "values": {
                    "TestDataForService1": {
                        "code": "TestDataForService1",
                        "isCacheable": true,
                        "displayValue": "",
                        "dataValueType": 10,
                        "typeName": "Guid"
                    }
                }, "success": false, "rowsAffected": -1, "nextPrcElReady": false
            }
        },
        TestDataForService12: {
            data: {
                sysSettingsNameCollection: 'TestDataForService12'
            },
            expectedResult: {
                "values": {
                    "TestDataForService12": {
                        "code": "TestDataForService12",
                    }
                }, "success": false, "rowsAffected": -1, "nextPrcElReady": false
            }
        },
        TestDataForService3: {
            data: {
                sysSettingsNameCollection: 'TestDataForService3'
            },
            expectedResult: {
                "values": {},
                "success": false,
                "rowsAffected": -1,
                "nextPrcElReady": false
            }
    },
        TestDataForService4: {
            data: {
                "id": "684a7426-5813-e011-900c-00155d043204",
                "name": "testtest",
                "code": "test",
                "description": "",
            },
            expectedResult: {
                "success": true,
                "rowsAffected": 1,
                "nextPrcElReady": false
            }
        }
};