<script setup>
import PortalTeleporter from "./PortalTeleporter.vue";

// Nous allons ajouter un pavage de 10x10 cubes depuis le centre de la pièce puis nous allons l'améliorer par la suite

const data = {
	rows: 20,
	cols: 10,
	offset: 0.02, // Ajustez la valeur de l'offset selon vos besoins
	square: {
		width: 0.5,
		height: 0.05,
		depth: 0.5,
	},
};
for (let i = 0; i < data.rows; i++) {
	for (let j = 0; j < data.cols; j++) {
		const myTile = document.createElement("a-box");
		myTile.setAttribute("width", data.square.width);
		myTile.setAttribute("height", data.square.height);
		myTile.setAttribute("depth", data.square.depth);
		// color the tile, one of 2 is black other is white

		myTile.setAttribute("color", `${(i + j) % 2 === 0 ? "black" : "white"}`);

		// position the tile, we will use the offset to space them out
		myTile.setAttribute(
			"position",
			`${i * (data.square.width + data.offset) * -1 + 5} 400 ${
				j * (data.square.width + data.offset) * -1
			}`
		);
		document.querySelector("a-scene").appendChild(myTile);
	}
}
</script>

<template>
	<a-box id="squareroom" position="0 402 0" depth="10" height="5" width="10">
		>
		<a-light
			type="ambient"
			color="#FFF"
			intensity="0.5"
			decay="2"
			backgroundColor="#FFF"
			position="0 2 0"
		></a-light>
		<PortalTeleporter
			label="Back to main room"
			material="src: #room-gol-out-texture"
			position="0 -0.5 0.2"
			rotation="0 180 0"
			:rot="0"
		/>
	</a-box>

	<!-- Life Cube room navigation mesh -->
	<a-entity
		data-role="nav-mesh"
		geometry="primitive: plane; height: 4.8; width: 9.8"
		position="0 400.01 -2.5"
		rotation="-90 0 0"
		material="color: #555"
		visible="true"
	></a-entity>
</template>
