import { remote, type RemoteOptions } from 'webdriverio';
import { startConfig } from './config';

const capabilities: RemoteOptions['capabilities'] = {
  platformName: 'Android',
  'appium:platformVersion': '13',
  'appium:automationName': 'UiAutomator2',
  'appium:noReset': true,
  'appium:app': '/Users/bytedance/Downloads/iBiliPlayer-bili.apk',
};

const wdOpts: RemoteOptions = {
  hostname: '127.0.0.1',
  port: 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  const avatarElement = await getElementByClassAndId(driver, 'android.view.View', 'tv.danmaku.bili:id/avatar_layer');
  await avatarElement.saveScreenshot('./test.png');

  // 获取元素的位置和大小
  const location = await avatarElement.getLocation();
  const size = await avatarElement.getSize();

  // 计算要点击的位置
  const desiredOffsetX = 0;
  const desiredOffsetY = 0;
  const offsetX = location.x + size.width / 2;
  const offsetY = location.y + size.height / 2;
  const targetX = offsetX + desiredOffsetX; // 设置 X 偏移量
  const targetY = offsetY + desiredOffsetY; // 设置 Y 偏移量

  const windowRect = await driver.getWindowRect();
  console.log('--设备尺寸：', windowRect);
}

function getElementByClassAndId(driver: WebdriverIO.Browser, className: string, id: string) {
  return driver.$(`//${className}[@resource-id="${id}"]`);
}
function getElementById(driver: WebdriverIO.Browser, id: string) {
  return driver.$(`//[@resource-id="${id}"]`);
}
function getElementByClass(driver: WebdriverIO.Browser, className: string) {
  return driver.$(`//${className}`);
}

function getElementsByClassAndId(driver: WebdriverIO.Browser, className: string, id: string) {
  return driver.$$(`//${className}[@resource-id="${id}"]`);
}

function getElementsById(driver: WebdriverIO.Browser, id: string) {
  return driver.$$(`//[@resource-id="${id}"]`);
}
function getElementsByClass(driver: WebdriverIO.Browser, className: string) {
  return driver.$$(`//${className}`);
}

runTest().catch(console.error);
