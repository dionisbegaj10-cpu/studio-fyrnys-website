import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE = '/Users/daniel/Test2/aspreastudio-clone/public';

const assets = [
  // Fonts
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/67213224bb25ed1e1b0a85d0_TypeType%20-%20TT%20Norms%20Pro%20Regular.ttf', dest: 'fonts/TTNormsPro-Regular.ttf' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/61fbfeb6154cfc71ada43082_TypeType%20-%20TT%20Norms%20Pro%20Bold.ttf', dest: 'fonts/TTNormsPro-Bold.ttf' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/6217bc2a037fe56e2eac2c49_TypeType%20-%20TT%20Norms%20Pro%20Thin.ttf', dest: 'fonts/TTNormsPro-Thin.ttf' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/672132230ac7c3d6b5bb8854_TypeType%20-%20TT%20Norms%20Pro%20Light%20Italic.ttf', dest: 'fonts/TTNormsPro-LightItalic.ttf' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/690bad5136b2f1657981e393_Velour-Light.woff2', dest: 'fonts/Velour-Light.woff2' },
  // Slider images
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/690b7dba4479bbce9a07a8f4_CG_LOBBY_02_20250710.jpg', dest: 'images/slide-1.jpg' },
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/65391e22b9674b9ad6cd3557_GREENPOINT_LOBBY_03.jpg', dest: 'images/slide-2.jpg' },
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/61fbe51d75426219ec790243_Market%20St%20Lobby%201.jpg', dest: 'images/slide-3.jpg' },
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/61fbe520abcc030482e92547_90Furman_Nov21-45-Edit.jpg', dest: 'images/slide-4.jpg' },
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/61fbe52155a36c1046303f7b_Tower%2031%20Lobby%203.jpg', dest: 'images/slide-5.jpg' },
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/61fbe52308ebb422f672c70e_4P_MASTER_BATHROOM%20RENDERING_LIGHT.jpg', dest: 'images/slide-6.jpg' },
  { url: 'https://cdn.prod.website-files.com/61fbe0dbc877437da831419a/61fbe51c2a8c7d58280b2b9e_4_PEQUOT_FAMILY_ROOM_3D_RENDERING_02.jpg', dest: 'images/slide-7.jpg' },
  // SVG logos/icons
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/65df3b2811108e7b1e67d577_be652f2802b622789ef83bf7c71386bb_Asprea-Monogram-wh.svg', dest: 'images/asprea-monogram.svg' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/6217c5bf7e669d2ca060ea0f_cb118bc55f0a6a196804cc4871e6cc4f_ig-white.svg', dest: 'images/instagram-white.svg' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/65ef55dd6db9de762680c7e3_Asprea-Horizontal-Lockup-wh.svg', dest: 'images/asprea-wordmark.svg' },
  // Favicon
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/690bb136ba984145ca020749_favicon.png', dest: 'favicon.png' },
  { url: 'https://cdn.prod.website-files.com/61fbdf4f3d0d844d2a57283f/690bb1395c27d8af54cadbfb_webclip.png', dest: 'apple-touch-icon.png' },
];

async function download(url, dest) {
  const fullPath = path.join(BASE, dest);
  mkdirSync(path.dirname(fullPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  await pipeline(res.body, createWriteStream(fullPath));
  console.log('✓', dest);
}

// Batch parallel downloads, 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => download(a.url, a.dest).catch(e => console.error('✗', a.dest, e.message))));
}
console.log('Done!');
