/**
SerDatas : This Service will Take care handling the JSON Datas..
**/
angularServices.service('SerDatas',function(){
	var thisDatas = this;
	thisDatas.init = function(){
		thisDatas.contacts = [
			{id:'1',name:'vijay',gender:'Male',mobile:'123',location:'chennai1',display:true},
			{id:'2',name:'aaaa',gender:'Male',mobile:'124',location:'chennai2' ,display:true},
			{id:'3',name:'bbbb',gender:'Male',mobile:'125',location:'chennai3' ,display:true},
			{id:'4',name:'cccc',gender:'Male',mobile:'126',location:'chennai4' ,display:true},
			{id:'5',name:'dddd',gender:'Male',mobile:'127',location:'chennai5' ,display:true}
		];
	};
	thisDatas.init();
});