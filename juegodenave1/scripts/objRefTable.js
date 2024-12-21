const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{"8Direction": 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Bullet: 0},
	{DestroyOutsideLayout: 0},
	{bala: 0},
	{Keyboard: 0},
	{Sprite3: 0},
	{score: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	bala: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {}
}