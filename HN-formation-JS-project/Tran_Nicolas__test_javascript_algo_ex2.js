function verifyAllNumersDifferent(table){
	if(table.length == 9){
		for(let i = 0; i < table.length; i++){
			//console.log('I = '+table[i]);
			for(let y = table.length-1; y > i; y--){
				//console.log('Y = '+y+' table ='+table[y]);
				if(table[y] === table[i]){
					return false;
				}
			}
		}
		return true;
	}
}