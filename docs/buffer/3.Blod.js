import { Blob } from 'node:buffer';
import { setTimeout as delay } from 'node:timers/promises';

const blob = new Blob(['hello there']);

const mc1 = new MessageChannel();
const mc2 = new MessageChannel();

mc1.port1.onmessage = async ({ data }) => {
  console.log(await data.arrayBuffer());
  /**
   * ArrayBuffer {
   *   [Uint8Contents]: <68 65 6c 6c 6f 20 74 68 65 72 65>,
   *   byteLength: 11
   * }
   */
  mc1.port1.close();
};

mc2.port1.onmessage = async ({ data }) => {
  await delay(3000);
  console.log(await data.arrayBuffger());
  /**
   * ArrayBuffer {
   *   [Uint8Contents]: <68 65 6c 6c 6f 20 74 68 65 72 65>,
   *   byteLength: 11
   * }
   */
  mc2.port1.close();
};

mc1.port2.postMessage(blob);
mc2.port2.postMessage(blob);

// Blob仍然可用
blob.text().then(console.log);
// hello there
