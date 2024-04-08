<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
import TheMainRoom from "./TheMainRoom.vue";
import TheLifeCubeRoom from "./TheLifeCubeRoom.vue";
import ThePhysicRoom from "./ThePhysicRoom.vue";
import TheOceanRoom from "./TheOceanRoom.vue";
import TheSquareGroundRoom from "./TheSquareGroundRoom.vue";
import "../aframe/simple-grab.js";

defineProps({
	scale: Number,
	overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
	<a-scene
		background="color: skyblue;"
		:webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
		xr-mode-ui="XRMode: xr"
		physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
		simple-grab
	>
		<a-assets @loaded="allAssetsLoaded = true">
			<!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item id="room" src="assets/vr_gallery.glb"></a-asset-item>
			<!--
        Title: 3D Gallery for VR projects
        Model source: https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
			<a-asset-item
				id="physic-room"
				src="assets/3d_gallery_for_vr_projects.glb"
			></a-asset-item>
			<a-asset-item
				id="sound-1"
				response-type="arraybuffer"
				src="assets/sound1.mp3"
				preload="auto"
			></a-asset-item>
			<img
				id="room-physic-out-texture"
				:src="`assets/main-room-from-physic-room.png`"
			/>
			<img id="room-gol-out-texture" :src="`assets/main-room-from-gol-room.png`" />
			<img id="room-physic-texture" :src="`assets/physicRoom.png`" />
			<img id="room-ocean-texture" :src="`assets/ocean.jpg`" />
			<img id="room-square-ground-texture" :src="`assets/square-room.png`" />
		</a-assets>

		<template v-if="allAssetsLoaded">
			<TheMainRoom :scale="scale" />
			<TheLifeCubeRoom />
			<ThePhysicRoom />
			<TheOceanRoom />
			<TheSquareGroundRoom />
		</template>

		<TheCameraRig />
		<a-light
			type="ambient"
			color="#FFF"
			intensity="0.5"
			decay="2"
			backgroundColor="#FFF"
			position="0 2 0"
		></a-light>
	</a-scene>
</template>
