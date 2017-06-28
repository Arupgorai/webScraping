var express = require('express');
var request = require('request');
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');

var app = express();
var port = 8000;


// var url = "http://google.com";
// request(url, function(err, resp, data){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(data);
// 	}
// });

// var destination = fs.createWriteStream('./download/google.html');
// var url = "http://google.com";
// request(url)
// .pipe(destination)
// .on('finish', function(){
// 	console.log('done');
// })
// .on('error', function(){
// 	console.log(err);
// });


// var url = "http://swift-bic.herokuapp.com/countries/india/13037-bank-of-india?page=4";
// //console.log(url);
// request(url, function(err, resp, data){
// 	var $ = cheerio.load(data);
// 	var data1 = $('.table tbody tr');
// 	var data1text = data1.text();
// 	var arr = [];
// 	$(data1).each(function(i, item){
// 		arr.push($(item).text().split(/\n\s?/).join(",").split("           ").join(",").split(",").join(" "));    	
// 	});
// 	console.log(arr);
// });



// var url = "http://swift-bic.herokuapp.com/BKIDINBBJOD";
// //var destination = fs.createWriteStream('./download/bank');
// request(url, function(err, resp, data){
// 	var $ = cheerio.load(data);
// 	var data1 = $('.table');
// 	var data1text = data1.text();
// 	//var data2text = data1text;
// 	fs.writeFileSync('./download/data2.txt', data1text);
// 	console.log(data1text);
// });


var url = "https://www.bankbazaar.com/ifsc-code/icici-bank/jharkhand/purbi-singhbhum/azadnagar-branch-branch.html";
request(url, function(err, resp, data){
	var $ = cheerio.load(data);

	var ifsc = $('.table td strong a');
	var ifsc_text = ifsc.text();

	var bank_name = $('#ifscBank');
	var bank_name_text = bank_name.text();

	var branch_address = $('#branchAddress');
	var branch_address_text = branch_address.text();

	var bank_district = $('#bankDistrict');
	var bank_district_text = bank_district.text();

	var bank_state = $('#bankState');
	var bank_state_text = bank_state.text();

	var branch_Phone = $('#branchPhoneNumber');
	var branch_phone_number_text = branch_Phone.text();

	var branch_code = $('#branchCode');
	var branch_code_text = branch_code.text();

	var obj = {
		ifsc : ifsc_text,
		bank_name : bank_name_text,
		branch_address : branch_address_text,
		bank_district : bank_district_text,
		bank_state : bank_state_text,
		branch_Phone_number : branch_phone_number_text,
		branch_code : branch_code_text
	};
 	var str_obj = JSON.stringify(obj);

	fs.writeFileSync('./download/newdata.txt', str_obj,{encoding : 'utf8'});


	console.log(obj);
});


app.listen(port);
console.log("server listening on port : "+ port);