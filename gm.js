import { world } from '@minecraft/server';

world.afterEvents.chatSend.subscribe((eventData) => {
	const player = eventData.sender;
	if (!player.hasTag('Admin')) return;
	switch (eventData.message) {
		case '!gmc':
			eventData.cancel = true;
			player.runCommandAsync('gamemode c');
			break;

		case '!gms':
			eventData.cancel = true;
			player.runCommandAsync('gamemode s');
			break;

		case '!f':
			eventData.cancel = true;
			player.setOnFire.apply;
			break;

		default:
	}
});
