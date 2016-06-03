'use strict';

let fs = require('fs');
let recordsManager = {};
let theRecordFile = process.cwd() + '/records.json';
recordsManager.data = getTheJson(theRecordFile);

function getTheJson(name){
	try{
		return JSON.parse(fs.readFileSync(name).toString());
	}catch(e){
		return [];
	}
}

module.exports = recordsManager;