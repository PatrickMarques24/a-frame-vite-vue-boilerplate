export const createPavement = (
	data,
	altitude,
	inversion = -1,
	ajustementTailleSalle
) => {
	for (let i = 0; i < data.rows; i++) {
		for (let j = 0; j < data.cols; j++) {
			const myTile = document.createElement("a-box");
			myTile.setAttribute("width", data.square.width);
			myTile.setAttribute("height", data.square.height);
			myTile.setAttribute("depth", data.square.depth);
			// color the tile, one of 2 is black other is white

			myTile.setAttribute(
				"color",
				`${(i + j) % 2 === 0 ? data.square.color1 : data.square.color2}`
			);

			// position the tile, we will use the offset to space them out
			myTile.setAttribute(
				"position",
				`${
					i * (data.square.width + data.offset) * inversion + ajustementTailleSalle
				} ${altitude} ${
					j * (data.square.width + data.offset) * inversion + ajustementTailleSalle
				}`
			);
			document.querySelector("a-scene").appendChild(myTile);
		}
	}
};
