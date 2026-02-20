const sampleEn = `The old lighthouse stood at the edge of the cliff, its beam sweeping across the dark water below. Captain Morris had seen it a thousand times, but tonight felt different. The fog was thicker than usual, and the distant sound of waves crashing against the rocks seemed louder somehow.

He adjusted his coat and stepped closer to the railing. Suddenly a light flickered in the distance — not the lighthouse, something else. He reached for his binoculars, but they weren't there. He had left them behind, just like he had left everything behind these past six months.

"You shouldn't be out here," said a voice behind him.

He turned. Maria stood in the doorway, her hair loose, her expression unreadable. She had left yesterday, he was sure of it. He had watched her car disappear down the lane. And yet here she was.

"The storm is coming," she said. "Tom already locked up the harbour."

Tom. He hadn't thought about Tom in years. For a moment he said nothing. For a moment the wind seemed to hold its breath. For a moment the whole world balanced on the edge of that cliff with him.`;

const sampleRu = `Старый маяк стоял на краю обрыва, его луч скользил по тёмной воде внизу. Капитан Морозов видел это тысячу раз, но сегодня ночью что-то было иначе. Туман был гуще обычного, и далёкий шум волн, разбивавшихся о камни, казался почему-то громче.

Он поправил пальто и подошёл ближе к перилам. Вдруг вдали замигал огонь — не маяк, что-то другое. Он потянулся за биноклем, но его не было. Он оставил его позади — так же, как оставил позади всё остальное за эти полгода.

— Тебе не стоит здесь стоять, — раздался голос за спиной.

Он обернулся. Мария стояла в дверях: волосы распущены, выражение лица — непроницаемое. Она уехала вчера, он был уверен в этом. Он видел, как её машина исчезла за поворотом дороги. И всё же она была здесь.

— Идёт шторм, — сказала она. — Том уже закрыл гавань.

Том. Он не думал о Томе уже много лет. На мгновение он промолчал. На мгновение ветер, казалось, затаил дыхание. На мгновение весь мир балансировал на краю того обрыва вместе с ним.`;

export function getSampleText(locale: string): string {
  return locale === 'ru' ? sampleRu : sampleEn;
}
