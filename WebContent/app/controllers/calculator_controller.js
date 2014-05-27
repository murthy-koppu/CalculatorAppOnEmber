EME.CalculatorController = Ember.ArrayController.extend({
	consoleValue: '0',
	actions:{
		update: function(value){
			var processedConsoleVal = '0';
			switch(value){
			case 'c' : 
				processedConsoleVal = '0';
				break;
			case '=' :
				processedConsoleVal =eval(this.get("consoleValue"));
				break;
			case 'x' :
				processedConsoleVal = this.get("consoleValue") + '*';
				break;
			default:
				if(this.get("consoleValue") == '0'){
					processedConsoleVal = value;
				}else{
					processedConsoleVal = this.get("consoleValue") +''+ value;
				}
			}
				
			this.set("consoleValue",(processedConsoleVal));
		}
	}
});