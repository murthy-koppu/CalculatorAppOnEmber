EME.CalculatorController = Ember.ArrayController.extend({
	consoleValue: '0',
	prevOperation: '=',
	actions:{
		update: function(inValue){			
			var processedConsoleVal = '0';
			switch(inValue){
			case 'C' : 
				processedConsoleVal = '0';
				break;
			case '=' :
				processedConsoleVal =eval(this.get("consoleValue"));
				break;
			case 'x' :
				processedConsoleVal = this.get("consoleValue") + '*';
				break;
			case '+':
			case '-':
			case '/':
				processedConsoleVal = this.get("consoleValue") +''+ inValue;
				break;
			default:
				if(this.get("prevOperation") == '='){
					processedConsoleVal = inValue;
				}else if(this.get("consoleValue") == '0'){
					processedConsoleVal = inValue;
				}else{
					processedConsoleVal = this.get("consoleValue") +''+ inValue;
				}
			}
			this.set("prevOperation",inValue);	
			this.set("consoleValue",(processedConsoleVal));
		}
	}
});