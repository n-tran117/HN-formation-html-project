var to_verify = new Array(9);
to_verify[0] = new Array(9);
to_verify[1] = new Array(9);
to_verify[2] = new Array(9);
to_verify[3] = new Array(9);
to_verify[4] = new Array(9);
to_verify[5] = new Array(9);
to_verify[6] = new Array(9);
to_verify[7] = new Array(9);
to_verify[8] = new Array(9);




function transfertTable(table) {
	if (table.length == 9) {
		for (let i = 0; i < table.length; i++) {
			let split = table[i].split(' ');
			for (let y = 0; y < split.length; y++) {
				to_verify[i][y] = split[y]
			}

		}
	}
}

function generateGrid() {
	// get the reference for the body
	var body = document.body;
	// creates a <table> element and a <tbody> element
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	// creating all cells
	for (var i = 0; i < to_verify.length; i++) {
		// creates a table row
		var row = document.createElement("tr");

		for (var y = 0; y < to_verify[i].length; y++) {
			// Create a <td> element and a text node, make the text
			// node the contents of the <td>, and put the <td> at
			// the end of the table row
			var cell = document.createElement("td");
			var cellText = document.createTextNode(to_verify[i][y]);
			cell.appendChild(cellText);
			row.appendChild(cell);
			
		}

		// add the row to the end of the table body
		tblBody.appendChild(row);
	}

	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
}



