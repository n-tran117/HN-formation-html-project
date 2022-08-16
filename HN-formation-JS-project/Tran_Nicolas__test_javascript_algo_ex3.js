var body;
var tbl;
var tblBody;

function generateBaseAnomalie() {
	// get the reference for the body
	body = document.body;
	// creates a <table> element and a <tbody> element
	tbl = document.createElement("table");
	tblBody = document.createElement("tbody");
	//console.log(body);
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);

}

function displayErrorLine(funct, table) {
	if (table.length == 9) {
		//console.log(table);
		for (let i = 0; i < table.length; i++) {
			if (!funct(table[i])) {
				fillErrorsTable(`Line ${i + 1}`, table[i]);
			}
		}
		tbl.setAttribute("border", "2");
	}
}

function displayErrorColumn(funct, table) {
	if (table.length == 9) {
		//console.log(table);
		const columns = creatTableColumn(table);
		for (let i = 0; i < columns.length; i++) {
			if (!funct(columns[i])) {
				fillErrorsTable(`Column ${i + 1}`, columns[i]);
			}
		}
	}
}

function displayErrorRegions(funct, table) {
	if (table.length == 9) {
		//console.log(table);
		const regions = creatTableRegions(table);
		/*for (let i = 0; i < regions.length; i++) {
			if (!funct(regions[i])) {
				fillErrorsTable(`Regions ${i + 1}`, regions[i]);
			}
		}*/
	}
}

function fillErrorsTable(rerror, table) {
	let row = document.createElement("tr");
	let cell = document.createElement("td");
	let cellText = document.createTextNode(`${rerror} incorrect`);
	cell.appendChild(cellText);
	row.appendChild(cell);
	for (let y = 0; y < table.length; y++) {
		// Create a <td> element and a text node, make the text
		// node the contents of the <td>, and put the <td> at
		// the end of the table row
		cell = document.createElement("td");
		cellText = document.createTextNode(table[y]);
		cell.appendChild(cellText);
		row.appendChild(cell);

	}
	tblBody.appendChild(row);
}

function creatTableRegions(table) {
	if (table.length === 9) {
		let regions = new Array(9);
		regions[0] = new Array(9);
		regions[1] = new Array(9);
		regions[2] = new Array(9);
		regions[3] = new Array(9);
		regions[4] = new Array(9);
		regions[5] = new Array(9);
		regions[6] = new Array(9);
		regions[7] = new Array(9);
		regions[8] = new Array(9);

		/*for (let regionsRow = 1; regionsRow <= 3; regionsRow++) {
			for (let regionsCol = 1; regionsCol <= 3; regionsCol++) {
				for(let i =)getSquareIndexes
					regions[i] = regions[i].concat(table)
			}
		}//*/

		/*let row = 0;
		let col = 0;
		let tmpTable=[];
		let tmpSquare=[];
		for (let regionsRow = 1; regionsRow <= 3; regionsRow++) {
			for (let regionsCol = 1; regionsCol <= 3; regionsCol++) {
				row = 0;
				switch (regionsRow) {
					case 2:
						row = 3;
						break;
					case 3:
						row = 6;
						break;
				}

				/*console.log('regionsRow = ' + regionsRow);
				console.log('regionsCol = ' + regionsCol);

				for (let i = row; i < (regionsRow * 3); i++) {
					/*console.log('row = ' + row);
					console.log(`regionsRow = ${regionsRow*3}`);
					tmpTable = [];
					col = 0;
					switch (regionsCol) {
						case 2:
							col = 3;
							break;
						case 3:
							col = 6;
							break;
					}
					
					for (let y = col; y < regionsCol * 3; y++) {
						 tmpTable.push(table[i][y]);
						console.log(tmpTable);
						
					}
				}

				
			}
		}
		//console.log(regions);
		return regions;*/
	}
}

function creatTableColumn(table) {
	let columns = new Array(9);
	columns[0] = new Array(9);
	columns[1] = new Array(9);
	columns[2] = new Array(9);
	columns[3] = new Array(9);
	columns[4] = new Array(9);
	columns[5] = new Array(9);
	columns[6] = new Array(9);
	columns[7] = new Array(9);
	columns[8] = new Array(9);

	for (let i = 0; i < table.length; i++) {
		for (let y = 0; y < table.length; y++) {
			columns[i][y] = table[y][i];
		}
	}
	return columns;
}

// sets the border attribute of tbl to 2;
